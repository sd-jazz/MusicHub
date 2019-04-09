const utils = require('./utils');
const axios = require('axios'); 
// Container describe block

describe("Unit tests for utils.js", () => {
    
    describe("function1", () => {
      it("should add a & b together", () => {
        /* 
            function1(a, b) {
                return a + b
            } 
        */ 
       // fires function 1 with 2 + 4 as arguments, expect 6 
        expect(utils.function1(2, 4)).toEqual(6)
      })
    }); 

    describe("function2", () => {
        it("should return Sean is the greatest", () => {
            expect(utils.function2()).toEqual("Sean is the greatest")
        })
        /*  
            function2() {
                return 'Sean is the greatest'
            } 
        */ 
        // toBe and toEqual are essentially the same thing 
        it('should not return Sean is not the greatest', () => {
            // .not.toBe != 
            expect(utils.function2()).not.toBe("Sean is not the greatest")
        })
    });

    describe("function3", () => {
        it("should invoke the callback function with a specific string", () => {
            const cb = jest.fn()
            /*  
                func3(str, cb) {
                    cb(str)
                }
            */ 
            utils.func3('Hello', cb)
            expect(cb).toHaveBeenCalledWith("Hello")
        })
    });

    describe('getInternetData', () => {
        it('Should return an array of the number of people', () => {
            sinon.stub(axios, 'get').returns(Promise.resolve({
                data: {
                    results: [1, 2, 3, 4, 5]
                }
            }))
            return utils.getInternetData().then(people => {
                /*  
                    getInternetData() {
                        return axios.get('https://swapi.co/api/people').then(res => {
                            return res.data.results
                        })
                    }
                */ 
                console.log("PEOPLE ARRAY", people);
                expect(people.length).toEqual(5)
            })
        })
    });
    // IS THIS RIGHT???  
    describe('getAllListings', () => {
        it("Should return an array of listings", () => {
            axios.stub(axios, 'get').returns(Promise.resolve ({
                data: {
                    results: [/* ????? */]
                }
            }))
                return utils.getAllListings().then( listings => {
            })
        })
    })

   });
   