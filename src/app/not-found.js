import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <div className="flex flex-col items-center gap-2">
                <div className="font font-semibold text-5xl">
                    404
                </div>
                <div className="font-medium text-2xl text-[#4E4E4E]">
                    Page Not Found
                </div>
            </div>

            <div className="font-medium text-[#6C6C6C] text-[16px]">
                Oops! The page you're looking for doesn't exist or has been moved.
            </div>

            <div className="flex gap-4">
                
                <Button asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>

                <Button asChild variant='outline'>
                    <Link href="">Contact Support</Link>
                </Button>
            </div>
        </div>
    );
}