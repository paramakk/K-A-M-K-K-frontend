import MockAxios from "../../../../utils/MockAxios";

const mockCards = new MockAxios([
    {
        id: 100,
        question: "kérdés",
        answer: "lofasz"
    },{
        id: 102,
        question: "kérdés 2",
        answer: "válfasz"
    },
]);

export default mockCards;
