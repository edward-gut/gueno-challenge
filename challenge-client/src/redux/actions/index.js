import axios from "axios";  

    export const searchData = (id) => dispatch =>{
        dispatch({
            type: "SEARCH_DATA",
            payload: axios.get("/api/credit/cuit/"+id)
        });
    };

