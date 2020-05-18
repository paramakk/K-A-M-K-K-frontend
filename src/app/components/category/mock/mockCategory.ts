import MockAxios from "../../../../utils/MockAxios";
import { CategoryType } from "../../../../types/ApiTypes";

const mockCategory = new MockAxios<CategoryType>({
    id: 101,
    name: "Informatika",
    description: "Tanulj informatikát a legjobb informatikusoktól!",
    themes: [
        {
            id: 110,
            name: "Analízis 1",
            author: "Csernus Ádám",
            createdAt: "2020.05.11"
        },
        {
            id: 111,
            name: "Valószínűségszámítás és statisztika",
            author: "Vultur Kornél",
            createdAt: "2020.05.03"
        }
    ]
});

export default mockCategory;
