import { User } from 'user-model';


export function createUser(username, password, email, firstName, lastName){
	return new User(username, password, email, firstName, lastName,);
}