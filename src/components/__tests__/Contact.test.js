import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//describe contains a multiple groups of test cases

describe("should be a test cases for contact", () => {
    test("should be a header in component", () => {
        //render the component
        render(<Contact/>)//this render comes react testing library
    
        //checking if header is inside my component
        //we can check the lenght because it gives the length of the how many tags
        const heading = screen.getAllByRole("heading");
    
        expect(heading.length).toBe(2);
    })
})

