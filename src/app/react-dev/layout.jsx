import Link from "next/link";

const linkList = [
  {
    id: 1,
    name: "Section 1",
    url: "/react-dev/describing-the-ui",
  },
  {
    id: 2,
    name: "Section 2",
    url: "",
  },
  {
    id: 3,
    name: "Section 3",
    url: "",
  },
];
const ReactLayout = ({ children }) => {
  return (
    <div className="grid h-full grid-cols-4 bg-stone-900 text-cyan-50">
      <div className="flex flex-col gap-4 bg-stone-800 p-2 md:p-4">
        <Link href="/react-dev" className="font-bold">
          Home
        </Link>
        <div className="flex h-full flex-col gap-1">
          {linkList.map((link) => (
            <Link
              key={link.id}
              className="rounded-md p-1 text-sm duration-200 hover:bg-cyan-800 hover:shadow md:px-3 md:text-lg"
              href={link.url}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link href="/" className="mt-auto font-semibold text-purple-600">
          Home
        </Link>
      </div>
      <div className="col-span-3 overflow-hidden">{children}</div>
    </div>
  );
};

export default ReactLayout;
