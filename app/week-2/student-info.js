// student-info.js
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Your Name</h1>
      <p>
        Check out my GitHub repository:{" "}
        <Link href="https://github.com/rgawalko/cprg306-assignments">
          <a>GitHub Repository</a>
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;