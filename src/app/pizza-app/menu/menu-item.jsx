import { formatCurrency } from "@/lib/helpers";
import Image from "next/image";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2 pl-3 text-stone-800">
      <Image
        height={100}
        width={100}
        src={imageUrl}
        alt={name}
        className={`rounded-xl ${soldOut ? "opacity-70 grayscale" : ""} `}
      />
      <div className="flex w-full flex-col">
        <p className="font-bold tracking-widest">{name}</p>
        <p className="text-sm font-light capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="w mt-auto flex items-center justify-between pr-3">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}{" "}
          <button className="rounded-2xl bg-amber-400 px-2 py-1 text-sm font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
