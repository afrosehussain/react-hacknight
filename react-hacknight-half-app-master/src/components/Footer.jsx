import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className="text-center p-5 bg-light">
      <button
        className="btn btn-outline-dark btn-sm me-2"
        onClick={handleClick}>
        Hac<span className='text-danger'>Knight</span> 1.0.0
      </button>
      All rights reserved &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
