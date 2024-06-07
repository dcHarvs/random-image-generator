import AddImageButton from "./AddImageButton";
import RemoveImageButton from "./RemoveImageButton";

export default function Header() {
  return (
    <section className="w-full border-b px-2 border-gray-300 sticky top-0 z-20 bg-gray-100">
      <nav className="container max-w-screen-lg mx-auto min-h-20 flex justify-between items-center gap-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
          Image Generator
        </h1>
        <div className="flex gap-2">
          <AddImageButton />
          <RemoveImageButton />
        </div>
      </nav>
    </section>
  );
}
