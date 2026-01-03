export default function ClothesCard({ item, remove }) {
  return (
    <div className="max-w-64 font-poppins">
      <div className="group relative">
        <img
          src={`http://localhost:5000/uploads/${item.image}`}
          alt="img1"
          className="rounded-lg w-full h-72 object-cover group-hover:hidden transition-all duration-300"
        />

        <img
          src={`http://localhost:5000/uploads/${item.image}`}
          alt="img2"
          className="hidden group-hover:block rounded-lg w-full h-72 object-cover shadow-lg transition-all duration-300"
        />
      </div>

      <p className="text-sm mt-2 text-slate-700 capitalize">
        {item.category}
      </p>

      <button
        onClick={() => remove(item._id)}
        className="mt-2 text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
}
