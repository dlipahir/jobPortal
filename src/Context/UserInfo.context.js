import {createContext, useEffect, useState} from 'react';

export const UserInfoContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserInfoProvider = ({children}) => {
  const [type, setType] = useState(null);



  const value = {currentUser, setCurrentUser};
  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
