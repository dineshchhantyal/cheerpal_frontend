import { RegisterForm } from "@/components/Forms/RegisterForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session) {
    redirect("/profile");
  }
  return (
    <div
      style={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
