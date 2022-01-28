import React, {useState} from 'react';
import EditModal from '../EditModal/EditModal';
import Button from "../Button/Button";
import {deleteBirdFetch} from '../../store/birds/operations';
import { useDispatch } from "react-redux";
import './BirdItem.scss';

const BirdItem = ({bird}) => {

  const dispatch = useDispatch();
  const [isOpenEditBirdModal, setIsOpenEditBirdModal] = useState(false);
  const {id, title, image, text} = bird;

  const openEditBirdModal = () => {
    setIsOpenEditBirdModal(true);
  }

  const cancelEditBird = () => {
    setIsOpenEditBirdModal(false);
  }

  const deleteBird = () => {
    dispatch(deleteBirdFetch(id))
  }

  return (
    <>
    <div className="bird-item">
      <div className="bird-item__img-wr">
        <div className="bird-item__img">
          <img src={image} alt={title}/>
        </div>
        <div className="bird-item__content-wr">
          <h3 className="bird-item__title">
            {title}
          </h3>
          <p className="bird-item__text">{text}</p>
          <div className="bird-item__actions">
            <div className="bird-item__action">
              <Button onClick={openEditBirdModal}>Edit</Button>
            </div>
            <div className="bird-item__action">
              <Button onClick={deleteBird}>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      {isOpenEditBirdModal && <EditModal cancel={cancelEditBird} editBird={bird}/>}
    </div>
    </>
  )
}

export default BirdItem;