import { useEffect, useState } from "react";
import { getClothes, deleteCloth } from "../components/api/clothesApi";
import UploadClothes from "../components/wardrobe/UploadClothes";
import ClothesGrid from "../components/wardrobe/ClothesGrid";

export default function MyWardrobe() {
  const [clothes, setClothes] = useState([]);

  const fetchClothes = async () => {
    try {
      const data = await getClothes();
      setClothes(data.clothes || []);
    } catch (err) {
      console.log("Fetch Error ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCloth(id);      // API hit
      setClothes(prev => prev.filter(item => item._id !== id));  // UI kill
    } catch (err) {
      console.log("Delete Error ", err);
    }
  };

  useEffect(() => { fetchClothes(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My AI Wardrobe</h1>
      <UploadClothes refresh={fetchClothes} />
      <ClothesGrid clothes={clothes} remove={handleDelete} />
    </div>
  );
}
