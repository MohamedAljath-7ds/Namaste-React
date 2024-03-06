import React from 'react';
import { render, screen } from '@testing-library/react';
import ResCard, { PromotedRes } from '../Rescard';
import "@testing-library/jest-dom"

describe('ResCard Component', () => {
  const mockResData = {
    info: {
      name: "Chinese Wok",
      cloudinaryImageId: 'test_image_id',
      cuisines: ['Italian', 'Mexican'],
      locality: 'Test Locality',
      areaName: 'Test Area',
      avgRating: 4.5,
      costForTwo: '$$',
    },
  };

  it('should renders restaurant information correctly', () => {
    
    render(
        <ResCard resData= {mockResData}/>
    )

    const name = screen.getByText(mockResData?.info?.name);// chinese wok 
    
    expect(name).toBeInTheDocument(); // we check wheather this chinese wok restaurant is render or not
   
  });

  
it("should render a higher order component", ()=> {
    const RescardWithopen = PromotedRes(ResCard);
    render(<RescardWithopen resData={mockResData}/>)
    const textOffer = screen.getByText("Offers Going on !!!");
    expect(textOffer).toBeInTheDocument();
})

});
