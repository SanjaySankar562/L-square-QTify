import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './FAQ.module.css';

export default function AccordionExpandIcon() {
  // Generate a unique prefix so FAQ panel labels stay associated and accessible.
  const id = React.useId();
  return (
    <div>
        <h1 className={styles.title}>FAQs</h1>
        <div className={styles.grid}>
            {/* Each item pairs its summary with the answer revealed on expansion. */}
            <Accordion className={styles.accordion}>
                <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className={styles.expandIcon} />}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span">Is QTify free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.details}>
                <Typography>
                    Yes! It is 100% free, and has 0% ads!
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion}>
                <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon className={styles.expandIcon} />}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span">Can I download and listen to songs offline?</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.details}>
                <Typography>
                    Sorry, unfortunately we don't provide the service to download any songs.
                </Typography>
                </AccordionDetails>
            </Accordion>
      </div>
    </div>
  );
}