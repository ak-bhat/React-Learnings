import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/resMenuMock.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(()=>    
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)})
)

it("Should load restro menu page and accordian", async ()=>{
    await act( async ()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
            
        )
    })

    const accordionHeader = screen.getByText("Recommended (6)")

    fireEvent.click(accordionHeader)

    const food = screen.getAllByTestId("menuList")

    expect(food.length).toBe(21)

})


it("Should load add button and change Cart details", async ()=>{
    await act( async ()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
            
        )
    })


    const addBtn = screen.getAllByRole("button",{name:"ADD+"})

    fireEvent.click(addBtn[0])

    const cartNos = screen.getByText("Cart (1)")

    expect(cartNos).toBeInTheDocument()

})


it("Should load Cart and check details", async ()=>{
    await act( async ()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
            
        )
    })

    
    const food = screen.getAllByTestId("cartList")

    expect(food.length).toBe(1)

})

it("Should Clear Cart and check details", async ()=>{
    await act( async ()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
            
        )
    })

    
    const clrBtn = screen.getByRole("button",{name:"Clear Cart"})

    fireEvent.click(clrBtn)

    const empty = screen.getByText("Cart is Empty")

    expect(empty).toBeInTheDocument()

})