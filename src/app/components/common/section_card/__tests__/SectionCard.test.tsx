import * as React from "react";
import { shallow } from "enzyme";
//
import SectionCard from "../SectionCard";

it("renders without crashing", () => {
    shallow(<SectionCard />);
});
