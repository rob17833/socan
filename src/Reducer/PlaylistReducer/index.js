const defaultState = {
  playlist: []
}

const playlistReducer = (state = defaultState, action) => {
  console.log(action.payload)
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