import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// import { Container } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ITabsLayout {
  tabs: {
    tabLabel: string;
    component: React.FC;
  }[];
}

const TabsLayout: React.FC<ITabsLayout> = ({ tabs }: ITabsLayout, props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs">
          {tabs.map((item, index) => (
            <Tab
              label={item.tabLabel}
              {...a11yProps(index)}
              key={item.tabLabel}
              style={{ fontFamily: "Fredoka" }}
            />
          ))}
        </Tabs>
      </div>
      {tabs.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          {item.component({ ...props })}
        </TabPanel>
      ))}
    </div>
  );
};

export default TabsLayout;
