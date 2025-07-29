import PostCard from "@/components/PostCard";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "John Doe",
        profilePicture: "https://placehold.co/100x100.png",
      },
      _id: 1,
      description: "This is a sample post",
      image: "https://placehold.co/600x400",
      category: "General",
      title: "Sample Post",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 2,
        name: "John Doe",
        profilePicture: "https://placehold.co/100x100.png",
      },
      _id: 2,
      description: "This is a sample post",
      image: "https://placehold.co/600x400",
      category: "General",
      title: "Sample Post",
    },
  ];
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
            posts.map((post: PostCardType, index: number) => (
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
