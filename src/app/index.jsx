import Image from "next/image";
import { Pizza, Database } from "lucide-react";
import Link from "next/link";
const linkList = [
  {
    id: 1,
    url: "/pizza-app",
    name: "Pizza App",
    icon: Pizza,
    svg: false,
  },
  {
    id: 2,
    url: "/react-dev",
    name: "React.js",
    icon: "",
    svg: "https://cdn.worldvectorlogo.com/logos/create-react-app.svg",
  },
  {
    id: 3,
    url: "/databases",
    name: "Server Side Development",
    icon: Database,
    svg: "https://cdn.worldvectorlogo.com/logos/postgresql-inc.svg",
  },
];

const Index = () => {
  return (
    <div className="flex h-full items-center justify-center bg-stone-900">
      <div className="flex flex-col gap-4 text-lg font-semibold text-blue-400">
        {linkList.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="flex gap-4 rounded-lg p-2 duration-200 hover:bg-stone-800 hover:shadow"
          >
            {link.svg ? (
              <div className="relative h-7 w-7 object-fill">
                <Image src={link.svg} fill alt="logo" />
              </div>
            ) : (
              <div className="h-7 w-7">
                <link.icon />
              </div>
            )}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Index;
