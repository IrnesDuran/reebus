import React from 'react';
import './Modal.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../redux/ui/ui.actions';
import CustomButton from '../CustomButton/CustomButton';

const Modal = props => {
  const modalVisibility = useSelector(state => state.ui.modalVisible);

  const dispatch = useDispatch();

  const discardHandler = () => {
    dispatch(hideModal());
    props.history.goBack(2);
  };

  // onClick from this child´s button bellow  is triggering function from parrent component,
  //  it is supposed to be used for trigerring various redux actions
  const acceptHandler = () => {
    props.dispatchHandler();
  };

  return (
    <div className={modalVisibility ? 'modal' : 'modal inactive'}>
      <div
        className={modalVisibility ? 'modal-content' : 'modal-content inactive'}
      >
        <div className="modal-children">{props.children}</div>
        <div className="modal-buttons">
          <CustomButton inverted onClick={discardHandler}>
            Discard
          </CustomButton>
          <CustomButton onClick={acceptHandler}>Accept</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
