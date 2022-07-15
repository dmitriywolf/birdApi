import React from 'react';
import BirdItem from '../BirdItem/BirdItem';
import './BirdsList.scss';

const BirdsList = ({birds}) => {

  const elements = birds.map((item) => (
    <React.Fragment key={item._id}>
      <BirdItem bird={item}/>
    </React.Fragment>
  ))

  return (
    <div className='birdsList'>
      {elements}
    </div>
  )
};

export default BirdsList;