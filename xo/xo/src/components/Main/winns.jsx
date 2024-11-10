import PropTypes from 'prop-types';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Winns({ winner }) {
  const [open, setOpen] = React.useState(true);
  const handleNewGame = () => {
    window.location.reload(); // Refresh the page
  };
  const handleClose = () => {
    setOpen(true);
  };


  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        sx: {
          width: '70vw',
          height: '70vh',
          margin: 0,
          maxWidth: '100vw',
          maxHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '55px',
          bgcolor: '#cbeef3',
        },
      }}>
      <>
       <Box>
        {  winner!='draw' && <Typography
           variant="h4"
           sx={{
             color: winner === 'X' ? '#99582a' : 'blue',
           }}>
            
           {winner} WINS!
         </Typography>}
         {  winner=='draw' && <Typography
          variant="h4"
          sx={{
            color: winner === 'X' ? '#99582a' : 'blue',
          }}>
           
          DRAAAAAAAAAW!!!!!!!!!!!
        </Typography> }
        
       </Box>
   
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab
          onClick={handleNewGame}
            variant="extended"
            color="primary"
            sx={{
              width: '200px',
              bgcolor: winner == 'X' ? '#99582a' : 'blue',
            }}>
            NEW GAME
          </Fab>
          <Fab onClick={handleClose}
            variant="extended"
            color="secondary"
            sx={{
              width: '200px',
              bgcolor: winner == 'X' ? '#99582a' : 'blue',
            }}>
            E X I T
          </Fab>
        </Box>
      </>
    </Dialog>
  );
}

Winns.propTypes = {
  winner: PropTypes.string.isRequired, // Assuming x is a string. Change if necessary.
};
