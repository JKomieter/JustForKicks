import { describe, expect, it } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import NavBar from "./Components/NavBar/NavBar";


describe("NavBar Component", () => {
    it("should render the NavBar comp directly", () => {
        render(<NavBar/>)
        const element = screen.findByText("Search");
        expect(element).toBeDefined()
    })
    it("should show searchlist when user types in input", () => {
        render(<NavBar/>);
        const inputEl = screen.getByRole('textbox');
        fireEvent.focus(inputEl);
        const searchList = document.querySelector(".searchShoes")
        expect(searchList).toBeDefined()
    })

})