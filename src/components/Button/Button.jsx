import MuiButton from '@mui/material/Button';
import styles from './Button.module.css';

export default function FeedbackButton() {
  return (
    <MuiButton
      variant="contained"
      className={styles.feedbackButton}
    >
      Give Feedback
    </MuiButton>
  );
}