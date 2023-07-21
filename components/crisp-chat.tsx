"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("630bc657-f024-4c72-9c49-4f97c02cfbe1");
  }, []);

  return null;
};
