export default function ColorPreview({ colors }) {
  return (
    <div className="flex gap-3 justify-center my-4">
      {colors.map((c, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full shadow-md"
          style={{ backgroundColor: c }}
        ></div>
      ))}
    </div>
  );
}
