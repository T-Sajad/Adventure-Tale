function add(a,b) {
  if (a  === Infinity || b === Infinity) {
    throw new Error('invalid input')
  }
  return a + b
}

test('one plus one', () => {
  const result = add(1, 1)
  expect(result).toBe(2)
})

test('Infinity + 1 should throw', () => {
  expect(() => add(Infinity, 1)).toThrow()
})

test('1 + Infinity should throw', () => {
  expect(() => add(1,Infinity)).toThrow()
})