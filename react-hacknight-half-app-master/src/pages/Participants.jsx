import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';
import { useState } from 'react';

const Participants = () => {
  const [participant,setParticipant] = useState([])
  const [load, setLoad] = useState(false)
  const getAll = participants =>{
  setParticipant(participants)
  }
  const loader = state => {
    setLoad(state);
  };
  return (
    <>
      <div className="row">
        <div className="col">
          <List participants={participant} getAll={getAll} loader={loader}/>
          <Empty notes={participant} />
          {load && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
