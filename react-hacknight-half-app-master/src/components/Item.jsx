import PropTypes from 'prop-types';
import { FaEnvelope, FaGithub, FaGlobe, FaUserAstronaut } from 'react-icons/fa';

const Item = ({ participant }) => {
  return (
    <>
      <div className="card bg-body-secondary border-0 mb-3">
        <div className="card-body pb-0">
          <h5 className="card-title">
            <FaUserAstronaut className="text-danger" /> {participant.fullName}
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-body-secondary">
            <FaEnvelope className="text-secondary" /> {participant.email}
          </li>
          <li className="list-group-item bg-body-secondary">
            <FaGlobe className="text-secondary" /> {participant.country}
          </li>
          <li className="list-group-item bg-body-secondary">
            <FaGithub className="text-secondary" /> {participant.gitHubLink}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Item;

Item.propTypes = {
  participant: PropTypes.object,
};
