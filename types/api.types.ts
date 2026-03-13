export type Meal = {
    id: string;
    label: string;
    description: string;
};

export type FamilyWithMeals = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    creatorId: string;
    meals: Meal[];
};

export type Family = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    creatorId: string;
};

export type Me = {
    id: string;
    email: string;
    name: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: string;
    updatedAt: string;
    familyId: string | null;
    family: Family | null;
};

export type MealType = 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'SNACK';

export type PlannedMeal = {
    id: string;
    type: MealType;
    date: string;
    meal: Meal;
}