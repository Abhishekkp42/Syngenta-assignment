import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0)

  const Container = styled.div`
  display: flex;
  
  `

  return (
    <Container>
      <div>
        <p>Empty div</p>
        <div></div>
      </div>

      <div></div>
    </Container>
  )
}

export default App
