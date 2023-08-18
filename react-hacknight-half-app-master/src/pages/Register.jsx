import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import Loader from '../components/Loader';
import ParticipantService from '../services/ParticipantService';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [github, setGithub] = useState('');
  const [load,setLoad] = useState(false)
  const handleFullName = e => setFullName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleCountry = e => setCountry(e.target.value);
  const handleGithub = e => setGithub(e.target.value);
  const loader = state => {
    setLoad(state);
  };
  const navigate = useNavigate();
  const handleSubmit = async event => {
    try{
      if (fullName=='' || email=='' || country=='' || github==''){
        window.alert("Please fill all the fields...")
        return
      }
  
      event.preventDefault();
      loader(true)
      

    const newParticipant ={
      id:uuid(),
      fullName: fullName,
      email: email,
      country: country,
      gitHubLink: github
    }

    await ParticipantService.register(newParticipant)
    navigate('/participants')
}
    catch(error){
      window.alert(error)
      
    } finally{
      setCountry('')
      setEmail('')
      setFullName('')
      setGithub('')
      loader(false)
    }
  };

  return (
    <>
      {false && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={github}
            onChange={handleGithub}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="submit">
          <FaRotate /> Reset
        </button>
      </form>
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
