import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';  

export default function AccordionExpandIcon() {
  const id = React.useId();
  return (
    <div>
        <h1 style={{ color: "#ffffff", fontSize: "4rem", marginBottom: "1rem", textAlign: "center" }}>FAQs</h1>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(770px, 1fr))',gap: 4, padding: '10px' }}>
            <Accordion sx={{ backgroundColor: '#121212',color: '#ffffff', border: '1px solid #ffffff', borderRadius: '10px' }}  >
                <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon sx={{ color: '#34C94B' }} />}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span">Is QTify free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#ffffff',color: '#121212', border: '1px solid #ffffff'}}>
                <Typography>
                    Yes! It is 100% free, and has 0% ads!
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: '#121212',color: '#ffffff', border: '1px solid #ffffff', borderRadius: '10px' }}>
                <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon sx={{ color: '#34C94B' }} />}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span">Can I download and listen to songs offline?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#ffffff',color: '#121212', border: '1px solid #ffffff'}}>
                <Typography>
                    Sorry, unfortunately we don't provide the service to download any songs.
                </Typography>
                </AccordionDetails>
            </Accordion>
      </Box>
    </div>
  );
}