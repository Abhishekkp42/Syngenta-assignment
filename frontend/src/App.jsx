import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import styled from "styled-components";

function App() {

  let arr=[
    {
      id: 1,
      color: "#d5e8d4",
      status: false
    },
    {
      id: 2,
      color: "#ffe6cd",
      status: false
    },
    {
      id: 3,
      color: "#6a00ff",
      status: false
    },
    {
      id: 4,
      color: "#d9e8fb",
      status: false
    },
    {
      id: 5,
      color: "#e2d5e7",
      status: false
    }
  ]


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
        <div style={{border: "2px solid black", height: "350px", width: "300px"}}>
        {arr.map((el) => {
          return el.status ? 
          <Circle key={el.id} style={{backgroundColor:`${el.color}` }}></Circle>
          : null
        })}
        </div>
      </div>

      <div>
        {/* <p>Circles</p>
        <Circle style={{backgroundColor:"#d5e8d4" }} ></Circle>
        <Circle style={{backgroundColor:"#ffe6cd" }} ></Circle>
        <Circle style={{backgroundColor:"#6a00ff" }} ></Circle>
        <Circle style={{backgroundColor:"#d9e8fb" }} ></Circle>
        <Circle style={{backgroundColor:"#e2d5e7" }} ></Circle> */}

        {arr.map((el) => {
          return el.status ? null :
          <Circle key={el.id} style={{backgroundColor:`${el.color}` }}></Circle>
        })}
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
