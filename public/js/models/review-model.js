import * as reviewValidator from 'reviewValidator';

class Review {
    constructor(category, title, description, reviewText, author, date, image){
        this.category = category;
        this.title = title;
        this.description = description;
        this.reviewText = reviewText;
        this.author = author;
        this.date = date;
        this.image = image;
    }

    get category(){
        return this._category;
    }

    set category(value){
        this._category = value;
    }

    get title(){
        return this._title;
    }

    set title(value){
        reviewValidator.validateTitle(value);
        this._title = value;

    }

    get description(){    
        return this._description;
    }

    set description(value){
        reviewValidator.validateDescription(value);
        this._description = value;
    }

    get reviewText(){
        return this._reviewText;
    }

    set reviewText(value){
        reviewValidator.validateReview(value);
        this._reviewText = value;
    }

    get author(){
        return this._author;
    }

    set author(value){
        this._author = value;
    }

    get date(){
        return this._date;
    }

    set date(value){
        this._date = value;
    }

    get image(){
        return this._image;
    }

    set image(value){
        this._image = value;
    }
}

export { Review }