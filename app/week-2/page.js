import Link from 'next/link';
import StudentInfo from './student-info';   

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
export default function Week2Page() {
    return (
      <main>
        <h1>Week 2</h1>
        <StudentInfo />
      </main>
    );
  }