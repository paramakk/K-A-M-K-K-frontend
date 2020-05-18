import MockAxios from "../../../../utils/MockAxios";
import {CardGroupType} from "../../../../types/ApiTypes";

const mockCardGroup = new MockAxios<CardGroupType>({
    id: 100,
    name: "Első ea",
    author: "Ádám",
    cards: [
        {
            id: 100,
            question: "How 'bout that??",
            answer: "This is it"
        },
        {
            id: 100,
            question: "Yolo swegaratty??",
            answer: "Its me"
        },
        {
            id: 100,
            question: "Ez a harmadik kerdes??",
            answer: "Maybe"
        },
        {
            id: 100,
            question: "A pápa hangosan szokott köszönni??",
            answer: "Tuti"
        },
        {
            id: 100,
            question: "Git-Home_subject-page??",
            answer: "Da da"
        },
        {
            id: 100,
            question: "M??",
            answer: "DDDD"
        }
    ]
});

export default mockCardGroup;
