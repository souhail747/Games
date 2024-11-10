import { Box, Button, Card } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function LittleCard({ srcc, isSelected, onClick }) {
  const [imageSrc, setImageSrc] = useState("Imgs\\55.webp");

  useEffect(() => {
    if (isSelected) {
      setImageSrc(srcc);
    } else {
      setImageSrc("Imgs\\55.webp");
    }
  }, [srcc, isSelected]);

  return (
    <Card
      sx={{
        m: "8px",
        height: { xs: "100%", sm: "100%", md: "25vh", xl: "50vh" },
        width: "15%",
      }}
      variant="outlined"
    >
      <Button
        onClick={onClick}
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "150px",
            width: "70%",
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            m: 0,
            cursor: "pointer",
          }}
        >
          <img src={imageSrc} style={{ width: "100%", height: "auto" }} />
        </Box>
      </Button>
    </Card>
  );
}

LittleCard.propTypes = {
  srcc: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LittleCard;
