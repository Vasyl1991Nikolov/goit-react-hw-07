import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Пошук контактів"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default SearchBox;
