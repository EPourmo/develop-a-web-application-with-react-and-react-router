import "../styles/components/Collapse.scss";
import ArrowSvg from "./icons/ArrowSvg";
import { useState } from "react";

export default function Collapse({ title, content, listOfElement }) {
  const [collapsed, setCollapsed] = useState(false);

  let newContent;

  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  listOfElement
    ? (newContent = content.map((equip, index) => (
        <p key={index} className="collapse__content--equipment">
          {equip}
        </p>
      )))
    : (newContent = <p className="collapse__content--info">{content}</p>);

  return (
    <div className="collapse">
      <div className="collapse__head">
        <p className="collapse__head--title">{title}</p>
        {!collapsed && (
          <ArrowSvg
            onClick={handleCollapse}
            className="collapse__head--arrow down"
          />
        )}
        {collapsed && (
          <ArrowSvg
            onClick={handleCollapse}
            className="collapse__head--arrow up"
          />
        )}
      </div>
      {collapsed && <div className="collapse__content">{newContent}</div>}
    </div>
  );
}
