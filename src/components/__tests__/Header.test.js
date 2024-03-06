import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appstore from "../../utils/appstore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should render a header component with button" , () => {
    render(
        <Provider store={appstore}>
            <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
         )

         const loginButton = screen.getByRole("button");

         expect(loginButton).toBeInTheDocument();
})

it("should be render a header with logout", () => {
    render(
        <Provider store={appstore}>
            <BrowserRouter>
        <Header/>
        </BrowserRouter>

        </Provider>
    )

    const loginButton = screen.getByRole('button',{name:"Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button',{name:'Logout'})

    expect(logoutButton).toBeInTheDocument()
})

