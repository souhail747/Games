import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Dis({ att }) {
  const cl = "#99582a ";
  const [first, setfirst] = useState(null);
  const [second, setsecond] = useState(-40)
  const [color, setcolor] = useState("red")
  const [Bhim, setBhim] = useState("bad Memory ")
  useEffect(() => {
    first
  
   if(att>20 && att<30){
    setBhim("yaa bhim xD")
  }
  else if(att>30){
    
    setBhim(">30 damn xD")
   }
  }, [att/2])
  
  
  useEffect(() => {
    if (att <= 2) {
      setfirst(-120);
      setcolor("#04724D")
    } else if (att > 2 && att <= 6) {
      setfirst(-130);
      setcolor("#fb6f92")
    } else if (att > 6 && att < 10) {
      setfirst(-144);
    } 
    else if(att >= 10 && att < 20){
      setfirst(-144)
      setsecond(-60)
      setcolor("#780000")
    }
    else {
      setfirst(-150);
      setsecond(-60)
      setcolor("red")

    }
   
  }, [att]);

  return (
    <Box>
      <Box textTransform={"uppercase"}>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            left:first,
            fontSize: "50px",
            top: 240,
            fontWeight: "1000",
            rotate: "270deg",
            color: color,
            zIndex: 0,
          }}
        >
          {Bhim}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "50px",
            position: "absolute",
            fontWeight: "1000 ",
            rotate: "270deg",
            top: 330,
            left: 18,
            color: cl,
          }}
        ></Typography>
      </Box>
      <Box textTransform={"uppercase"}>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            right:second,
            fontSize: "50px",
            top: 180,

            fontWeight: "1000",
            rotate: "90deg",
            color: color,
          }}
        >
          Att {att}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "50px",
            position: "absolute",
            fontWeight: "1000 ",
            rotate: "90deg",
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
Dis.propTypes = {
  att: PropTypes.number.isRequired,
};
