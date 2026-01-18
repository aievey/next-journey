import MenuItem from "./menu-item";
async function Menu() {
  const pizzaQuery = await fetch(
    "https://react-fast-pizza-api.onrender.com/api/menu",
  );
  const { data } = await pizzaQuery.json();
  return (
    <div className="divide-y divide-amber-200">
      <h1 className="text-center text-xl font-semibold text-stone-700">Menu</h1>
      {data.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Menu;
