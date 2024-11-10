import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DatePickerComponent from './Date'; // Ensure this path is correct
import LittleCard from './LittleCard';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

function MyCard() {
  const [birthDate, setBirthDate] = useState(dayjs());
  const [todayDate, setTodayDate] = useState(dayjs());
  const [calculated, setCalculated] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const handleBirthDateChange = (newDate) => {
    setBirthDate(newDate);
  };

  const handleTodayDateChange = (newDate) => {
    setTodayDate(newDate);
  };

  const handleCalculate = () => {
    // Calculate the difference between todayDate (start) and birthDate (end)
    const years = birthDate.diff(todayDate, 'year');
    const months = birthDate.diff(todayDate, 'month') % 12;
    const days = birthDate.diff(todayDate, 'day') % 30; // Approximation
    if (years > 0 || months > 0 || days > 0) {
      setCalculated({ years, months, days });
    } else {
      alert('INVALIDE DATE');
    }
  };

  return (
    <Box
      sx={{
        mt: '10px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        zIndex: '8',
      }}
    >
      <Card
        sx={{
          borderRadius: '35px',
          bgcolor: '#bde0fe',

          height: { xs: '100%', sm: '100%', md: '70%', xl: '100vh' },
          width: { xs: '100%', sm: '100%', md: '70%' },
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
          <Stack flexDirection={'row'} justifyContent={'space-evenly'}>
            <Box sx={{ width: '200px', height: '50%' }}>
              <DatePickerComponent
                nom="Birth day"
                selectedDate={birthDate}
                onDateChange={handleBirthDateChange}
              />
            </Box>
            <Box sx={{ width: '200px', height: '50%' }}>
              <DatePickerComponent
                nom="Today"
                selectedDate={todayDate}
                onDateChange={handleTodayDateChange}
              />
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{
              width: { xs: '100px', sm: '100px', md: '100px', xl: '500px' },
              height: { xs: '50px', sm: '50px', md: '50px', xl: '200px' },
              fontSize: { xs: '12px', sm: '12px', md: '12px', xl: '40px' },
          
              ':hover': { bgcolor: 'red' },
              my: { xs: '7px', sm: '7px', md: '7px', xl: '100px' },

              alignSelf: 'center',
            }}
            onClick={handleCalculate} // Trigger calculation on button click
          >
            Calculate
          </Button>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '22px',
              width: '100%',
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ ml: '15px', width: '100%' }}
            >
              <Box sx={{ flex: 1 }}>
                <LittleCard number={calculated.years} text="Years" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <LittleCard number={calculated.months} text="Months" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <LittleCard number={calculated.days} text="Days" />
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default MyCard