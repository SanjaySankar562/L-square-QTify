import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({image, follows, likes, title}) {
  const count = follows ?? likes;
  const countLabel = follows !== undefined ? 'Follows' : 'Likes';

  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ width: '100%', borderRadius: '10px', boxShadow: 'none' }}>
        <CardActionArea sx={{ overflow: 'hidden', borderRadius: '10px' }}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 182, objectFit: 'cover' }}
            image={image}
            alt={title}
          />  
          <Stack direction="row" spacing={5} sx={{ padding: '5px', backgroundColor: '#ffffff' }}>
            <Chip label={`${count} ${countLabel}`} sx={{ backgroundColor: '#121212', color: '#ffffff', height: 23, alignItems: 'center', justifyContent: 'left'}}/>
          </Stack>
        </CardActionArea>
      </Card>
      <Typography sx={{ fontSize: 16, color: 'white', marginTop: '5px' }}>
        {title}
      </Typography>
    </Box>
  );
}