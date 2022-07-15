import React, {useState} from 'react';
import Button from "../Button/Button";
import { addBirdFetch, editBirdFetch } from '../../store/birds/operations.js';
import { useDispatch } from 'react-redux';
import './EditModal.scss';

const EditModal = ({isNewBirds, cancel, editBird}) => {
  const dispatch = useDispatch()

  const editTitle = editBird ? editBird.title : '';
  const editImg = editBird ? editBird.img : '';
  const editText = editBird ? editBird.description : '';
  const [title, setTitle] = useState(editTitle);
  const [img, setImg] = useState(editImg);
  const [text, setText] = useState(editText);

  const changeTitle = (e) => {
    setTitle(e.target.value)
  };

  const changeImg = (e) => {
    setImg(e.target.value)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }


  const saveBird = () => {

    let reqObj;

    if(isNewBirds) {
      reqObj = {
        title: title,
        description: text,
        img: img,
      }

      dispatch(addBirdFetch(reqObj));
      cancel();

    } else {
      reqObj ={
        title: title,
        description: text,
        img: img,
      }

      dispatch(editBirdFetch(reqObj, editBird._id));
      cancel();
    }
  }

  return (
    <div className="editModal-wrap">
      <div className="editModal">
      <form className="editModal__form">
        <label className="editModal__label">
        <p className="editModal__label-text">Bird's name</p>
          <input className="editModal__input" placeholder="Bird's name..." value={title} onChange={changeTitle}/>
        </label>
        <label className="editModal__label">
        <p className="editModal__label-text">Bird's image link</p>
          <input className="editModal__input" placeholder="Bird's image link..." value={img} onChange={changeImg}/>
        </label>
        <label className="editModal__label">
          <p className="editModal__label-text">Bird's description</p>
          <input className="editModal__input" placeholder="Bird's description..." value={text} onChange={changeText}/>
        </label>
        <div className="editModal__actions">
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={saveBird}>Save</Button>
        </div>
      </form>
      </div>
    </div>
  )
};

export default EditModal;