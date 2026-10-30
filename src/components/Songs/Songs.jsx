import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Section from '../Section/Section';
import Box from '@mui/material/Box';

const tabNames = ['All', 'Rock', 'Pop', 'Jazz', 'Blues'];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%', color: '#FFFFFF' }}>
      <h1 style={{ color: '#FFFFFF' }}>Songs</h1>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="song genres"
            sx={{ '& .MuiTabs-indicator': { backgroundColor: '#34C94B' } }}
          >
            {tabNames.map((name, index) => (
              <Tab
                key={name}
                label={name}
                sx={{ color: '#FFFFFF', '&.Mui-selected': { color: '#34C94B' } }}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        {tabNames.map((name, index) => (
          <CustomTabPanel key={name} value={value} index={index}>
            <Section
              dataSource="https://qtify-backend.labs.crio.do/songs"
              title={name}
              showTitle={false}
              genre={name === 'All' ? undefined : name}
            />
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
      <hr style={{ width: '100%', height: '2px', border: 0, backgroundColor: '#34C94B' }} />
    </>
  );
}