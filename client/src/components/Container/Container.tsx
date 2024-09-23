import { useUserStore } from '../../store/useUserStore';
import React, { useEffect } from 'react';
import './Container.css';

const Container: React.FC = () => {

  const {user, userData} = useUserStore();

  useEffect(() => {
    userData('TomCostabel11');

  }, [userData]);
  console.log('Todo el usuario =',user);

  return(

    <div className='container-principal'>
      <div className='container-navbar'>
        <h1>N</h1>

      </div>
      <div>
        <h1>Hola container</h1>
      </div>
    </div>
  );

};

export default Container;