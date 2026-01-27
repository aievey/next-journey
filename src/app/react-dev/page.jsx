import Image from "next/image";

const WelcomeToReact = () => {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <Image
        src="https://cdn.worldvectorlogo.com/logos/create-react-app.svg"
        alt="react logo"
        height={50}
        width={50}
      />
      <h1 className="text-2xl">Welcome To React</h1>
    </div>
  );
};

export default WelcomeToReact;
