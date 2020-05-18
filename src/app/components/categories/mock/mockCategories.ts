import MockAxios from "../../../../utils/MockAxios";
import {CategoryType} from "../../../../types/ApiTypes";

const mockCategories = new MockAxios<CategoryType[]>([
    {
        id: 100,
        name: "Matematika",
        description: "A legfelemelőbb hazaérés után egy jó kis matek"
    },
    {
        id: 101,
        name: "Informatika",
        description: "Tanulj informatikát a legjobb informatikusoktól!"
    }
]);

export default mockCategories;
