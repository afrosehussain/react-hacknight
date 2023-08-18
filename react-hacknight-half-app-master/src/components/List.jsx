import PropTypes from 'prop-types';
import Item from './Item';
import { useEffect, useState } from 'react';
import ParticipantService from '../services/ParticipantService';
import Loader from './Loader';
const List = ({ participants ,getAll, loader}) => {

  useEffect(() => {
    const getAllParticipants = async () => {
      try {
        loader(true);

        const data = await ParticipantService.getAll();
        const allParticies = data.reverse();

        getAll(allParticies);
      } catch (error) {
        window.alert(`Error Occurred: ${error.message}`);
      } finally {
        loader(false);
      }
    };

    getAllParticipants();
  }, []);

  return (
    <>
      {participants &&
        participants.map(participant => (
          <Item
            participant={participant}
            key={participant.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  participants: PropTypes.array,
};
