import { uploadCloth } from "../../components/api/clothesApi";

export default function UploadClothes({ refresh }) {

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await uploadCloth(formData);
    refresh();
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleUpload}
      className="bg-white border border-green-300/40 rounded-2xl p-5 mb-8
                 flex flex-wrap items-center gap-4 shadow-sm"
    >
      <select
        name="category"
        className="bg-white text-slate-700 border border-green-400/60
                   px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-green-400"
      >
        <option>Tops</option>
        <option>Bottoms</option>
        <option>Footwear</option>
        <option>Accessories</option>
      </select>

      {/* COLOR FIELD — AI ka future yahin likha jaata hai */}
      <select
        name="color"
        className="bg-white text-slate-700 border border-green-400/60
                   px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                   focus:ring-green-400"
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>

      <label className="relative cursor-pointer">
        <span className="bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-300 hover:bg-green-100 transition">
          Choose Image
        </span>
        <input
          type="file"
          name="image"
          required
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      <button
        className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium
                   hover:bg-green-500 transition-all shadow-md"
      >
        Upload
      </button>
    </form>
  );
}
