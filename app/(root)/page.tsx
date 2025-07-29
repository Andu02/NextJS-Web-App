import PostCard, { PostCardType } from "@/components/PostCard";
import SearchForm from "@/components/SearchForm";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = (await client.fetch(POSTS_QUERY)) as PostCardType[];

  return (
    <>
      <section className="header-container animated-gradient">
        <h1 className="heading">Post Anything</h1>
        <p className="text-3xl text-center">
          Make your posts, share your thoughts, and connect with the world.
        </p>

        <SearchForm query={query} />
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
    </>
  );
}
