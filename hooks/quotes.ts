import {client} from "@/lib/hono";
import {InferRequestType, InferResponseType} from "hono";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

const $post = client.api.quotes.$post;
type ResponseType = InferResponseType<typeof $post>;
type RequestType = InferRequestType<typeof $post>["form"];

export const useQuotes = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (form) => {
            const res = await $post({form});
            return await res.json();
        },
        onSuccess: () => {
            toast.success("Quote added");
            queryClient.invalidateQueries({ queryKey: ["quotes"] });
        },
        onError: error => {
            toast.error(error.message);
        }
    });

    const query = useQuery({
        queryKey: ["quotes"],
        queryFn: async () => {
            const res = await client.api.quotes.$get();
            return res.json();
        }
    });

    return {query , mutation };
}
