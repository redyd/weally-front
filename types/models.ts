export interface DaySchedule {
    morning?: Meal,
    noon?: Meal,
    evening?: Meal,
    snacks?: Meal[],
}

export interface Meal {
    name: string,
    description?: string,
    images: string[],
}