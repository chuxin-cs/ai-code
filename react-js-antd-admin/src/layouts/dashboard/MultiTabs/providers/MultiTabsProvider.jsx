import { createContext, useMemo, useState } from 'react';

const MultiTabsContext = createContext({
  tabs: [],
  activeTabRoutePath: '',
  setTabs: () => {},
  closeTab: () => {},
  closeOthersTab: () => {},
  closeAll: () => {},
  closeLeft: () => {},
  closeRight: () => {},
  refreshTab: () => {},
});

const MultiTabsProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);

  const contextValue = useMemo(() => {
    return {
      tabs,
      setTabs,
    };
  }, [tabs]);

  return (
    <MultiTabsContext.Provider value={contextValue}>
      {children}
    </MultiTabsContext.Provider>
  );
};

export default MultiTabsProvider;
