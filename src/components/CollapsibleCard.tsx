import classNames from "classnames";
import React, { useState } from "react";

interface CardProps {
  item: {
    week: number;
    topic: string;
    content: string;
  };
}

const CollapsibleCard: React.FC<CardProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggle} className="text-slate-800 bg-gray-200 p-2 border-black cursor-pointer">
        Week {item.week} : {item.topic}
        <button className="float-right font-semibold text-2xl">{isOpen ? "-" : "+"}</button>
      </div>

      <div className={classNames("text-slate-700 text-sm bg-gray-100 p-2 border-black", { 'block': isOpen, 'hidden': !isOpen, 'h-auto': isOpen, 'h-0': !isOpen })}>
        {item.content}
      </div>
    </div>
  );
}

export default CollapsibleCard;
