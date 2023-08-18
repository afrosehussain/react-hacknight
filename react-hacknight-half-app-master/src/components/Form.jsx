import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import ParticipantService from '../services/ParticipantService';

const Form = ({ add, loader }) => {
  const [note, setNote] = useState('');

  const handleSubmit = async event => {
    try {
      event.preventDefault();

      loader(true);

      if (note === '') {
        window.alert('Please fill the form');
        return;
      }

      const newNote = {
        id: uuid(),
        note,
      };

      await ParticipantService.add(newNote);

      add(newNote);
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      setNote('');
      loader(false);
    }
  };

  const handleNoteChange = event => {
    setNote(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Write some notes..."
            value={note}
            onChange={handleNoteChange}
          />
          <button className="btn btn-success" type="submit">
            <FaPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
