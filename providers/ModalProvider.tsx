"use client";

import { useEffect, useState } from "react";

import { ProductWithPrice } from "@/types";


const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      Modal Provider
    </>
  );
}

export default ModalProvider;