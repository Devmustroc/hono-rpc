'use client';


import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useQuotes} from "@/hooks/quotes";
import {toast} from "sonner";

const QuoteForm = () => {
    const [text, setText] = React.useState<string>("");
    const { mutation } =  useQuotes();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate({ text });
        setText("");
    }
    return (
        <Card
            className="w-full md:w-1/2 mt-20"
        >
            <CardHeader>
                <CardTitle>
                    Quotes
                </CardTitle>
                <CardDescription>
                    You can add a new quote here.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <Input
                        disabled={mutation.isPending}
                        onChange={e => setText(e.target.value)}
                        value={text}
                        placeholder="Quote"
                    />
                </CardContent>
                <CardFooter>
                    <Button
                        disabled={mutation.isPending}
                    >
                        Add Quote
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default QuoteForm;