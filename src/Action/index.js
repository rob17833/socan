export const addPlaylist = (data) =>({
  type: 'ADDPLAYLIST',
  payload : data
})

export const addSelected = (data) => ({
  type: 'ADDSELECTED',
  payload: data
})