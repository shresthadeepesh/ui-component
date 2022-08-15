import React, { FC, useState } from "react";
import RenderIf from "../RenderIf";
import "./style.scss";

interface Item {
  title: string | React.ReactElement;
  content: string | React.ReactElement;
}

interface AccordionProps {
  openFirst?: boolean;
  item: Item[];
}

interface AccordionItemProps {
  item: Item;
  active?: boolean;
}

const AccordionItem: FC<AccordionItemProps> = ({
  item: { title, content },
  active = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(active);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="item">
      <div className="header" onClick={toggle}>
        <div className="title">{title}</div>
        <div className="close">
          <button onClick={toggle}>&times;</button>
        </div>
      </div>
      <RenderIf condition={isOpen}>
        <div className="content">{content}</div>
      </RenderIf>
    </div>
  );
};

const Accordion: FC<AccordionProps> = ({ openFirst, item }) => {
  return (
    <div className="accordion">
      {item.map((item, index) => (
        <AccordionItem
          item={item}
          key={index}
          active={index === 0 && openFirst ? true : false}
        />
      ))}
    </div>
  );
};

export default Accordion;
