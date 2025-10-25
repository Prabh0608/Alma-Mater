import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';

export default function MultiActionAreaCard({ alumni }) {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`${alumni.enrolmentNumber}`);
    }
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (

        < Card sx={{ maxWidth: 300 }}
            boxShadow
            sx={{
                '&:hover': {
                    transform: 'scale3d(1.02, 1.02, 1)',
                    transition: 'all .4s ease-in-out'
                }
            }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="270"
                    image={alumni.imageUrl}
                    alt="Alumni Photo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {alumni.name}
                    </Typography>

                    <Chip label={alumni.currentCompany} />

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={clickHandler}>
                    View More
                </Button>
            </CardActions>
        </Card >
    )

}