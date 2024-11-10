import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Dis() {
    const cl = '#99582a ';
    return (
      <Box>
        <Box textTransform={'uppercase'}>
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              left: 87,
              fontSize: '50px',
              top: 300,
              fontWeight: '1000',
              rotate: '270deg',
              color: cl,
            }}
          >
            age
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: '50px',
              position: 'absolute',
              fontWeight: '1000 ',
              rotate: '270deg',
              top: 330,
              left: 18,
              color: cl,
            }}
          >
            calculate
          </Typography>
        </Box>
        <Box textTransform={'uppercase'}>
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              right: 133,
              fontSize: '50px',
              top: 180,
  
              fontWeight: '1000',
              rotate: '90deg',
              color: cl,
            }}
          >
            BY
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: '50px',
              position: 'absolute',
              fontWeight: '1000 ',
              rotate: '90deg',
              top: 350,
              right: 48,
              color: cl,
            }}
          >
            SOUHAIL
          </Typography>
        </Box>
      </Box>
    );
  }