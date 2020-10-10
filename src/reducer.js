const initialState = {
    data : null,
    categories: null,
    loading : false
}

function reducer(state, action){
    switch(action.type) {
        case "FETCHING": return { 
                ...state, 
                loading: true,
                data: null
            };
        case "LIST_DATA_RECEIVED": return {
            categories : action.data,
            loading: false,
        };
        case "BOOKS_RECEIVED": return {
            ...state,
            data : action.data,
            loading: false
        }
    }
}

export { reducer, initialState};