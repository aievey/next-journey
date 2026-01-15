import Pizza from "@/ui/pizza-card";
import CartOverview from "@/ui/cart-overview";
export default async function PizzaMenu() {
  const rawData = await fetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );
  const { data } = await rawData.json();

  return (
    <div>
      <Pizza />
      <ul>
        {data.map((pizza) => (
          <li key={pizza.id}>
            {pizza.id} {pizza.name}
          </li>
        ))}
      </ul>
      <CartOverview />
    </div>
  );
}
