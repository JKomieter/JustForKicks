import { describe, test, expect } from "vitest";
import Tertiary from "./Components/Tertiary/Tertiary";
import { screen, render } from "@testing-library/react";



describe("Accordion", () => {
    test("should add two numbers", () => {
        render(<Tertiary/>)
        expect(screen.getByText("ONLINE SUPPORT 24/7")).toBeDefined()
    })
})