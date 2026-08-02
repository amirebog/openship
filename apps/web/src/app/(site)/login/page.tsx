
"use client";
import { useEffect } from "react";

export default function LoginRedirect() {
  useEffect(() => {
    window.location.href = "https://app.zyrix.ir/login";
  }, []);
  return null;
}
