import { FaHeart, FaHome, FaMeteor, FaUserAstronaut } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const isActiveLink = ({ isActive }) =>
    `btn btn-light mx-1 ${isActive && 'bg-body-secondary'}`;

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <NavLink to={'/'} className={isActiveLink}>
          <FaHome size={'1.2rem'} className="me-2 text-danger" /> Home
        </NavLink>
        <NavLink to={'/register'} className={isActiveLink}>
          <FaMeteor size={'1.2rem'} className="me-2 text-danger" /> Register
        </NavLink>
        <NavLink to={'/participants'} className={isActiveLink}>
          <FaUserAstronaut size={'1.2rem'} className="me-2 text-danger" /> Participants
        </NavLink>
        <NavLink to={'/about'} className={isActiveLink}>
          <FaHeart size={'1.2rem'} className="me-2 text-danger" /> About
        </NavLink>
        <NavLink to={'/faq'} className={isActiveLink}>
          <FaQuestion size={'1.2rem'} className="me-2 text-danger" /> FAQ
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
