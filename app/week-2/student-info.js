

import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h2>Raymond Gawalko</h2>
      <p>
        Check out my GitHub repository:{" "}
        <Link href="https://github.com/rgawalko/cprg306-assignments">
          Rgawalko github repository
        </Link>
      </p>
    </div>
  );
};

