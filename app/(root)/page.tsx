import PostCard, { PostCardType } from "@/components/PostCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import "@/app/globals.css";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const result = await sanityFetch({ query: POSTS_QUERY, params });
  const posts = result.data as PostCardType[];

  return (
    <>
      <section className="header-container animated-gradient">
        <h1 className="heading">Post Anything</h1>
        <p className="text-3xl text-center">
          Make your posts, share your thoughts, and connect with the world.
        </p>

        <SearchForm key={query} query={query} />
      </section>

      <section className="section-container">
        <p className="sub-heading mb-10">
          {query ? "Search results for: " + query : "All Posts"}
        </p>

        <ul className="card-grid">
          {posts?.length > 0 ? (
            posts.map((post: PostCardType) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No posts found.</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
