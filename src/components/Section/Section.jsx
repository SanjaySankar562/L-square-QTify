import MuiButton from '@mui/material/Button';
import Card from '../Card/Card';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
        setTopAlbums(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '10px' }}>
        <h1 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>Top Albums</h1>
        
        <MuiButton variant="text" sx={{ color: "#34C94B" }} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Show All" : "Collapse"}
        </MuiButton>
      </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 4, padding: '10px' }}>
          {(isCollapsed ? topAlbums.slice(0, 7) : topAlbums).map((album) => (
              <Card key={album.id} image={album.image} follows={album.follows} title={album.title} />
            ))}
        </Box>
    </>
  );
}