import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoginButton() {
  return (
    <Link href="/account/login">
      <Button>
        <LogInIcon className="h-4 w-4" />
        Log in
      </Button>
    </Link>
  );
}