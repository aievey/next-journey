import Navigation from "@/components/pizza-menu-components/header";
import CartOverview from "./cart/CartOverview";

export const metadata = {
  title: "Pizza App",
  description: "In development",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Navigation />
      <div className="mt-25 h-full pb-15">{children}</div>
      <CartOverview />
    </div>
  );
}
