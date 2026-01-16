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

  // {
  //   id: 4,
  //   link: "/pizza-app/user",
  //   title: "User",
  // },
];
export default function Navigation() {
  return (
    <div className="bg-amber-400">
      <Link href="/">
        <h2 className="mb-1.5 text-center text-2xl font-extrabold tracking-widest">
          <span className="text-amber-600 text-shadow-sm">aievey&apos;s</span>{" "}
          Pizza co.
        </h2>
      </Link>
      <div className="flex justify-center">
        <div>
          <input
            placeholder="Search order"
            value=""
            className="mx-1 w-40 rounded-2xl bg-amber-50 px-2"
          />
          <button className="mx-1 rounded-2xl bg-orange-400 px-4 shadow">
            🍕
          </button>
        </div>
      </div>
      <ul className="flex items-center justify-center">
        {links.map((link) => (
          <li
            key={link.id}
            className="m-1 p-0.5 hover:scale-105 hover:bg-amber-300 hover:shadow"
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
