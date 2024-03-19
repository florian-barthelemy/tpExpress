export class superHeros {
    id;
    nom;
    pouvoir;
    age;
    email;

    get id() {
        return this.id;
    }

    get nom() {
        return this.nom;
    }

    get pouvoir() {
        return this.pouvoir;
    }

    get age() {
        return this.age;
    }

    get email() {
        return this.email;
    }

    set id(id) {
        this.id = id;
    }

    set nom(nom) {
        this.nom = nom;
    }

    set pouvoir(pouvoir) {
        this.pouvoir = pouvoir;
    }

    set age(age) {
        this.age = age;
    }

    set email(email) {
        this.email = email;
    }


    toJson(){
        return {id:this.id, nom:this.nom, pouvoir:this.pouvoir, age:this.age, email:this.email}
    }


}
