import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-700 text-sm line-clamp-3">{blog.content}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm text-gray-500">By {blog.author}</span>
          <Link
            to={`/blog/${blog._id}`}
            className="text-blue-600 text-sm hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
