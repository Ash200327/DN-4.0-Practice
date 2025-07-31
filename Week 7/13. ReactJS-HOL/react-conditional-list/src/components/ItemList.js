import React from "react";
import ListItem from "./ListItem";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        // Using index as key is acceptable here if list order won't change
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
