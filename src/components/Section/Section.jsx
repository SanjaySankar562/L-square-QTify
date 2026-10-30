import MuiButton from '@mui/material/Button';
import Card from '../Card/Card';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '10px' }}>
        <h1 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>{title}</h1>
        <MuiButton variant="text" sx={{ color: "#34C94B", fontWeight: 'bold', textTransform: 'none', fontSize: '1rem' }} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Show All" : "Collapse"}
        </MuiButton>
      </Box>
    ):(null)}

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 4, padding: '10px' }}>
          {isCollapsed 
            ? filteredAlbums
                .slice(0, 7)
                .map((album) => (
                  <Card key={album.id} image={album.image} follows={album.follows} likes={album.likes} title={album.title} />
                )) 
            : filteredAlbums
                .map((album) => (
                  <Card key={album.id} image={album.image} follows={album.follows} likes={album.likes} title={album.title} />
                ))
          }
        </Box>

        {showTitle ? (
        <hr style={{ width: '100%', height: '2px', border: 0, backgroundColor: '#34C94B' }}/>
        ):(null)}
    </>
  );
}