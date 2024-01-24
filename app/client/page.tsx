"use client";
import React from "react";
import UserCard from "../components/UserCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });
  return (
    <>
      <UserCard user={session?.user} />
    </>
  );
};

export default ClientPage;
