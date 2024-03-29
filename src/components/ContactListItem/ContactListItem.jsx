import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import './ContactListItemStyle.css';
import PropTypes from 'prop-types';

export class ContactListItem extends Component {
  handleDelete = () => {
    const { filteredContact, deleteContact } = this.props;
    deleteContact(filteredContact.id);
    Notify.success(
      `${filteredContact.name} was successfully deleted from your contacts!`,
      { position: 'center-top' }
    );
  };

  render() {
    const { filteredContact } = this.props;

    return (
      <li className='contact-list-item'>
        <p className='contact'>{filteredContact.name}:</p>
        <p className='contact'>{filteredContact.number}</p>
        <button  className='deleteBtn'onClick={this.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
};

ContactListItem.propTypes = {
    filteredContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

