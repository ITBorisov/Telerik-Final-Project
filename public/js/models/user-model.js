import * as userValidator from 'userValidator';

class User {
    constructor(username, password, email, firstName, lastName){
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = '';
    }

    get username(){
        return this._username;
    }

    set username(value){
        userValidator.validateUsername(value);
        this._username = value;
    }

    get password(){
        return this._password;
    }

    set password(value){
        userValidator.validatePassword(value)
        this._password = value;
    }

    get email(){
        return this._email;
    }

    set email(value){
        userValidator.validateEmail(value);
        this._email = value;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        userValidator.validateFirstName(value);
        this._firstName = value;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        userValidator.validateLastName(value);
        this._lastName = value;
    }

    get image(){
        return this._image;
    }

    set image(value){
        this._image = value 
    }
}


export { User }