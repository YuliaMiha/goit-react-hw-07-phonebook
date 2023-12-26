import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { delateContactsAction } from '../../redux/contact/contactSlice';
import { selectFilteredContacts } from '../../redux/filter/filterSelector';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const delateContact = id => dispatch(delateContactsAction(id));

  const contact = contacts.map(({ name, number, id }) => (
    <li key={id} className={css.item}>
      <p className={css.item__text}>
        {name} : {number}
      </p>
      <button
        className={css.item__button}
        onClick={() => delateContact(id)}
        type="button"
      >
        Delate
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
