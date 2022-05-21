import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


function HomeLecturer() {
    const theme = useTheme();
    return (
        <Box>
            <h1> Welcome lecturer</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={6}>
                    <p>When you develop a mockup page or backend API is not ready for data fetching and you have to make 
                        Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.</p>
                </Grid>
                <Grid item xs={6}>
                    <Box > 
                    <img style={{width:"60%"}} src="/asset/images/Lecturer.svg"/>
                    </Box>
                </Grid>
            </Grid>
            <h2> My courses: </h2>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="http://res.cloudinary.com/debuggers/image/upload/v1653029972/lms/78f4efec-c854-499e-b61f-d6747119201b.jpg"
                    alt=""
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Course Name
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Number of Students:
                            <Chip icon={<FaceIcon />} label="With Icon" />
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
}

export default HomeLecturer;