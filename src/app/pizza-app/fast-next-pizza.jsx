import CartOverview from "./cart/CartOverview";
import CreateUser from "./user/user";
export default async function PizzaMenu() {
  return (
    <>
      <div className="flex h-full w-full flex-col justify-center bg-amber-50">
        <h1 className="text-center text-xl font-semibold text-stone-700">
          The best pizza.
          <br />
          <span className="text-amber-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <CreateUser />
      </div>
    </>
  );
}
