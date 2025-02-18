import { useTreeContext } from "./TreeProvider";

interface TreeNodeProps {
  id: string;
  childrenNodes?: TreeNodeProps[];
};

export default function TreeNode({ id, childrenNodes = [] }: TreeNodeProps) {
  const { colorMap, changeColor } = useTreeContext();
  const bgColor = colorMap[id] || "#f0f0f0";

  const getAllDescendants = (node: TreeNodeProps): string[] => {
    return node.childrenNodes
      ? node.childrenNodes.flatMap((child) => [child.id, ...getAllDescendants(child)])
      : [];
  };

  const handleClick = () => {
    const allChildren = getAllDescendants({ id, childrenNodes });
    const newColor = bgColor === "#f0f0f0" ? "#90ee90" : "#f0f0f0";
    changeColor(id, newColor, allChildren);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          backgroundColor: bgColor,
          width: "100px",
          height: "100px",
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          margin: "auto",
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        {id}
      </div>

      {childrenNodes.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          {childrenNodes.map((child) => (
            <div key={child.id} style={{ margin: "0 10px" }}>
              <TreeNode {...child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
