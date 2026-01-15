import Link from "next/link";

const links = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/pizza-app/menu",
    title: "Menu",
  },
  {
    id: 3,
    link: "/pizza-app/order",
    title: "Orders",
  },
  {
    id: 4,
    link: "/pizza-app/user",
    title: "User",
  },
];
export default function Navigation() {
  return (
    <div className="bg-blue-200">
      <ul className="flex justify-center items-center">
        {links.map((link) => (
          <li
            key={link.id}
            className="mx-2 bg-amber-400 hover:shadow hover:scale-105 px-2"
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
