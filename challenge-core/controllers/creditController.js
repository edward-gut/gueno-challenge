import axios from "axios";

export async function cuit(req, res){
    const id = req.params.id;
    
    const cuitData = await getCuit(id);

    if(cuitData.data.success){
        
        const cuit = cuitData.data.data.cuit;
        console.log(cuit);
        const userData = await getUserData(cuit);
        if(userData.data.success){  
            var result = userData.data;
            result.cuit = cuit;
            res.send(result);
        }else{
            res.status(204).send(userData.data.message);
        }

    }else{
        res.status(204).send(cuitData.data.message);
    }
    return res;
    
}

const getCuit = async (id) => {
    try {
      return await axios.get('https://api.gueno.com.ar/challenge/getCuit/'+id)
    } catch (error) {
        console.log(error.response.data);
        return error.response;
    }
  } 
  const getUserData = async (id) => {
    try {
      return await axios.get('https://api.gueno.com.ar/challenge/getUserData/'+id)
    } catch (error) {
        console.log(error.response.data);
        return error.response;
    }
  } 
