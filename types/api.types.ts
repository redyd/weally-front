export type Meal = {
    id: string;
    label: string;
    familyId: string;
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