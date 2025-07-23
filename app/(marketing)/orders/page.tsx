import { getMeAction } from "@/actions/authActions";
import Header from "@/components/templates/(marketing)/Orders/Header";
import OrdersList from "@/components/templates/(marketing)/Orders/OrdersList";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Orders',
  description: '...',
}

// const getOrders = cache(async (id: string) => {
//   return await prisma.order.findMany({
//     where: {
//       userId: id,
//     },
//     include: {
//       OrderItems: {
//         include: {
//           Product: true,
//         },
//       },
//     },
//   });
// });

export default async function orders() {
  const { isLogin } = await getMeAction();

  if (!isLogin) redirect("/");


  return (
    <div className="mt-10">
      <Header />
      <OrdersList orders={[]} />
    </div>
  );
}
