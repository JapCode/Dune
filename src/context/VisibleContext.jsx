import { createContext, useState } from 'react';

export const VisibleContext = createContext();

export function VisibleProvider({ children }) {
  const [isVisibleData, setIsVisibleData] = useState(false);
  return (
    <VisibleContext.Provider value={{ isVisibleData, setIsVisibleData }}>
      {children}
    </VisibleContext.Provider>
  );
}
// export default {
//   VisibleContext,
//   VisibleProvider,
// };

// export default  ;
