import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should load login button in Header component",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
    ) 

    const loginButton = screen.getByRole("button",{name:"Login"})

    expect(loginButton).toBeInTheDocument()
})


it("Should load Cart in Header component",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
    ) 

    const cart = screen.getByText(/Cart/)
    // const cart = screen.getByText("Cart (0)")

    expect(cart).toBeInTheDocument()
})

it("Should load logout button in Header component",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
        
    ) 

    const loginButton = screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:"Logout"})


    expect(logoutButton).toBeInTheDocument()
})