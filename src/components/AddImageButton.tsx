import { useCallback } from "react";
import { useRoot } from "../lib/hooks/useRoot";
import { getRandomImage } from "../api/getRandomImage";

export default function AddImageButton() {
  const { setImages, isLoading, setIsLoading } = useRoot();

  const handleAddImage = useCallback(async () => {
    setIsLoading(true);
    const { data, error } = await getRandomImage();

    if (error) {
      console.log(error);
      alert(error);
      return;
    }

    if (data) {
      setImages((prevImages) => {
        return [...prevImages, data];
      });
      setIsLoading(false);
    }
  }, [setImages, setIsLoading]);

  return (
    <button className="btn" onClick={handleAddImage} disabled={isLoading}>
      Add Image
    </button>
  );
}
