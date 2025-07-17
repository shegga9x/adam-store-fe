"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore, selectIsAdmin } from "@/stores/authStore";

export default function ProtectAdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = useAuthStore(selectIsAdmin);
  const router = useRouter();
  console.log("ProtectAdminRoute isAdmin:", isAdmin);
  
  useEffect(() => {
    if (!isAdmin) {
      router.replace("/");
    }
  }, [isAdmin, router]);

  return <>{children}</>;
}
