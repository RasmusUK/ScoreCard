import GridCards from "../components/MediaCardGrid";

const cardsData = [
    { image: '/images/sport-icons/disc-golf.png', title: 'Disc Golf', route: '/games/disc-golf' },
    { image: '/images/sport-icons/mini-golf.png', title: 'Mini Golf', route: '/games/mini-golf' },
  ];

export default function Games() {
    return (
      <div>
        <h1>Games</h1>
        <GridCards cardsData={cardsData}/>
      </div>
    );
  }