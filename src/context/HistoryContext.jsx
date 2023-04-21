import { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext();

export function HistoryContextProvider({ children }) {
  const [data, setData] = useState();

  const all = useEffect(() => {}, []);

  const goal = all;
  const weekely = all;

  return (
    <HistoryContext.Provider values={{ goal, weekely, data }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistoryContext() {
  return useContext(HistoryContext);
}
