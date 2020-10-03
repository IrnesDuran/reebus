import { facadeActionTypes } from './facade.types';

const initialState = {
  beingEdited: 'front',
  front: {
    panels: 3,
    units: [
      {
        id: '11',
        panels: [
          {
            id: 1,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
          {
            id: 2,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
          {
            id: 3,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
        ],
      },
    ],
  },
  rear: {
    panels: 3,
    units: [
      {
        id: '11',
        panels: [
          {
            id: 1,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
          {
            id: 2,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
          {
            id: 3,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
        ],
      },
    ],
  },
  gable: {
    panels: 3,
    units: [
      {
        id: '11',
        panels: [
          {
            id: 1,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
          {
            id: 2,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
          {
            id: 3,
            name: '2400',
            isMirrored: true,
            width: '240',
            openingOne: '0',
            openingTwo: '0',
          },
        ],
      },
    ],
  },
};

const selectPanelsNum = (state, action) => {
  const editedItem = state.beingEdited;
  //const editedFacade = state[editedItem];

  //const editedPanels = { ...editedFacade, panels: action.payload };
  //console.log(editedPanels);

  return {
    ...state,
    [editedItem]: { panels: action.payload },
  };
};

//creates initial state for facade layout
const initiateFacade = (state, action) => {
  const floors = new Array(action.floors);
  const entrances = new Array(action.entrances);
  const pan = new Array(action.panels);

  const panels = [];
  for (let i = 1; i <= pan.length; i++) {
    panels.push({
      id: i,
      name: '',
      isMirrored: true,
      width: '240',
      openingOne: '0',
      openingTwo: '0',
    });
  }

  const cassettes = [];
  for (let i = 1; i <= floors.length; i++) {
    for (let l = 1; l <= entrances.length; l++) {
      cassettes.push(i.toString() + l.toString());
    }
  }

  const newUnits = [];
  for (let i = 0; i <= cassettes.length - 1; i++) {
    newUnits.push({
      id: cassettes[i],
      panels: panels,
    });
  }

  return {
    ...state,
    [action.text]: { panels: state[action.text].panels, units: newUnits },
  };
};

const updatePanels = (state, action) => {
  const editedItem = state.beingEdited;
  const units = state[editedItem].units;

  const updatedPanel = {
    id: parseInt(action.id),
    name: action.name,
    isMirrored: true,
    width: action.name.slice(0, 3),
    openingOne: '0',
    openingTwo: '0',
  };

  const mappedUnits = units.map(item => {
    //const firstFloorUnits = item.map(i => i.id[0] === '1');
    if (item.id[0] === '1') {
      const unitPanels = item.panels.map(p =>
        p.id === parseInt(action.id) ? updatedPanel : p
      );

      return { ...item, panels: unitPanels };
    } else if (item.id[0] !== '1') {
      const unitPanels = item.panels.map(p =>
        p.id === parseInt(action.id)
          ? {
              id: parseInt(action.id),
              name: '',
              isMirrored: true,
              width: action.name.slice(0, 3),
              openingOne: '0',
              openingTwo: '0',
            }
          : p
      );

      return { ...item, panels: unitPanels };
    }
    return item;
  });

  console.log(mappedUnits);
  return {
    ...state,
    [editedItem]: { panels: state[editedItem].panels, units: mappedUnits },
  };
};

//THIS WORKS FOR ALL PANELS VERTICALLY
// const updatePanels = (state, action) => {
//   const editedItem = state.beingEdited;
//   const units = state[editedItem].units;

//   const updatedPanel = {
//     id: parseInt(action.id),
//     name: action.name,
//     isMirrored: true,
//     width: action.name.slice(0, 3),
//     openingOne: '0',
//     openingTwo: '0',
//   };

//   const mappedUnits = units.map(item => {
//     console.log(item.id);
//     const unitPanels = item.panels.map(p =>
//       p.id === parseInt(action.id) ? updatedPanel : p
//     );
//     console.log(unitPanels);

//     const back = { ...item, panels: unitPanels };
//     return back;
//   });

//   console.log(mappedUnits);
//   return {
//     ...state,
//     [editedItem]: { panels: state[editedItem].panels, units: mappedUnits },
//   };
// };

const facadeReducer = (state = initialState, action) => {
  switch (action.type) {
    case facadeActionTypes.BEING_EDITED:
      return { ...state, beingEdited: action.payload };
    case facadeActionTypes.SELECT_NUM:
      return selectPanelsNum(state, action);
    case facadeActionTypes.INITIATE_FACADE:
      return initiateFacade(state, action);
    case facadeActionTypes.UPDATE_PANELS:
      return updatePanels(state, action);
    default:
      return state;
  }
};

export default facadeReducer;
