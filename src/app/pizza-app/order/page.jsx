"use client";
import { useState } from "react";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="flex h-full flex-col items-center bg-amber-50 text-left">
      <h2 className="text-center text-xl font-semibold text-stone-700">
        Ready to order? Let's go!
      </h2>

      <form>
        <div className="flex flex-col">
          <label className="text-stone-700">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="rounded-2xl bg-amber-100"
          />
        </div>

        <div>
          <label className="text-stone-700">Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="rounded-2xl bg-amber-100"
            />
          </div>
        </div>

        <div>
          <label className="text-stone-700">Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="rounded-2xl bg-amber-100"
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />{" "}
          <label className="text-stone-700" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <button className="rounded-2xl bg-amber-400 p-1 px-4 font-bold tracking-wider text-stone-700">
            Order now
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
