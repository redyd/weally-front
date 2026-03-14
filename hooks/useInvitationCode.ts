import {useMutation} from "@tanstack/react-query";
import {apiFetch} from "@/lib/api";
import {Invitation} from "@/types/api.types";

export function useInvitationCode() {
    return useMutation({
        mutationFn: () =>
            apiFetch<Invitation>(`/api/v1/family/invite`, {
                method: 'POST',
            }),
    });
}