'use client';

import {useSession} from "@/hooks/useSession";
import {Loader2} from "lucide-react";
import {redirect} from "next/navigation";
import Navbar from "@/app/_components/navbar";
import QuoteForm from "@/app/_components/quote-form";
import QuoteList from "@/app/_components/quote-list";

export default function Home() {
    const {status, session } = useSession();


    if (status === "pending") {
       return (
           <div
            className="flex flex-col items-center justify-center h-screen"
           >
               <Loader2
                    className="w-[250px] h-[250px] text-blue-500 animate-spin"
               />
           </div>
       )

    }

    if (!session) {
        redirect("/signin")
    }
    return (
        <div
            className="px-0"
        >
            <div
                className="flex flex-col max-w-screen-2xl mx-auto px-4 py-4"
            >
                <Navbar user={session.user} session={!!session}/>
                <div
                    className="flex flex-col items-center justify-center space-y-4"
                >
                    <QuoteForm />
                </div>
                <div
                    className="flex flex-col items-center justify-center mt-10"
                >
                    <p
                        className="text-2xl font-bold"
                    >
                        Quotes List
                    </p>
                    <div
                        className="h-1 w-40 bg-blue-500 rounded-md mb-4 translate-x-1 animate-bounce mt-1"
                    />
                    <QuoteList />
                </div>
            </div>
        </div>
    );
}
