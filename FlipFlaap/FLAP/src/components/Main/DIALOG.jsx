import { Box, Dialog, Fab, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function DIALOG({ att }) {
  const [vari, setvari] = useState("");

  useEffect(() => {
    if (att < 25) {
      setvari("GOOD");
    } else if (att >= 25 && att < 40) {
      setvari("Not Baad");
    } else {
      setvari("BHIIIIIIIIM!");
    }
  }, [att]);

  const [open, setOpen] = React.useState(true);
  const handleNewGame = () => {
    window.location.reload(); // Refresh the page
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        sx: {
          width: "70vw",
          height: "70vh",
          margin: 0,
          maxWidth: "100vw",
          maxHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "55px",
          bgcolor: "#cbeef3",
        },
      }}
    >
      <>
        <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
         
        >
          <Typography textTransform={"uppercase"} variant="h4" sx={{}}>
            You Winnnnnnn !
          </Typography>
          <Stack flexDirection={"row"} gap={2}>
            <Typography textTransform={"uppercase"} variant="h4">
              with
            </Typography>

            <Typography variant="h4" color="red">
              {att}{" "}
            </Typography>

            <Typography
              textTransform={"uppercase"}
              variant="h4"
              color="initial"
            >
              attempts
            </Typography>
          </Stack>
          <Typography variant="h4" color="blue">
            {vari}
          </Typography>
        </Stack>

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            onClick={handleNewGame}
            variant="extended"
            color="primary"
            sx={{
              width: "200px",
            }}
          >
            NEW GAME
          </Fab>
          <Fab
            onClick={handleClose}
            variant="extended"
            color="secondary"
            sx={{
              width: "200px",
            }}
          >
            E X I T
          </Fab>
        </Box>
      </>
    </Dialog>
  );
}
DIALOG.propTypes = {
  att: PropTypes.string.isRequired,
};
