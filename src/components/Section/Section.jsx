import MuiButton from '@mui/material/Button';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel'; // Don't forget to import it!
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Section.module.css';

export default function Section({ title, dataSource, showTitle = true, genre }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataSource);
        setAlbums(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dataSource]);

  const filteredAlbums = genre
    ? albums.filter((album) => album.genre?.label === genre)
    : albums;

  return (
    <>
      {showTitle ? (
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <MuiButton variant="text" className={styles.toggleButton} onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? "Show All" : "Collapse"}
          </MuiButton>
        </div>
      ) : null}

      {/* We only apply the grid CSS when we are NOT collapsed */}
      <div className={`${styles.cards} ${isCollapsed ? '' : styles.expandedGrid}`}>
        {isCollapsed 
          ? <Carousel 
              data={filteredAlbums} 
              renderComponent={(album) => <Card follows={album.follows} image={album.image} key={album.id} title={album.title} />} 
            />
          : filteredAlbums.map((album) => (
              <Card key={album.id} image={album.image} follows={album.follows} title={album.title} />
            ))
        }
      </div>

      {showTitle ? (
        <hr className={styles.divider} />
      ) : null}
    </>
  );
}