import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">
        <Link to="/">Blogify</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
