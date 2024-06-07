export default function Header() {
  return (
    <section className="flex justify-between items-center gap-4 min-h-20 border-b px-2 border-gray-300 sticky">
      <h1 className="text-xl md:text-2xl xl:text-4xl">Image Generator</h1>
      <div className="flex gap-2">
        <button className="btn">Add Image</button>
        <button className="btn">Remove Random Image</button>
      </div>
    </section>
  );
}
