import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0)

  const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto
  `
  const Circle = styled.div`
  border: 1px solid black;
  border-radius: 55px;
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
  `

  return (
    <div>
    <Container>
      <div style={{marginTop: "120px", marginRight: "200px"}}>
        <p>Empty div</p>
        <div style={{border: "2px solid black", height: "350px", width: "300px"}}></div>
      </div>

      <div>
        <p>Circles</p>
        <Circle style={{backgroundColor:"#d5e8d4" }} ></Circle>
        <Circle style={{backgroundColor:"#ffe6cd" }} ></Circle>
        <Circle style={{backgroundColor:"#6a00ff" }} ></Circle>
        <Circle style={{backgroundColor:"#d9e8fb" }} ></Circle>
        <Circle style={{backgroundColor:"#e2d5e7" }} ></Circle>
      </div>
      
      <div>
        <input type="text" placeholder='Enter number between 1 to 5' />
        <button>Shoot</button>
      </div>
    </Container>
    </div>
  )
}

export default App
