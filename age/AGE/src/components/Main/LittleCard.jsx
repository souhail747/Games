import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

function LittleCard({ number, text }) {
  return (
    <Card
      sx={{
        borderRadius: '35px',
        bgcolor: '#023047 ',
        height: {xs:'100%',sm:'100%',md:"42vh",xl:"50vh"},
        width: '90%', // Ensure full width within its container
      }}
      variant="outlined"
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center', // Center items vertically
        }}
      >
        <Box
          sx={{
            height:"210px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap:"55px"
          }}
        >
          <Typography variant="h2" color="#bde0fe">
            {number}
          </Typography>
          <Typography variant="h6" color="#bde0fe">
            {number} {text}
          </Typography>
        </Box>
      </CardContent>  
    </Card>
  );
}

LittleCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
};
export default LittleCard;
