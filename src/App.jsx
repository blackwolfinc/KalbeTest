import { Grid, TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import "../src/Assets/Scss/App.scss"
import React from 'react'
import { Header } from './Components/Section1/Header';
import { Section2 } from './Components/Section2/Section2';
const App = () => {
  return (
<Container maxWidth="sm" className='ContainerHome'>
    <Header/>
    <Section2/>
    <TextField type='date'></TextField>
</Container>
  )
}

export default App
