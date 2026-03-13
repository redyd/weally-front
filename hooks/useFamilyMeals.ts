import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import {FamilyWithMeals} from "@/types/api.types";

export function useFamilyMeals(familyId: string | undefined | null) {
    return useQuery({
        queryKey: ['meals', familyId],
        queryFn: () => apiFetch<FamilyWithMeals>(`/api/v1/meals/family/${familyId}`),
        enabled: !!familyId,
    });
}