import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
      </ul>
      <p>
        <Link href="/week-2">Go to Week 2 Page</Link>
      </p>
    </main>
  );
}

