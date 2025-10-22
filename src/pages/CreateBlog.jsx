import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    console.log("Blog ready to upload:", {
      title,
      content,
      image: image ? image.name : "No image",
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create a New Blog
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter blog title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your blog content here..."
          className="w-full border p-2 rounded h-48 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div>
          <label className="block mb-1 font-medium">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {image && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full max-h-64 object-cover rounded"
              />
            </div>
          )}

          {image && (
            <p className="text-sm text-gray-600 mt-1">Selected: {image.name}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
