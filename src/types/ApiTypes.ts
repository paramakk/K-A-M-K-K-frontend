export type CardType = {
    id: number;
    question: string;
    answer: string;
}

export type CardGroupType = {
    id: number;
    author: string;
    name: string;
    cards: CardType[];
};

export type ThemeType = {
    id: number;
    name: string;
    cardGroups: CardGroupType[]
};
