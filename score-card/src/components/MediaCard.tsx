import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
                {title}
            </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={image}
                title={title}
            />
        </Card>
    </ButtonBase>
  );
}

export default MediaCard;