import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id :Number;

    @Column()
    username :String;

    @Column()
    firstname :String;

    @Column()
    lastname :String;

    @Column()
    password :String;

    @Column()
    createdAt :Date;

    @Column()
    updatedAt :Date;

}
