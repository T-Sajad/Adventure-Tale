const storyspec = `
#page_a
  You are standing before a great dark forest

  * North | north
  * South | south
  * East | east
  * West | west

#page_b
  You are standing before a sea

  * North | north
  * East | east
  `;

const story = `
#page_a
You are standing before a great dark forest

#page_b
You are standing before a sea
`
/*
[
{
  id: 'page_a'
},
{
  id: 'page_b'
}
]
*/

const storyjson = [
    // This is page a
    {
      id: "a",
      content: "You are standing before a great dark forest. Choose where to go",
      links: [
        {
          label: "North",
          target: "b",
        },
        {
          label: "South",
          target: "b",
        },
        {
          label: "East",
          target: "b",
        },
        {
          label: "West",
          target: "b",
        },
      ],
    },
  
    // this is page b
    {
      id: "b",
      content: "You are standing before a sea",
      links: [
        {
          label: "North",
          target: "a",
        },
        {
          label: "East",
          target: "a",
        },
      ],
    },
  ];


export default story 