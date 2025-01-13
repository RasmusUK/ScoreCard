import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom';

interface MediaCardProps {
    title: string;
    image: string;
    route: string;
}

const MediaCard: FC<MediaCardProps> = ({ title, image, route }) => {
  const navigate = useNavigate();

  return (
    <ButtonBase
    onClick={() => {
      navigate(route);
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
                sx={{ height: '80%', width: 'auto', objectFit: 'contain' }}
                image={image}
                title={title}
            />
        </Card>
    </ButtonBase>
  );
}

export default MediaCard;