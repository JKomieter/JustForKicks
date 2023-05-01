import { describe, test, expect } from "vitest";
import Tertiary from "./Components/Tertiary/Tertiary";
import { screen, render } from "@testing-library/react";



describe("Tertiary", () => {
    test("should contain the word", () => {
        render(<Tertiary/>)
        expect(screen.getByText("ONLINE SUPPORT 24/7")).toBeDefined()
    })
})