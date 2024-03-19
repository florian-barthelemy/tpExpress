import express from "express";
const router = express();
const url = "/superHeros";
import superHerosFichier from "../src/superHerosFichier.js";

/**
 * permet de récupérer tous les super héros
 */
router.get(url,function(req,res){
    res.status(200).send(superHerosFichier.getAll());
})

/**
 * permet de récupérer un super héros
 */
router.get(`${url}/:id`,function(req,res){
    let superHeros =superHerosFichier.getById(req.params.id);
    if(superHeros == undefined){
        res.status(404).send(`Le super héros avec l'id ${req.params.id} n'existe pas.`);
    }
    else{
        res.status(200).send(superHeros);
    }
})

/**
 * permet de créer un super héros
 */
router.post(url,function(req,res){
    let superHeros = superHerosFichier.add(req.body);
    if(superHeros == undefined){
        res.status(409).send(`Un super Héros avec l'id ${req.body.id} existe déjà`);
    }
    else if(typeof superHeros == "string"){
        res.status(400).send(superHeros);
    }
    else{
        res.status(201).send(`Création du super héros réussie`);
    }
})

/**
 * permet de modifier un super héros
 */
router.put(`${url}/:id`,function(req,res){
    let superHeros = superHerosFichier.update(req.body,req.params.id);
    if(superHeros == undefined){
        res.status(404).send(`Le super héros avec l'id ${req.params.id} n'existe pas.`);
    }
    else if(typeof superHeros == "string"){
        res.status(400).send(superHeros);
    }
    else{
        res.status(201).send(superHeros);
    }
})


/**
 * permet de supprimer un super héros
 */
router.delete(`${url}/:id`,function(req,res){
    let superHeros = superHerosFichier.deleteSuperHeros(req.params.id);
    if(superHeros == undefined){
        res.status(404).send(`Le super héros avec l'id ${req.params.id} n'existe pas.`);
    }
    else{
        res.status(200).send(`Suppression du super héros réussie`);
    }

})



export default{router}