import React from 'react';
import './SelectPanel.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { showModal } from '../../redux/ui/ui.actions';

const PanelSelect = props => {
  const dispatch = useDispatch();
  const facades = useSelector(state => state.facade);
  const editedFacade = facades.beingEdited;

  const selectPanelHandler = text => {
    dispatch(showModal());
    props.history.push(`/existing-building-geometry/${text}`); //this param will be used as a selector of which panels need to be changed
  };

  const fields = [];
  for (let i = 1; i <= facades[editedFacade].panels; i++) {
    fields.push(
      <div
        className="panel-select-fields"
        id={i}
        key={i}
        onClick={() => selectPanelHandler(i)}
      >
        + Select panel {i}
      </div>
    );
  }

  return <div className="select-panel">{fields}</div>;
};

export default withRouter(PanelSelect);
