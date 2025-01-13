import React from 'react';
import Grid from '@mui/material/Grid2';
import MediaCard from './MediaCard';

interface CardData {
  image: string;
  title: string;
  route: string;
}

interface GridCardsProps {
  cardsData: CardData[];
}

const GridCards: React.FC<GridCardsProps> = ({ cardsData }) => {
  return (
    <Grid 
      container 
      spacing={2} 
      sx={{
        padding: 2,
        justifyContent: 'center',
      }}
    >
      {cardsData.map((card, index) => (
        <Grid 
          key={index}
        >
          <MediaCard image={card.image} title={card.title} route={card.route} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridCards;
