import { getMeAction } from "@/actions/authActions";
import CartItemsList from "@/components/templates/(marketing)/Cart/CartItemsList";
import Checkout from "@/components/templates/(marketing)/Cart/Checkout";
import Header from "@/components/templates/(marketing)/Cart/Header";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Cart',
  description: '...',
}

export default async function CartPage() {
  const user = await getMeAction();

  if (!user.isLogin) redirect("/");

  return (
    <div className="mt-10">
      <Header userId={user?.data?.id+""} />
      <div className="mt-6 grid grid-cols-4 gap-4 xl:gap-x-6 ">
        <div className="col-span-4 space-y-4 lg:col-span-3 xl:space-y-6">
          <CartItemsList userId={user?.data?.id + ""} />
        </div>
        <Checkout />
      </div>
    </div>
  );
}
