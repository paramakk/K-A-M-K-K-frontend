export type CardType = {
    id: number;
    question: string;
    answer: string;
}

export type CardGroupType = {
    id: number;
    author: string;
    name: string;
    createdAt: string;
    cards: CardType[];
};

export type ThemeType = {
    id: number;
    title: string;
    author: string;
    createdAt: string;
    cardGroups: CardGroupType[]
};


export type CategoryType = {
    id: number;
    title: string;
    description: string;
    themes: ThemeType[];
};
