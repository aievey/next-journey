import Link from "next/link";

function CartOverview() {
  return (
    <div className="fixed bottom-0 flex w-full justify-between bg-stone-800 p-4 text-stone-100">
      <p className="font-bold uppercase">
        <span className="text-amber-400">23 pizzas : </span> <span>$23.45</span>
      </p>
      <Link href="/pizza-app/cart" className="text-amber-400">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
