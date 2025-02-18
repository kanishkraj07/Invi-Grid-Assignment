import TreeNode from './components/TreeNode';
import { TreeProvider } from './components/TreeProvider';

export default function App() {
  const treeData = {
    id: "1",
    childrenNodes: [
      { id: "2", childrenNodes: [{ id: "5" }, { id: "6" }] },
      { id: "3", childrenNodes: [{ id: "7" }] },
      { id: "4", childrenNodes: [{ id: "8" }, { id: "9" }, { id: "10" }] },
    ],
  };

  return (
    <TreeProvider>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TreeNode {...treeData} />
      </div>
    </TreeProvider>
  );
}
