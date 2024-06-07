import { useCallback } from "react";
import { useRoot } from "../lib/hooks/useRoot";

export default function RemoveImageButton() {
  const { setToDelete, images, isLoading } = useRoot();

  const handleImageRemove = useCallback(() => {
    const imagesCopy = [...images];
    const toDelete = imagesCopy.splice(
      Math.floor(Math.random() * images.length),
      1
    );

    setToDelete(toDelete[0].id);
  }, [images, setToDelete]);

  return (
    <button className="btn" onClick={handleImageRemove} disabled={isLoading}>
      Remove Random Image
    </button>
  );
}
