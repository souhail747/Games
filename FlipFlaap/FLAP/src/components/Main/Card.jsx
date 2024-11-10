/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LittleCard from './LittleCard';
import { Dialog, Fab, Stack, Typography, useMediaQuery } from '@mui/material';
import DIALOG from './DIALOG'; // Import the dialog component
import Dis from '../../Dis';


function MyCard() {
  const matches = useMediaQuery('(min-width:1200px) and (max-width:1350px)');

  const [open, setOpen] = useState(true);
  const handleNewGame = () => {
    window.location.reload(); // Refresh the page
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState(new Set());
  const [attempts, setAttempts] = useState(0);
  const [imageSrcs, setImageSrcs] = useState(shuffleArray([
    "Imgs\\1.jpg",
    "Imgs\\2.jpg",
    "Imgs\\3.jpg",
    "Imgs\\4.jpg",
    "Imgs\\5.jpg",
    "Imgs\\6.jpg",
    "Imgs\\7.jpg",
    "Imgs\\8.jpg",
    "Imgs\\9.jpg",
    "Imgs\\1.jpg",
    "Imgs\\2.jpg",
    "Imgs\\3.jpg",
    "Imgs\\4.jpg",
    "Imgs\\5.jpg",
    "Imgs\\6.jpg",
    "Imgs\\7.jpg",
    "Imgs\\8.jpg",
    "Imgs\\9.jpg",
    // Add other image paths as needed
  ]));
  const [dialogOpen, setDialogOpen] = useState(false); // Initial state set to false
  const totalCards = imageSrcs.length;

  useEffect(() => {
    // Check if the game is completed
    if (matchedIndices.size === totalCards && !dialogOpen) {
      const timeoutId = setTimeout(() => {
        setDialogOpen(true);
      }, 100); // Small delay to ensure the dialog is shown after the last card update
      return () => clearTimeout(timeoutId);
    }
  }, [matchedIndices, attempts, totalCards, dialogOpen]);

  const handleCardClick = (index) => {
    if (selectedIndices.length === 2 || selectedIndices.includes(index) || matchedIndices.has(index)) {
      return;
    }

    const newSelectedIndices = [...selectedIndices, index];
    setSelectedIndices(newSelectedIndices);
    setAttempts((prev) => prev + 1);

    if (newSelectedIndices.length === 2) {
      const [firstIndex, secondIndex] = newSelectedIndices;
      if (imageSrcs[firstIndex] === imageSrcs[secondIndex]) {
        // Mark indices as matched
        // @ts-ignore
        setMatchedIndices(new Set([...matchedIndices, firstIndex, secondIndex]));
        setSelectedIndices([]);
      } else {
        setTimeout(() => {
          setSelectedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '90vh',
        
        m: 0,
        zIndex: 8, position: 'relative'
      }}
      >
      {matches && <Dis att={attempts} />}
      <Card
        sx={{
          borderRadius: '35px',
          bgcolor: '#bde0fe',
          height: { xs: '100%', sm: '100%', md: '95%', xl: '100vh' },
          width: { xs: '100%', sm: '100%', md: '90%' },
            zIndex: 8, position: 'relative'
        }}
        variant="outlined"
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Stack flexDirection={'row'} flexWrap={'wrap'}>
            {imageSrcs.map((item, index) => (
              <LittleCard
                srcc={item}
                key={index}
                isSelected={selectedIndices.includes(index) || matchedIndices.has(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>

     
     {dialogOpen && <DIALOG 
// @ts-ignore
     handleClose={() => setDialogOpen(false)} att={attempts}  />}
    </Box>
  );
}

export default MyCard ;

function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
