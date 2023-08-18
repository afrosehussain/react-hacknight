import { FaChessKnight } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <h1 className="text-center mt-5 display-1 fw-bolder text-dark-emphasis">
        <FaChessKnight className='text-danger' /> Hac<span className='text-danger'>Knight</span>
      </h1>
    </>
  );
};

export default Header;
