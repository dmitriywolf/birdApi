import React, {useState, useEffect } from 'react';
import BirdsList from '../BirdsList/BirdsList';
import Button from '../Button/Button';
import EditModal from '../EditModal/EditModal';
import {getBirdsFetch} from '../../store/birds/operations.js';
import {useDispatch, useSelector} from "react-redux";
import './App.scss';

const App = () => {

const dispatch = useDispatch();
const birds = useSelector(state => state.state.birds);
const [isOpenAddBirdModal, setIsOpenBirdModal] = useState(false);

const openAddBirdModal = () => {
  setIsOpenBirdModal(true);
}

const cancelAddBird = () => {
  setIsOpenBirdModal(false);
}

useEffect(() => {
  dispatch(getBirdsFetch())
}, [dispatch])

  return (
    <div>
      <div className='app app__container'>
      <h1 className='app__title'>Birds Api</h1>
      <Button addBtn onClick={openAddBirdModal}>Add bird</Button>
      <BirdsList birds={birds}/>
    </div>
    <div>
      {isOpenAddBirdModal && <EditModal isNewBirds cancel={cancelAddBird}/>}
    </div>
    </div>
  )
}
export default App;
