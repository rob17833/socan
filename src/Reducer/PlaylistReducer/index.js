const defaultState = {
  playlist: {}
}

const playlistReducer = (state = defaultState, action) => {
  switch (action.type){
    case 'ADDPLAYLIST':
      return {
        ...state,
        playlist : {
          playlist_name: action.payload.playlist_name,
          track: [action.payload.track1, action.payload.track2, action.payload.track3, action.payload.track4]
        }
      }
    default:
      return state;
  }
}

export default playlistReducer;