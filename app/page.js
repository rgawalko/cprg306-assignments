// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-purple-600 min-h-screen m-0 p-0 pt-10 pl-10">
      <h1 className="mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <p className=" mb-2">
        <Link href="/week-2">Go to Week 2 Page</Link>
      </p>
      <p>
        <Link href="/week-3">Go to Week 3 Page</Link>
      </p>
    </main>
  );
}