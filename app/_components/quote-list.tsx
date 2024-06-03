import React from 'react';
import {Card, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import {formatDistanceToNow} from "date-fns";
import {useQuotes} from "@/hooks/quotes";

const QuoteList = () => {
    const { query } = useQuotes();
    return (
        <>
            {
                query.data?.map((quote) => {
                    return (
                        <Card
                            key={quote.id}
                            className="w-full md:w-1/2 mt-4 hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <CardHeader>
                                <CardDescription
                                    className='text-black'
                                >
                                    { quote.text }
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <p>
                                    { quote.user.name }, { formatDistanceToNow(new Date(quote.createdAt), { addSuffix: true }) }
                                </p>
                            </CardFooter>
                        </Card>
                    )
                })
            }

        </>
    );
};

export default QuoteList;