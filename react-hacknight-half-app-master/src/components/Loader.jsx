import { FaSnowflake } from 'react-icons/fa';

const Loader = () => {
  return (
    <>
      {
        <div className="loader">
          <FaSnowflake className="text-danger" size={'5rem'} />
        </div>
      }
    </>
  );
};

export default Loader;
