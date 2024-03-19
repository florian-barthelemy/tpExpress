import data from "../data.json" with { type: "json" };
import SuperHeros from "../models/superHero.js";
const regexNom = /^[a-zA-Z\-]+$/;
const regexPouvoir = /^[a-zA-ZÀ-ÿ -]+$/;
const regexAge = /^\d{2}$/;
const regexEmail = /^[a-z0-9\-\._]+@[a-z0-9\-_]+\.[a-z]{2,8}$/

/**
 * permet de récupérer la liste de super héros depuis le fichier Json
 * @returns la liste des super héros
 */
function getAll() {
    return data.superHeros;
}


/**
 * permet de récupérer un super héros par son identitifiant
 * @param {number} id identifiant de l'élément à chercher
 * @returns le super héros si il le trouve sinon undefined
 */
function getById(id) {
    let index = findIndex(id);
    if (index == -1) {
        return undefined
    }
    else {
        return data.superHeros[index];
    }
}

/**
 * permet de retrouver la position dans le tableau d'un héros par son identifiant
 * @param {number} id 
 * @returns l'index si il trouve l'id dans le tableau sinon -1
 */
function findIndex(id) {
    let index = -1;
    let iteration = 0;
    while (index == -1 && iteration < data.superHeros.length) {
        if (data.superHeros[iteration].id == id) {
            index = iteration
        }
        iteration++;
    }
    return index;
}

/**
 * permet d'ajouter un super héros dans la liste
 * @param {SuperHeros} superHeros  le super héros à ajouter
 * @returns undefined si un super héros existe déjà avec le même id sinon 
 * si il y'a un problème lié au formulaire renvoit l'erreur sous forme de chaine
 * sinon renvoit l'objet ajouté
 */
function add(superHeros) {
    let index = findIndex(superHeros.id);
    if (index != -1) {
        return undefined;
    }
    else {
        let errorsRegex = checkRegex(superHeros);
        if (errorsRegex.length != 0) {
            return errorsRegex.join("\n");
        } else {
            data.superHeros.push(superHeros);
            return superHeros;
        }
    }
}

/**
 * permet de modifier un super héros
 * @param {SuperHeros} superHeros les nouvelles données du super Héros à modifier
 * @param {number} id  identifiant du super héros à modifier
 * @returns undefined si un super héros n'existe pas avec l'id sinon 
 * si il y'a un problème lié au formulaire renvoit l'erreur sous forme de chaine
 * sinon renvoit l'objet modifié
 */
function update(superHeros, id) {
    let index = findIndex(id);
    if (index == -1) {
        return undefined;
    }
    else {
        let errorsRegex = checkRegex(superHeros);
        if (errorsRegex.length != 0) {
            return errorsRegex.join("\n");
        }
        else {
            data.superHeros[index].age = superHeros.age;
            data.superHeros[index].nom = superHeros.nom;
            data.superHeros[index].email = superHeros.email;
            data.superHeros[index].pouvoir = superHeros.pouvoir;
            return data.superHeros[index];
        }
    }
}

/**
 * permet de supprimer un super héros par son id
 * @param {number} id identifiant du super héros
 * @returns si l'utilisateur existait, le renvoit sinon renvoit undefined
 */
function deleteSuperHeros(id) {
    let index = findIndex(id);
    if (index == -1) {
        return undefined;
    }
    else {
        return data.superHeros.splice(index, 1);
    }

}

/**
 * permet de vérifier si l'envoi des données de formulaire ajout/modification sont correctes
 * @param {SuperHeros} superHeros les nouvelles données à vérifier
 * @returns un tableau qui contient l'ensemble des erreurs du formulaire
 */
function checkRegex(superHeros) {
    let errorMessage = [];
    if (regexNom.test(superHeros.nom) == false) {
        errorMessage.push("Le nom ne doit contenir que des lettres et des tirets");
    }

    if (regexPouvoir.test(superHeros.pouvoir) == false) {
        errorMessage.push("Le pouvoir ne doit contenir que des lettres avec ou sans accents, des espaces et des tirets");
    }

    if (regexAge.test(superHeros.age) == false) {
        errorMessage.push("L'âge doit être un nombre entier de 2 chiffres");
    }

    if (regexEmail.test(superHeros.email) == false) {
        errorMessage.push("L'email doit  être composé de 3 parties séparées par @ et un point.\n" +
            "- La première ne doit contenir que des lettres minuscules non accentuées, des chiffres, des tirets, des underscore et des points.\n" +
            "- La deuxième ne doit contenir que des lettres minuscules non accentuées, des chiffres, des tirets, et des underscore.\n" +
            "- La troisième ne doit contenir que des lettres minuscules non accentuées dans la limite de 2 à 8 caractères.")
    }

    return errorMessage;
}

export default { getAll, getById, add, update, deleteSuperHeros }