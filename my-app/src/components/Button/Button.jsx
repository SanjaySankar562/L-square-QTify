import MuiButton from '@mui/material/Button';

export default function FeedbackButton() {
  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: '#121212',
        color: '#34C94B',
        fontWeight: '600',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        borderRadius: '8px',
        height: '47px',
        width: '170px',
      }}
    >
      Give Feedback
    </MuiButton>
  );
}