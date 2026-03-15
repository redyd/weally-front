import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {apiFetch} from "@/lib/api";
import {Confirmation} from "@/types/api.types";

export function useLeaveFamily(options?: UseMutationOptions<Confirmation>) {
    return useMutation({
        mutationFn: () =>
            apiFetch<Confirmation>(`/api/v1/family/leave`, {
                method: 'POST',
            }),
        ...options,
    });
}