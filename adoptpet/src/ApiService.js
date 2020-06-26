import axios from 'axios';

class ApiService
{

    static getData()
    {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get('http://localhost:3000/api');
                const data = res.data;
                console.log(data)
                resolve(
                    data.map(api => ({
                        ...api,
                        createdAt: new Date(api.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        })
    }
}

export default ApiService;