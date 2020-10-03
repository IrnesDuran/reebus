import React, { useState } from 'react';
import './ModalContent.styles.scss';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import Cassette from '../../facadeComponents/Cassette/Cassette';
import Modal from '../Modal/Modal';

import { hideModal } from '../../redux/ui/ui.actions';
import { updatePanels } from '../../redux/facade/facade.actions';
const ModalContent = props => {
  const [itemChecked, setItemChecked] = useState('');

  const panelId = props.match.params.id;
  const dispatch = useDispatch();

  const containerMarkup = name => (
    <div className="cassette-container" onClick={() => setItemChecked(name)}>
      <Cassette
        cassette={name}
        className="cassette"
        fill={itemChecked === name ? '#82A2C8' : ''}
        stroke={'#084893'}
      />
      <div className={itemChecked === name ? 'checkmark-active ' : 'checkmark'}>
        &#10003;
      </div>
    </div>
  );

  const dispatchHandler = () => {
    if (itemChecked === '') {
      return;
    }
    dispatch(updatePanels(panelId, itemChecked));
    setItemChecked('');
    dispatch(hideModal());
    props.history.goBack();
  };

  return (
    //should be looped from database
    <Modal dispatchHandler={dispatchHandler} history={props.history}>
      <div className="modal-container">
        {containerMarkup('2400A')}
        {containerMarkup('2700A')}
        {containerMarkup('2700B')}
        {containerMarkup('3000A')}
        {containerMarkup('3000B')}
        {containerMarkup('3300A')}
        {containerMarkup('3300B')}
        {containerMarkup('3300C')}
        {containerMarkup('3300D')}
        {containerMarkup('3600A')}
        {containerMarkup('3900A')}
        {containerMarkup('3900B')}
        {containerMarkup('4200A')}
        {containerMarkup('4200B')}
        {containerMarkup('4200C')}
        {containerMarkup('4500A')}
        {containerMarkup('4500B')}
        {containerMarkup('4500C')}
        {containerMarkup('4800A')}
        {containerMarkup('4800B')}
        {containerMarkup('4800C')}
        {containerMarkup('5100A')}
        {containerMarkup('5100B')}
        {containerMarkup('5100C')}
        {containerMarkup('5400A')}
        {containerMarkup('5400B')}
      </div>
    </Modal>
  );
};
export default withRouter(ModalContent);
