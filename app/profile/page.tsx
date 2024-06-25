import { LogoutButton } from "@/components/atomic/button/auth.button";
import { authOptions } from "@/utils/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="container">
      <h1>Profile</h1>
      <p className="lead">
        Welcome back, {session.user?.name}! Your email is {session.user?.email}.
      </p>
      <LogoutButton />
    </main>
  );
}
