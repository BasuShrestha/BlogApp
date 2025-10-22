import BlogCard from "../components/BlogCard";

export default function Home() {
  const dummyBlogs = [
    {
      _id: 1,
      title: "My First Blog",
      content: "This is an example blog post.",
      imageUrl: "https://via.placeholder.com/600x300",
      author: "John Doe",
    },
    {
      _id: 2,
      title: "React Tips and Tricks",
      content: "Some useful tips for building apps with React.",
      imageUrl: "https://via.placeholder.com/600x300",
      author: "Sarah Smith",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {dummyBlogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}
