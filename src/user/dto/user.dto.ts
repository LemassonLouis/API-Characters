import { User } from "../entities/user.entity";

export class UserDto {

    private id:Number;
    username:String;
    firstname:String;
    lastname:String;
    password:String;
    createdAt:Date;
    updatedAt:Date;

    constructor(user:User) {
        this.username = user.username;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.password = user.password;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }

}
