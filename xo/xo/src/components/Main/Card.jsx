import  { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LttleCard from './lttleCard';
import { Button, Typography} from '@mui/material';
import Winns from "./winns"

function MyCard() {
  const [cards, setCards] = useState(Array(9).fill({ value: '?', color: 'black' })); // Initialize cards with '?' and 'black' color
  const [isXNext, setIsXNext] = useState(true); // Track whose turn it is
  
  const [winner, setWinner] = useState(null); // Track the winner

  
  //Winners
  const checkWinner = (cards) => {
    const winningCombinations = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6]
    ];
  
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cards[a].value !== '?' && cards[a].value === cards[b].value && cards[a].value === cards[c].value) {
        return cards[a].value;
      }
    }
    if (cards.every(card => card.value !== '?')) {
      return 'draw'; // Return 'draw' if all cards are filled and no winner
    }
  
    return null;
  };
  
  
  const handleClick = (index) => {
    if (cards[index].value !== '?') return; // Prevent update if card is already filled

    const currentValue = isXNext ? 'X' : 'O';
    const currentColor = isXNext ? 'red' : 'blue';

    const newCards = cards.map((card, cardIndex) =>
      cardIndex === index ? { value: currentValue, color: currentColor } : card
    );

    setCards(newCards);
    setIsXNext(!isXNext); // Toggle turn
    const gameWinner = checkWinner(newCards);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  
  
  };

  return (
    <Box 
      sx={{
        mt: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems:"center",
        width: '100%',
        height: '80vh',
        zIndex: '8',
      }}
    >
      <Card
     
        className="border"
        sx={{
          borderRadius: '35px',
          bgcolor: '#bde0fe',
          height: { xs: '100%', sm: '100%', md: '100%', xl: '100vh' },
          width: { xs: '100px', sm: '100%', md: '70%' },
        }}
        variant="outlined"
      >
        <CardContent
          sx={{
            width:"95%",
            height:"73vh",
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'center'
          }}
        >
          
            {cards.map((card, index) => (
              <Button
                key={index}
                onClick={() => handleClick(index)}
                sx={{ p: 0 }}
         
                disabled={card.value !== '?' || winner} // Disable button if already clicked or if there's a winner

             >
                
                <LttleCard x={card.value} color={card.color} />
              </Button>
            ))}

            
         
       
        </CardContent>
      </Card>
     
      {winner && (
           <Winns winner={winner}/>
          )}
      
       { !winner && 
       
       <Typography
      variant="h4"
      sx={{
        mt: 2,
        color: isXNext ? 'red' : 'blue',
        position: 'absolute',
        top: { xs: '150px', sm: '300px', md: '120px',xl:"550px" },
        left: 10,
      }}>

          Turn Of  {isXNext ? 'X':'O'}
        </Typography>}
   
   
    </Box>
    
  );
}

export default MyCard;
