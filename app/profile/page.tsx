import { LogoutButton } from "@/components/atomic/button/auth.button";
import { authOptions } from "@/utils/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="container mx-auto p-4">
      <div className="shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <p className="text-lg">
            Name: <span className="font-semibold">{session.user?.name}</span>
          </p>
          <p>
            Email: <span className="font-semibold">{session.user?.email}</span>
          </p>
        </div>
        <LogoutButton />
      </div>
    </main>
  );
}
