import MockAxios from "../../../../utils/MockAxios";
import {CardType, CategoryType, ThemeType} from "../../../../types/ApiTypes";

const mockTheme = new MockAxios<ThemeType>({
    id: 110,
    name: "Analízis 1",
    author: "Csernus Ádám",
    createdAt: "2020.05.11",
    cardGroups: [
        {
            id: 100,
            author: "Csernus Ádám",
            name: "Első előadás",
            createdAt: "2020.02.04",
            cards: [{},{},{}]
        },
        {
            id: 102,
            author: "Csernus Ádám",
            name: "Második előadás",
            createdAt: "2020.02.06",
            cards: [{},{},{},{},{},{},{}]
        }
    ]
});

export default mockTheme;
