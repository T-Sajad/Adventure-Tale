import React, { useState } from 'react';


const story = [
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
        target: "b",
      },
      {
        label: "East",
        target: "b",
      },
    ],
  },
];

// handleclick function purpose is when the user clicks the direction he will taken to another

// <App page="a" />
function Story({page}) {
  // TODO: replace page prop with useState
  const index = story.findIndex((element) => element.id === page);
  const { links, content } = story[index];
  
  
  return (
    <>
      <p>{content}</p>
      <ul>
        {links.map((l) => (
          <li>{l.label}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [pageID, setPageID] = useState('a');


  const handleSelectionChange = (evt) => {
      setPageID(evt.target.value)
  }

  return (<>
    <select onChange={handleSelectionChange}>
      <option>a</option>
      <option>b</option>
    </select>
    <Story page={pageID} />
  </>)
}

export default App;