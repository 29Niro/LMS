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