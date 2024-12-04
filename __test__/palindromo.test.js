/*const palindromo = require("../utils/palindromo");

test("comprobar reverse 1", () => {
     expect(palindromo("hola")).toBe("aloh")})

test("comprobar reverse 2", () => {
    expect(palindromo("hola mundo")).toBe("odnum aloh")})*/


const palindromo = require("../utils/palindromo");

    describe('palindromo', () => {
        test.each`
          firstValue | expectedResult    
          ${"hola"}    | ${"aloh"}
          ${"perro"}   | ${"orrep"}
        `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
          expect(palindromo(firstValue)).toBe(expectedResult);
        });
      });  