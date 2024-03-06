import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import DATA from "../mocks/ResList.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"


//fake an api call
global.fetch = jest.fn( () => {
    //when we make a fetch function it return promise 
    return Promise.resolve({
        //after resolving it will gives a response object and parse them into json 
        json:() => {
            //after resolving the response object we get the json data
            return Promise.resolve(DATA)
        }
    })
})

it("should checks the onchange function worksFlow", async() => {
    await act(async() => {
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })

    const BeforeOnchange = screen.getAllByTestId('rescard');

    expect(BeforeOnchange.length).toBe(9);


    // const input = screen.getByTestId("onchangeInput")

    // fireEvent.change(input, {target:{value:"Chennai Annapoorna"}});

    // const AfteronChange = screen.getAllByTestId('rescard');

    // expect(AfteronChange.length).toBe(1)

    
    
    

 
})