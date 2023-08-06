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

// 1) BUG: parser will fail if there's no title
// 2) BUG: our parser doesn't support two lines of content yet!
// 3) DONE long strings!
test('parse the story with content',()=>{
  const content =`#page_a
  
a`

  const result = parse(content) 


  // expect API: https://jestjs.io/docs/expect
  expect(result).toEqual([{
    id:'page_a',
    content:'a'
  }
])

})

test.skip('throw and error if a story has no title', () => {
  // TODO
})

test.skip('parse a story with two lines of content', () => {
  // TODO
})
