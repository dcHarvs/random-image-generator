import { useEffect } from "react";
import { useRoot } from "../lib/hooks/useRoot";

export default function Gallery() {
  const { images, setImages, setToDelete, toDelete, isLoading } = useRoot();

  useEffect(() => {
    if (!toDelete) return;

    setTimeout(() => {
      setImages(images.filter(({ id }) => id != toDelete));
      setToDelete("");
    }, 300);
  }, [images, toDelete, setImages, setToDelete]);

  return (
    <section
      className={`flex-1 grid relative container max-w-screen-lg mx-auto py-4 px-2 ${
        images.length
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-content-start"
          : "place-content-center place-items-center"
      }`}
    >
      {images.map(({ id, imageSrc }) => {
        return (
          <div
            key={id}
            className={`max-h-[256px] p-2 rounded-lg shadow-sm border border-gray-200 transition-transform ease-out duration-300 ${
              id == toDelete ? "scale-0" : "scale-100"
            }`}
          >
            <img
              src={imageSrc}
              alt={id}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
      {images.length === 0 && !isLoading && (
        <div className="self-center place-self-center text-center max-w-screen-sm space-y-4">
          <h1 className="text-6xl font-bold text-gray-400">
            No image generated
          </h1>
          <p className="text-gray-400">
            Click on the "Add Image" button to generate random image.
          </p>
        </div>
      )}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full grid place-content-center place-items-center z-10 backdrop-blur-sm">
          <span className="border-slate-400 size-8 sm:size-12 lg:size-16 animate-spin rounded-full border-4 sm:border-[6px] lg:border-[8px] border-t-slate-700"></span>
        </div>
      )}
    </section>
  );
}
