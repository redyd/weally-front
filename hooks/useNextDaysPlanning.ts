import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import {MealsPerDay} from "@/types/api.types";

export function useNextDaysPlanning(familyId: string | undefined | null, days: number = 5) {
    return useQuery({
        queryKey: ['nextDays', familyId],
        queryFn: () => apiFetch<MealsPerDay[]>(`/api/v1/planning/future/${familyId}?days=${days}`),
        enabled: !!familyId,

        select: (data) =>
            data.map((meal) => ({
                ...meal,
                day: new Date(meal.day),
            })),
    });
}