// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-purple-600 min-h-screen m-0 p-0 pt-10 pl-10">
      <h1 className="mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Page</Link>
      </p>
      <p>
        <Link href="/week-3">Go to Week 3 Page</Link>
      </p>
      <p>
        <Link href="/week-4">Go to Week 4 Page</Link>
      </p>
      <p>
        <Link href="/week-5">Go to Week 5 Page</Link>
      </p>
      <p>
        <Link href="/week-6">Go to Week 6 Page</Link>
      </p>
    </main>
  );
}