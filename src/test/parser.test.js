import parse from '../parser'

test('we can import the parse function', () => {
  expect(parse).toBeDefined()
})

test('parse a story with one page', () => {
  const story = '#my-page'

  const result = parse(story);

  expect(result).toEqual([{
    id: 'my-page'
  }])
})

test('parse a story with two pages', () => {
  // set up the input
  const story = `#page_a

#page_b`

  // run the code
  const result = parse(story);

  // check/test the result (assertion)
  expect(result).toEqual([{
    id:'page_a',
    
  },{
    id:'page_b',
  }
  ])
})
