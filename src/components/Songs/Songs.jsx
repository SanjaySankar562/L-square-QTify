import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Section from '../Section/Section';
import styles from './Songs.module.css';

const tabNames = ['All', 'Rock', 'Pop', 'Jazz', 'Blues'];

// Connect each tab to its matching panel for keyboard and screen-reader access.
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
      {value === index && <div className={styles.panelContent}>{children}</div>}
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

  // MUI supplies the next selected tab index when a tab is activated.
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className={styles.songs}>
      <h1 className={styles.title}>Songs</h1>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsBar}>
          {/* Reuse the same song section and change only its selected genre. */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="song genres"
            className={styles.tabs}
          >
            {tabNames.map((name, index) => (
              <Tab
                key={name}
                label={name}
                className={styles.tab}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </div>
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
      </div>
    </div>
      <hr className={styles.divider} />
    </>
  );
}