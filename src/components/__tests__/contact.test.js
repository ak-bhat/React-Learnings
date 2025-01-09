import { screen, render } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe("Contact page test case",()=>{
    it("Should load header inside Contact component",()=>{
        render(<Contact/>)
    
        const header = screen.getByRole("heading")
    
        expect(header).toBeInTheDocument()
    })
    
    it("Should load button inside Contact component",()=>{
        render(<Contact/>)
    
        const button = screen.getByRole("button")
    
        expect(button).toBeInTheDocument()
    })
    
    it("Should load given text inside Contact component",()=>{
        render(<Contact/>)
    
        const submit = screen.getByText("Submit")
    
        expect(submit).toBeInTheDocument()
    })
    
    it("Should load all input inside Contact component",()=>{
        render(<Contact/>)
    
        const input = screen.getAllByRole("textbox")
    
        expect(input.length).toBe(2)
    })
})