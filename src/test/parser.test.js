import parse from '../parser'

test('we can import the parse function', () => {
  expect(parse).toBeDefined()
})

test('parse a story with one page', () => {
  const story = '#my-page'

  const result = parse(story);
  expect(result.length).toEqual(1)

  const page = result[0]
  expect(page.id).toEqual('my-page')  
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
    links:[],
    
  },{
    id:'page_b',
    links:[]
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
    content:'a',
    links:[]
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
b`,
      links:[]
    },
  ])
})

test('handle leading and trailing white space',()=>{
  const content =` #page_a 
 a `

  const result = parse(content) 

  expect(result).toEqual([{
    id:'page_a',
    content:`a`,
    links:[]
  }])
});

test('parse a link', ()=>{
  const content =`#page_a
  a
  * S | s`

  const result =parse(content)


  expect(result).toEqual([{
    id:'page_a',
    content:'a',
    links:[
      {
      label:'S',
      target:'s'
      }
    ]

  }])
})

test('parsing a image',()=>{

  const content =`#page_a
  @image:www.john_cena

  `

  const result = parse(content)

  expect(result).toEqual([{
    id:'page_a',
    image:'www.john_cena',
    links:[],
  }])
})