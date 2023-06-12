export class CreateUserDto {

  username :string;
  firstname :string;
  lastname :string;
  password :string;
  createdAt :Date;
  updatedAt :Date;

  constructor(
    username :string,
    firstname :string,
    lastname :string,
    password :string,
    createdAt :Date,
    updatedAt :Date
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}
