const index = require("./index.js")

it('capitalize error',()=>{
    expect(index.capitalize('aab')).toBe('Aab')
})

it('reverseString error',()=>{
    expect(index.reverseString('aab')).toBe('baa')
})

it('capitalize error',()=>{
    expect(index.capitalize('aab')).toBe('Aab')
})

it('calculator add error',()=>{
    expect(index.calculator.add(1,2)).toBe(3)
})

it('calculator subtract error',()=>{
    expect(index.calculator.subtract(1,2)).toBe(-1)
})

it('calculator divide error',()=>{
    expect(index.calculator.divide(2,2)).toBe(1)
})

it('calculator multiply error',()=>{
    expect(index.calculator.multiply(1,2)).toBe(2)
})

it('caesarCipher error',()=>{
    expect(index.capitalize('aab')).toBe('Aab')
})

it('analyzeArray error',()=>{
    expect(index.analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})