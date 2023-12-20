import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div>Landing Page (Unprotected)</div>
      <div>
        <Link href="/sign-in">
          <Button>sign-in</Button>
        </Link>
        <Link href="/sign-in">
          <Button>sign-up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
