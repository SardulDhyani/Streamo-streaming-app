import Streams from '../API/Streams';
import history from '../history';

export const signIn = (userId) => {
  return {
    type : 'SIGN_IN',
    payload : userId
  };
};

export const signOut = () => {
  return {
    type : 'SIGN_OUT'
  };
};

export const fetchStreams = () => async (dispatch) => {
    const response = await Streams.get('/streams');
    dispatch ({
      type : 'FETCH_STREAMS',
      payload : response.data
    });
    dispatch({
      type : 'CLEAR_SELECTED_STREAM'
    });
  };

export const fetchStream =  streamId => async dispatch => {
    const response = await Streams.get(`/streams/${streamId}`);
    dispatch({
      type : 'FETCH_STREAM',
      payload : response.data
    });
  };

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;  
  const response = await Streams.post('/streams/create', { ...formValues, createdBy : userId});
    dispatch({
      type : 'CREATE_STREAM',
      payload : response.data
    });

    history.push('/');
  };

export const editStream = (streamId, formValues) => async dispatch => {
    const response = await Streams.patch(`streams/${streamId}`, formValues);
    dispatch({
      type : 'EDIT_STREAM',
      payload : response.data
    });
    history.push('/');
  };

export const deleteStream = streamId => async dispatch => {
    await Streams.delete(`/streams/${streamId}`);
    dispatch({
      type : 'DELETE_STREAM',
      payload : streamId
    });
    history.push('/');
  };