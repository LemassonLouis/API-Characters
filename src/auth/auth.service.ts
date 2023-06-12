import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async singIn(username :string, pass :string) :Promise<any> {
        const user = await this.usersService.findOne(username);
        if(user?.password !== pass) {
            throw "Unknow user";
        }
        const { password, ...result } = user;

        return result;
    }
}
