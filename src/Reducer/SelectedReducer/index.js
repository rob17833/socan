const defaultState = {
    selected: {}
}

const selectedReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'ADDSELECTED':
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}

export default selectedReducer;