import Image from "next/image";

export default function TodoList() {
  return (
    <div className="rounded-xl bg-cyan-100 p-4 text-stone-600">
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <Image
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        height={100}
        width={100}
        className="rounded-md"
      />
      <ul className="ml-6 list-disc">
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
