import _ from 'lodash';

export default ( state = {}, action ) => {
  switch(action.type){
    case 'FETCH_STREAM' :
      return { ...state, selectedStream : action.payload.stream };
      
    case 'FETCH_STREAMS' :
      return { ...state, ..._.mapKeys(action.payload.streamsList, '_id') };

    case 'CREATE_STREAM' :
      return { ...state, [action.payload.id] : action.payload };
    
    case 'EDIT_STREAM' :
      return { ...state, [action.payload.id] : action.payload };

    case 'DELETE_STREAM' :
      return _.omit(state, action.payload);
    
    default : 
      return state;
  }
}