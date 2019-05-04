import axios from 'axios';

export function axiosTokenHeader(token){
    return {
        'Authorization': `Bearer ${token}`
    }
}

const server = "http://localhost:8081/api/"
const externalApi = "https://www.thecocktaildb.com/api/json/v1/1/";

export function internalServerCall(method, path, data, header){
    return new Promise((resolve, reject)=>{
        return axios({
            method: method.toLowerCase(),
            url: server + path,
            headers: header,
            data
        }).then(res=>{
            return resolve(res)
        }).catch(err=>{
            return reject(err)
        })
    })
}

const externalApiCommands = {
    name: "search.php?s=",
    ingredientName: "search.php?i=",
    drinkId: "lookup.php?i=",
    ingredientId: "lookup.php?iid=",
    random: "random.php",
    filterIngredient: "filter.php?i=",
    filterAlcoholic: "filter.php?a=Alcoholic",
    filterNonalcoholic: "filter.php?a=Non_Alcoholic",
    filterCategory: "filter.php?c=",
    filterGlass: "filter.php?g="
}

export function externalApiCall(type, data){
    return new Promise((resolve, reject)=> {
        return axios({
            method: 'get',
            url: externalApi + externalApiCommands[type] + (data?data:"")
        }).then(res=> {
            return resolve(res.data.drinks)
        }).catch(err =>{
            return reject(err)
        })
    })
}

