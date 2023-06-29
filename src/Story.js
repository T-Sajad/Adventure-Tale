import React, { useState } from 'react';

function Story({page,onPageChange,story}) {
  const index = story.findIndex((element) => element.id === page);
  const { links, content } = story[index];
  
  const handleOnClick = (l) => {
    onPageChange(l.target)

  }
  
  return (
    <>
      <p>{content}</p>
      <ul>
        {links.map((l) => (
          <li onClick={(evt) => handleOnClick(l)}>{l.label}</li>
        ))}
      </ul>
    </>
  );
}

function App({story}) {
  const [pageID, setPageID] = useState('a');

  const handleSelectionChange = (evt) => {
      setPageID(evt.target.value)
  }

  return (<>
    <select onChange={handleSelectionChange}>
      <option>a</option>
      <option>b</option>
    </select>
    <Story story={story} page={pageID} onPageChange={setPageID} />
  </>)
}

export default App;