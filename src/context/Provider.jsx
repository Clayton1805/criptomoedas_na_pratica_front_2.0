import { useEffect, useState } from 'react';

import { saveStorage, loadStorage } from '../utils/localStorage';
import AppContext from './AppContext';


function Provider({ children }) {
  const [user, setUser] = useState(loadStorage('user', {}));
  useEffect(() => {
    saveStorage('user', user);
  }, [user]);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
