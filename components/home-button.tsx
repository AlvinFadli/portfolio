import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <>
      <div>
        <Button
          variant={"ghost"}
          asChild
          className="px-0 hover:bg-white hover:text-primary-700 hover:font-medium"
        >
          <Link href={"/"}>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </>
  );
}
