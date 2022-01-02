import { Injectable } from '@nestjs/common';


export type Users={
    id:number,
    name: String,
    userName: String,
    password: String
}
@Injectable()
export class UsersService {
    Private readonly users:Users[] = [
        {
            id:1,
            name:"mark",
            userName:"markX",
            password:"123456"
        },
        {
            id:2,
            name:"foo",
            userName:"buzz",
            password:"123456"
        }
    ];

   async findOne(userName:String):Promise<Users | undefined> {
       return this.users.find(user => user.userName === userName)
   }
}
