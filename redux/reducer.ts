type StateType = {};

type ActionType = {
  type: string;
  payload?: any | boolean | string; // Affinez ce type en fonction de vos besoins
};

const initState: StateType = {
};

const reducer = (state = initState, action: ActionType): StateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;