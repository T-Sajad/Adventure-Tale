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

test('throw an error if a story has no title', () => {
  const content =`a`
  
  // expect toThrow API: https://jestjs.io/docs/expect#tothrowerror
  expect(() => {
    parse(content)
  }).toThrow(new Error('content does not belong to a page Title'));
});

test('parse a story with two lines of content', () => {
  const content =`#page_a
a
b`
  
    const result = parse(content) 
  
  
    // expect API: https://jestjs.io/docs/expect
    expect(result).toEqual([{
      id:'page_a',
      content:`a
b`
    },
  ])
})
