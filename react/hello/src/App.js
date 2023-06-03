import { useState } from 'react'
import './App.css';

function App() {
  
  const cat = 1;

  function hi(){
    console.log("hihi");
  }
if(cat == 1){
    return(
      <>
        {
          cat === 0 ? <div>hihi</div> : <button>hihi</button>
        }
        <button onClick={hi} className='hihi' >asfasgasg</button>
        <div>안녀ㅛㅇ</div>
      </>
    );
  }
}

export default App;