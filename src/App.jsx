import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoading, selectError } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
