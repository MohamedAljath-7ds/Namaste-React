import { sum } from "../sum"

test("should be add the number of two",()=>{

    //call the sum function
    const result = sum(3,6);
    //Assertion
    expect(result).toBe(9);

    const result2 = sum(1,2);
    expect(result2).toBe(3);
    

})