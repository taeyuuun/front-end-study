import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const post = '강남 우동 맛집';

  const [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  const [good, setGood] = useState(0);
  const [genderState, setGenderState] = useState("여자코트 추천");

  const girl = () =>{
    if(genderState === "여자코트 추천"){
      title[0] = '여자코트 추천';
      setTitle([...title]);
      setGenderState("남자코트 추천");
    }else{
      title[0] = '남자코트 추천';
      setTitle([...title]);
      setGenderState("여자코트 추천");
    }
  }

    return(
      <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>

        <button onClick={ girl }>{genderState}</button>
        <button onClick={() => {
          title[0] = '여자코트추천';
          setTitle(title);
        }}>글수정</button>

        <div className="list">
          <h4>{ title[0] } <span className='goods' onClick={ ()=>setGood(good + 1) }>👍</span> {good} </h4>
        </div>  
        <div className="list">
          <h4>{ title[1] }</h4>
        </div>  
        <div className="list">
          <h4>{ title[2] }</h4>
          <p>2월 17일 발행</p>
        </div>  
      </div>
    );
  }

export default App;