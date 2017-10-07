import { User } from 'user-model';
import { Review } from 'review-model';

export function createUser(username, password, email, firstName, lastName){
	return new User(username, password, email, firstName, lastName,);
}

export function createReview(category, title, description, reviewText, author, date, image){
	return new Review(category, title, description, reviewText, author, date, image)
}