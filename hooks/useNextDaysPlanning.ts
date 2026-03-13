import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import {PlannedMeal} from "@/types/api.types";

export function useNextDaysPlanning(familyId: string | undefined | null, days: number = 5) {
    return useQuery({
        queryKey: ['nextDays', familyId],
        queryFn: () => apiFetch<PlannedMeal[]>(`/api/v1/planning/future/${familyId}?days=${days}`),
        enabled: !!familyId,
    });
}