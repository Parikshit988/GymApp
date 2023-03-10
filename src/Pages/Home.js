import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/system'
import Exercises from '../Components/Exercises'
import SearchExercises from '../Components/SearchExercises'
import HeroBanner from '../Components/HeroBanner'

const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
    </Box>
  )
}

export default Home
