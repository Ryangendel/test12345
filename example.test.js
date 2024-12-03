const fizzBuzz = require("./fizz.js")

describe("DogNames", () => {
    describe("Init", () => {

        it("this is the first test that I am running and it has to do with t/f", () => {

          
            expect(fizzBuzz("hunter")).toEqual("hunter is the best dog ever")
        })

        it("hello world", () => {

          
            expect(fizzBuzz("hunter")).toEqual("hunter is the best dog ever")
        })


        it("i dont know this is sometext", () => {
            expect(true).toEqual(false)
        })

        it("this is more text", () => {
            expect(true).toEqual(false)
        })

    })
})