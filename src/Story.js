import React, { useState } from 'react';

import './App.css'

function Story({page,onPageChange,story}) {
  const index = story.findIndex((element) => element.id === page);
  const { links, content,image } = story[index];
  
  const handleOnClick = (l) => {
    onPageChange(l.target)

  }
  
  return (
    <div className='container'>
      <div className='image'>
        <img src={image}></img>
      </div>
      <p className='content'>{content}</p>
     
      <ul className='links'>
        {links && links.map((l) => (
            <li onClick={(evt) => handleOnClick(l)}>
          <div className='label'>
              {l.label}
          </div>
          </li>
          ))}
      </ul>
   </div>
  );
}

function App({story}) {
  const [pageID, setPageID] = useState('page_a');

  const handleSelectionChange = (evt) => {
      setPageID(evt.target.value)
  }

  return (
 <div className='app'>
    {/* <select onChange={handleSelectionChange}>
      <option>page_a</option>
      <option>page_b</option>
    </select> */}
    <Story story={story} page={pageID} onPageChange={setPageID} />
 </div>)
}

export default App;