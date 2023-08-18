import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div>
        <h4 className="mb-4">
          <FaHeart className="text-danger" /> About
        </h4>
        <p className='lead fw-semibold'>Welcome to our Hac<span className='text-danger'>Knight</span>, where innovation meets collaboration!</p>
        <p>We are here to empower creative minds, unite passionate problem solvers, and foster a dynamic environment for turning ideas into reality.</p>
        <p>Whether you are a coder, designer, or visionary, join us on this exciting journey of ideation, development, and camaraderie. Let us hack together and create a future that is both inspiring and impactful.</p>

        <p>React: <Link to='https://react.dev/' target='_blank'>react.dev</Link>.</p>
        <p>Hackathon Version: <span className='badge bg-secondary'>1.0.0</span></p>
      </div>
    </>
  );
};

export default About;
