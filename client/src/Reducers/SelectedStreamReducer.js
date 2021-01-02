export default ( state={}, action ) => {
  switch (action.type){
    case 'FETCH_STREAM' :
      return { ...state, ...action.payload.stream };

    case 'CLEAR_SELECTED_STREAM' :
      return {};

    default :
      return state;
  }
};