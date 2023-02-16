import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography  } from '@mui/material';
import { textTransform } from '@mui/system';
import HorizontalScrollBar from './HorizontalScrollBar';
import { exerciseOptions,fetchData } from '../utils/fetchData';

const SearchExercises = () => {
    const[search,setSearch]=useState('')
    // const[exercises,setExercises]=useState([])
    // const [bodyParts,setBodyParts]=useState([])

    // useEffect(()=>{
    //     const fetchExerciseData=async()=>{
    //         const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

    //         setBodyParts(['all',...bodyPartsData]);
    //     }
    //     fetchExerciseData();
    // },[])
    const handleSearch=async()=>{
        if(search){
            const exerciseData=await fetchData
            (
                'https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions
            );
            // const searchedExercises=exerciseData.filter(
            //     (exercise)=>exercise.name.toLowerCase().includes(search)
            //     ||exercise.target.toLowerCase().includes(search)
            //     ||exercise.equipment.toLowerCase().includes(search)
            //     ||exercise.bodyPart.toLowerCase().includes(search)
            // )
            // setSearch('');
            // setExercises(searchedExercises);
            console.log(exerciseData);


        }
    }
  return (
    <Stack alignItems="center" mt="37px" 
    justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}mb="50px" textAlign={'center'}>
            Awesome Exercises <br/>you should know
        </Typography>
        <Box position="relative" mb="70px">
            <TextField
            sx={{
                input:{fontWeight:'700',
                border:'none' , borderRadius:"4px"    
            },
                width:{lg:'800px',xs:'350px'},
                backgroundColor:'#fff',
                borderRadius:'40px'
            }}
                height="76px"
                value={search}
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"/>
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor:'#FF2635',
                        color:'#fff',
                        textTransform:'none',
                        width:{lg:'175px', xs:'80px'},
                        fontSize:{lg:'25px',xs:'14px'},
                        height:'px',
                        position:'absolute',
                        right:'0'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
        </Box>
        {/* <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScrollBar data={bodyParts}/>
        </Box> */}

    </Stack>
  )
}

export default SearchExercises
