import {MealType} from "@/types/api.types";

const frenchDayFormatter = new Intl.DateTimeFormat("fr-FR", {
    weekday: "short",
});

export function shortDate(date: Date): string {
    const day = frenchDayFormatter.format(date);
    return day.charAt(0).toUpperCase() + day.slice(1, day.length - 1);
}

const MEAL_TYPES: Record<MealType, string> = {
    BREAKFAST: "Petit-déjeuner",
    LUNCH: "Dinner",
    DINNER: "Souper",
    SNACK: "En-cas",
}

export function resolveName(type: MealType): string {
    return MEAL_TYPES[type];
}