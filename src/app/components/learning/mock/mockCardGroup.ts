import MockAxios from "../../../../utils/MockAxios";
import {CardGroupType} from "../../../../types/ApiTypes";

const mockCardGroup = new MockAxios<CardGroupType>({
    id: 100,
    name: "Első ea",
    author: "Ádám",
    cards: [
        {
            id: 100,
            question: "Mikor volt István, királlyá koronázása?",
            answer: "1001. jan. 1."
        },
        {
            id: 101,
            question: "Kik voltak a Küklopszok a görög mitológiában?",
            answer: "egyszemű óriások"
        },
        {
            id: 103,
            question: "Ki volt a második honalapító?",
            answer: "IV. Béla"
        },
        {
            id: 104,
            question: "Mikor alapították a Pannonhalmi apátságot?",
            answer: "996-ban"
        },
        {
            id: 102,
            question: "Ki volt Dzsingisz kán?",
            answer: "mongol császár"
        }
    ]
});

export default mockCardGroup;
