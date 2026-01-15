import Link from "next/link";

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="/pizza-app/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
