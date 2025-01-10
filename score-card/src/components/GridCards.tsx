import React from 'react';
import Grid from '@mui/material/Grid2';
import MediaCard from './MediaCard';

const cardsData = [
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf' },
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf' },
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf' },
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf' },
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf' },
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf' },
  ];
  
  const GridCards: React.FC = () => {
    return (
      <Grid 
        container 
        spacing={2} 
        sx={{
          padding: 2,
        }}
      >
        {cardsData.map((card, index) => (
          <Grid                  
            key={index}
          >
            <MediaCard image={card.image} title={card.title} />
          </Grid>
        ))}
      </Grid>
    );
  };

  export default GridCards;