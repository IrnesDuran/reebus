import { facadeActionTypes } from './facade.types';

export const selectPanelsNum = text => ({
  type: facadeActionTypes.SELECT_NUM,
  payload: text,
});

export const beingEdited = text => ({
  type: facadeActionTypes.BEING_EDITED,
  payload: text,
});

export const initiateFacadeWithGetState = (
  floors,
  entrances,
  panels,
  text
) => ({
  type: facadeActionTypes.INITIATE_FACADE,
  floors: floors,
  entrances: entrances,
  panels: panels,
  text: text,
});

//redux-thunk used in order to access getState so we can use state from other slices (building slice)
export const initiateFacade = () => {
  return (dispatch, getState) => {
    const floors = getState().building.floors;
    const entrances = getState().building.entrances;
    // const editedFacade = getState().facade.beingEdited;
    // const panels = getState().facade[editedFacade].panels;
    const panelsFront = getState().facade['front'].panels;
    const panelsRear = getState().facade['rear'].panels;
    const panelsGable = getState().facade['gable'].panels;

    console.log(panelsFront, panelsRear, panelsGable);

    dispatch(
      initiateFacadeWithGetState(floors, entrances, panelsFront, 'front')
    );
    dispatch(initiateFacadeWithGetState(floors, entrances, panelsRear, 'rear'));
    dispatch(
      initiateFacadeWithGetState(floors, 1, panelsGable, 'gable') //because gable does not have any entrances, only single section is assumed
    );
  };
};

export const updatePanels = (id, name) => ({
  type: facadeActionTypes.UPDATE_PANELS,
  id: id,
  name: name,
});
