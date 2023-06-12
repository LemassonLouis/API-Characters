import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async singIn(username :string, pass :string) :Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if(user?.password !== pass) {
            throw "Unknow user";
        }
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
