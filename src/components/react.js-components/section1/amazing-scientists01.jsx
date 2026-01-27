import Image from "next/image";
const AmazingScientists = () => {
  return (
    <Image
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
      width={100}
      height={100}
      className="rounded-md"
    />
  );
};
const Gallery = () => {
  return (
    <section className="rounded-xl bg-cyan-100 p-4 text-stone-600">
      <h1 className="mb-4 text-2xl font-semibold">Amazing Scientists</h1>
      <div className="flex gap-4">
        <AmazingScientists />
        <AmazingScientists />
        <AmazingScientists />
      </div>
    </section>
  );
};
export default Gallery;
