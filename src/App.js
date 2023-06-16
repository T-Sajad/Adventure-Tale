import logo from './logo.svg';
import './App.css';

const story = [
              {
                id:'a',
                content:'You are standing before a great dark forest. Choose where to go',
                links:[{
                  label:'North',
                  target:'b'
                },{
                  label:'South',
                  target:'b'
                },{
                  label:'East',
                  target:'b'
                },{
                  label:'West',
                  target:'b'
                }]
              }
]

const mapLinks = story[0].links.map((l)=>{
  return <li>{l.label}</li>
    
})

function App() {
  return (
   <> 
    <p>{story[0].content}</p>
    <ul>
      {mapLinks}
    </ul>
  </>  
  );
}

export default App;
