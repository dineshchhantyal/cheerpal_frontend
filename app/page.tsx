import Image from "next/image";
const styles = {
  headers: "text-4xl font-bold text-yellow-600",
};

export default function Home() {
  return (
    <main className="px-24 py-8">
      <h1 className={styles.headers}>Cheerpal</h1>
      <div className="flex"></div>
    </main>
  );
}
