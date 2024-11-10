import { ThemeProvider } from '@mui/material/styles';
import MyCard from './components/Main/Card';
import Header from './components/Header/Header';
import theme from '..//theme';
import { Box, useMediaQuery } from '@mui/system';
import { Typography } from '@mui/material';

function App() {
  const matches = useMediaQuery('(min-width:1200px) and (max-width:1350px)');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ zIndex: '0', width: '100%', mr: 0 }}>
      {/*   {matches && <Dis />} */}
        <Box sx={{ zIndex: 8, position: 'relative' }}>
{/*           <Header />
 */}          <MyCard />
          {!matches && (
            <Box
              sx={{
                fontSize: '50px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt:0
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: '1000 ',
                  color: '#99582a ',
                }}
              >
                BY SOUHAIL
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
