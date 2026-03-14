import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import { Me } from '@/types/api.types';

export function useMe() {
    return useQuery({
        queryKey: ['me'],
        queryFn: () => apiFetch<Me>('/api/v1/users/me'),
    });
}