import MockAxios from "../../../../utils/MockAxios";

const mockCardGroup = new MockAxios([
    {
        id: 100,
        question: "How 'bout that??",
        answer: "This is it"
    },{
        id: 100,
        question: "Yolo swegaratty??",
        answer: "Its me"
    },
]);

export default mockCardGroup;
