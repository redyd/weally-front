import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {apiFetch} from "@/lib/api";
import {Confirmation} from "@/types/api.types";

export function useJoinFamily(options?: UseMutationOptions<Confirmation, unknown, string>) {
    return useMutation({
        mutationFn: (code: string) =>
            apiFetch<Confirmation>(`/api/v1/family/join/${code}`, {
                method: 'POST',
            }),
        ...options,
    });
}