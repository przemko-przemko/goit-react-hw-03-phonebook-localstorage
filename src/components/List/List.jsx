import React from "react";
import { ListStyle, ListItem,DeleteBtn } from "./List_styles"



const List = ({ contacts, onClick }) => {
  return (
    <ListStyle>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <span>{name}</span>:<span>{number}</span>
          <DeleteBtn id={id} onClick={() => (onClick = onClick(id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </ListStyle>
  );
};

export default List;
