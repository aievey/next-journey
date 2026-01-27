import Link from "next/link";
const ReactLayout = ({ children }) => {
  return (
    <div className="h-full bg-cyan-700 text-cyan-50">
      <Link href="/react-dev/describing-the-ui">Lesson 1</Link>
      <Link href="/react-dev">Home</Link>
      {children}
    </div>
  );
};

export default ReactLayout;
