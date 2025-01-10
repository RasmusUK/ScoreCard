import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

interface MediaCardProps {
    title: string;
    image: string;
}


const MediaCard: FC<MediaCardProps> = ({ title, image }) => {
  return (
    <ButtonBase
    onClick={() => {
      alert('Card clicked!');
    }}
    >
        <Card sx={{ display: "flex", alignItems: 'center', borderRadius: 8, height: 115}}>
            <CardContent>
            <Typography component="div" variant="h5">
                Disc Golf
            </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image="/images/sport-icons/disc-golf.png"
                title="green iguana"
            />
        </Card>
    </ButtonBase>
  );
}

export default MediaCard;