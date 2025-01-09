import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/searchResMock.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"
import "@testing-library/jest-dom"



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("Should render page with Search", async()=>{
    await act( async ()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const searchButton = screen.getByRole("button", {name:"Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target:{value:"Plaza"}})

    fireEvent.click(searchButton)

    const cards = screen.getAllByTestId("resCards")

    expect(cards.length).toBe(1)
})