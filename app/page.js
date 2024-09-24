// app/page.js
import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Page</Link>
      </p>
      <p>
        <Link href="/week-3">Go to Week 3 Page</Link>
      </p>
    </main>
  );
}
