import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useMediaQuery} from "usehooks-ts";

type Props = {
    session: boolean;
    user: {
        name: string;
        email: string;
        image: string;
    };
}


const link = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]


const Navbar = ({ user, session }: Props) => {
    const matches = useMediaQuery('(max-width: 768px)')
    return (
        <div
            className="w-full mx-auto px-4 py-4"
        >
            <div
                className="flex items-center justify-end space-x-4 md:justify-between"
            >
                <div
                    className="hidden md:flex items-center space-x-4"
                >
                    <Image
                        src="/placeholder.svg"
                        alt="Logo"
                        width="150"
                        height="150"
                    />
                </div>
                <div
                    className="flex items-center space-x-4"
                >
                    <ol
                        className="hidden md:flex items-center space-x-4"
                    >
                        {
                            link.map((item, index) => (
                                <li
                                    key={index}
                                    className="inline-block"
                                >
                                    <Button
                                        variant="outline"
                                        className="text-black hover:text-black"
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-black hover:text-black font-bold "
                                        >
                                            {item.name}
                                        </Link>
                                    </Button>
                                </li>
                            ))
                        }
                    </ol>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src={user.image} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {
                                    matches && (
                                        <ol
                                            className="flex flex-col items-start space-y-4"
                                        >
                                            {
                                                link.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="inline-block"
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="text-black hover:text-black"
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className="text-black hover:text-black font-bold "
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </Button>
                                                    </li>
                                                ))
                                            }
                                        </ol>
                                    )
                                }
                                <DropdownMenuItem>
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        asChild
                                    >
                                        <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                                            {session ? "Sign Out" : "Sign In"}
                                        </Link>
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;