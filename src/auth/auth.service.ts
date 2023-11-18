import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcryptjs";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmailForAuth(email);
    if (user) {
      const passwordMatch = await compare(pass, user.passwordHash);
      if (passwordMatch) {
        return { email: user.email, id: user.id };
      }
    }
    const payload = { sub: user.id, email: user.email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}

// if (user?.passwordHash !== pass) {
//   throw new UnauthorizedException("Incorrect e-mail or password");
// }
