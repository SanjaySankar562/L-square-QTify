import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardActionArea from '@mui/material/CardActionArea';
import styles from './Card.module.css';

export default function ActionAreaCard({image, follows, likes, title}) {
  // Album data uses follows; song data uses likes.
  const count = follows ?? likes;
  const countLabel = follows !== undefined ? 'Follows' : 'Likes';

  return (
    <div className={styles.cardWrapper}>
      <Card className={styles.card}>
        <CardActionArea className={styles.actionArea}>
          {/* Card artwork and its engagement count share one clickable surface. */}
          <CardMedia
            component="img"
            className={styles.media}
            image={image}
            alt={title}
          />  
          <div className={styles.metadata}>
            <Chip className={styles.countChip} label={`${count} ${countLabel}`} />
          </div>
        </CardActionArea>
      </Card>
      <Typography className={styles.title}>
        {title}
      </Typography>
    </div>
  );
}