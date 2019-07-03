const defaultState = {
  playlist: []
}

const playlistReducer = (state = defaultState, action) => {
  switch (action.type){
    case 'ADDPLAYLIST':
      return {
        ...state,
        playlist : [...state.playlist, action.payload]
      }
    default:
      return state;
  }
}

export default playlistReducer;