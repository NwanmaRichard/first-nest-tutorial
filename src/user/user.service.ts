import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
import { identity } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async editUser(userId: number, dto: EditUserDto) {
        const user = await this.prisma.user.update({
            where:{
                id: userId
            },
            data:{
                ...dto
            }
        })
        delete user.hash

        console.log(user)
        return user
    }
}
