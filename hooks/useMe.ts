import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import { User } from '@/types/api.types';

export function useMe() {
    return useQuery({
        queryKey: ['me'],
        queryFn: () => apiFetch<User>('/api/v1/users/me'),
    });
}