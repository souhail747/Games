import { Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';


export default function LttleCard({ x,color }) {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         width: { xs: '150px', sm: '250px', md: '210px',xl:"550px" },
        height: { xs: '80px', sm: '80px', md: '120px' ,xl:"140px"},
        m: "5px"
      }}
    >
      <Typography variant="h2" sx={{ color: {color} }}>
        {x}
      </Typography>
    </Card>
  );
}
LttleCard.propTypes = {
    x: PropTypes.string.isRequired, // Assuming x is a string. Change if necessary.
    color: PropTypes.string.isRequired, // Assuming x is a string. Change if necessary.
  
};