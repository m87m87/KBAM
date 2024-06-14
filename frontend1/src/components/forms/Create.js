import { React } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import MyTextField from './MyTextField'
import {useForm} from 'react-hook-form'
import AxiosInstance from '../Axios'
import {useNavigate} from 'react-router-dom'
import create from './create.css'


const Create = () => {

    const navigate = useNavigate()
    const defaultValues = {
        comments: '',
    }

    const {handleSubmit, control} = useForm({defaultValues:defaultValues})

    const submission = (data) => {
        AxiosInstance.post(
            `comments/`, {
                comments: data.comments,
            })
            .then((res) => {
                navigate('/about')
            })
    }

    return (
        <div className='comment-box-container'>
            <form onSubmit={handleSubmit(submission)}>

            <Box textAlign="center" fontSize="25px">
                Please enter your comments
            </Box>

            <Box className='comment-box'>
                <Box textAlign="center">
                    <MyTextField
                        name="comments"
                        control={control}
                        placeholder="Add you comment"
                    />
                </Box>
            </Box>    
                    <Button className='submit-button' variant="contained" type="submit">
                        Submit
                    </Button>
            
            </form>
        </div>
    )
}

export default Create