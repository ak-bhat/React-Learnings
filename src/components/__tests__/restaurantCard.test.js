import { render, screen } from "@testing-library/react"
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

const RestaurantCardPromoted = withPromotedLabel (RestaurantCard)

it("Should load the restro card with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Sukrutham Catering");

    expect(name).toBeInTheDocument();
})

it("Should load the restro card with promoted props data",()=>{
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>)

    const name = screen.getByText("Promoted");

    expect(name).toBeInTheDocument();
})