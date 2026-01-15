import Link from "next/link";

const links = [
  {
    id: 1,
    link: "",
    title: "cart",
  },
  {
    id: 2,
    link: "",
    title: "Home",
  },
  {
    id: 3,
    link: "",
    title: "orders",
  },
];
export default function Navigation() {
  return (
    <>
      <ul className="flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="mx-2 bg-amber-400 hover:shadow hover:scale-105 px-2"
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
