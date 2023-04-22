import {  render, screen } from "@testing-library/react"
import CoApp from "./CoApp"
// import matchers from "@testing-library/jest-dom/matchers"
// expect.extend(matchers)

it("should have hello world", () => {
    render(<CoApp/>)
    const message = screen.queryByText(/Hello world/i)
    expect(message).toBeVisible()
})