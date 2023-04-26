import { describe, expect, it } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import BigImg from "./Components/BigImg/BigImg";
import { IoIosArrowBack } from "react-icons/io"


describe("BigImg Component", () => {
    it("should have an svg", () => {
       const wrapper = render(<BigImg/>);
       expect(wrapper.getByRole("arrow")).toBe(true)
    })
})