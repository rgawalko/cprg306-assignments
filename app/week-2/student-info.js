"use client";

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h2>Your Name</h2>
      <p>
        Check out my GitHub repository:{" "}
        <Link href="https://github.com/your-username/your-repository">
          GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
