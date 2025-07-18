"use client";

import { useEffect } from "react";

export default function VisitCounter({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    async function addVisit() {
      // const res = await addVisitAction();
    }

    addVisit();
  }, []);

  return <>{children}</>;
}
