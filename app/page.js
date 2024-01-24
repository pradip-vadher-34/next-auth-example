import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>{session ? <UserCard /> : <h1>You don&#39;t have any session</h1>}</>
  );
}
