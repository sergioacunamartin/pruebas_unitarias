/*const isUpperCase = require("../utils/esmayuscula");

test("comprobar mayuscula True", () => {
     expect(isUpperCase("HOLA")).toBe(true)})

test("comprobar mayuscula False", () => {
    expect(isUpperCase("hola")).toBe(false)})*/

const isUpperCase = require("../utils/esmayuscula");

    describe('mayuscula', () => {
        test.each`
          firstValue | expectedResult    
          ${"HOLA"}    | ${true}
          ${"perro"}   | ${false}
        `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
          expect(isUpperCase(firstValue)).toBe(expectedResult);
        });
      });  