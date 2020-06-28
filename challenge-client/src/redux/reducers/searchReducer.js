export default function(state={
    data: null,
    text: '',
    firstSearch: false,
    searching: false,
    error: null
}, action){
    switch(action.type){
        case "SEARCH_DATA_PENDING": {
            console.log(state);
            return {...state, searching: true}
            break;
        }
        case "SEARCH_DATA_REJECTED":{
            console.log(state);
            return {...state, searching: false, error: action.payload, data:null}
            break;
        }
        case "SEARCH_DATA_FULFILLED":{
            console.log(state);
            return {
                
                ...state, 
                searching : false,
                firstSearch: true,
                data: action.payload,
                error: false
            }
            break;
        }
    }

    return state;
}