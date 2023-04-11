"use client";

import EmptyState from "@/app/components/EmptyState";
import { useEffect } from "react";

type ErrorPageProps = {
  error?: Error;
};

function ErrorPage({ error }: ErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState title="Uhh.. Ohh" subtitle="Something wen't wrong :(" />;
}

export default ErrorPage;
