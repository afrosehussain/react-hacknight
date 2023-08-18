import axios from 'axios';

const client = axios.create({
  baseURL: `http://localhost:3000/participants/`,
});

const getAll = async () => {
  const response = await client.get();
  return response.data;
};

const register = async participant => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await client.post('', participant, options);
  return response.data;
};

const ParticipantService = {
  getAll,
  register,
};

export default ParticipantService;
