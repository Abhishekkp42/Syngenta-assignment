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

  const [data, setData] = useState(arr)

  const [value, setValue] = useState(0)


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

  const handleClick = (id) => {
    // e.preventDefault()
    const change= data.map((el) => {
      return el.id == id ? { ...el, status: !el.status } : el
    })
    setData(change)
    console.log("Srr", arr)
  }

  return (
    <div>
    <Container>
      <div style={{marginTop: "120px", marginRight: "200px", overflow: "scroll"}}>
        <p>Empty div</p>
        <div style={{border: "2px solid black", height: "350px", width: "300px"}}>
        {data.map((el) => {
          return el.status ? 
          <Circle key={el.id} style={{backgroundColor:`${el.color}` }} onClick={() => handleClick(el.id)}></Circle>
          : null
        })}
        </div>
      </div>

      <div style={{justifyContent: "space-evenly"}}>
        {/* <p>Circles</p>
        <Circle style={{backgroundColor:"#d5e8d4" }} ></Circle>
        <Circle style={{backgroundColor:"#ffe6cd" }} ></Circle>
        <Circle style={{backgroundColor:"#6a00ff" }} ></Circle>
        <Circle style={{backgroundColor:"#d9e8fb" }} ></Circle>
        <Circle style={{backgroundColor:"#e2d5e7" }} ></Circle> */}

        {data.map((el) => {
          return el.status ? null :
          <Circle key={el.id} style={{backgroundColor:`${el.color}` }} ></Circle>
        })}
      </div>
      
      <div style={{marginTop: "120px", marginLeft: "100px"}}>
        <input type="number" placeholder='Enter number between 1 to 5' onInput={(e) => setValue(e.target.value)} />
        <button onClick={() => handleClick(value)}>Shoot</button>
      </div>
    </Container>
    </div>
  )
}

export default App
