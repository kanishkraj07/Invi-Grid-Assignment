import React, { createContext, useContext, useState } from "react";

const TreeContext = createContext({
  colorMap: {} as Record<string, string>,
  changeColor: (nodeId: string, color: string, allChildren: string[]) => {}
});

export function TreeProvider({ children }: { children: React.ReactNode }) {
  const [colorMap, setColorMap] = useState<Record<string, string>>({});

  const changeColor = (nodeId: string, color: string, allChildren: string[]) => {
    setColorMap((prev) => {
      const newColors = { ...prev };
      newColors[nodeId] = color;

      allChildren.forEach((childId) => {
        newColors[childId] = color;
      });

      return newColors;
    });
  };

  return (
    <TreeContext.Provider value={{ colorMap, changeColor }}>
      {children}
    </TreeContext.Provider>
  );
}

export const useTreeContext = () => useContext(TreeContext);
