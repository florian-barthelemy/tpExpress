import data from "../data.json" with { type: "json" };


function getAll(){
    return data.superHeros;
}

function getById(id){
    let index = findIndex(id);
    if(index ==-1){
        return undefined
    }
    else{
        return data.superHeros[index];
    }
}

function findIndex(id){
   let index = -1;
   let iteration = 0;
   while(index==-1 && iteration<data.superHeros.length){
    if(data.superHeros[iteration].id == id){
        index= iteration
    }
    iteration++;
   }
   return index;
}

function add(superHeros){
    let index = findIndex(superHeros.id);
    if(index!=-1){
        return undefined;
    }
    else{
        data.superHeros.push(superHeros);
        return superHeros;
    }
}

function update(superHeros,id){
    let index = findIndex(id);
    if(index==-1){
        return undefined;
    }
    else{
        data.superHeros[index].age = superHeros.age;
        data.superHeros[index].nom = superHeros.nom;
        data.superHeros[index].email = superHeros.email;
        data.superHeros[index].pouvoir = superHeros.pouvoir;
        return data.superHeros[index];
    }
}

function deleteSuperHeros(id){
    let index = findIndex(id);
    if(index==-1){
        return undefined;
    }
    else{
        return data.superHeros.splice(index,1);
    }

}

export default {getAll,getById, add, update, deleteSuperHeros}