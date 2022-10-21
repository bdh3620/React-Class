/*eslint-disable  */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','진주시 고기 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let post = '진주시 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span>
         {따봉} </h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
