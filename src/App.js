import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','ㅁㄴㅇㅁㄴㅇ']);
  let [글제목1, 글제목변경1] = useState(['','할수있겠나']);
  let [글제목2, 글제목변경2] = useState(['','나를 소개하지']);

  let post = '진주시 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목 } </h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목1 } </h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목2 } </h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
