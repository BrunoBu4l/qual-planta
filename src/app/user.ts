export class User {
    public id: number;
    public user: string;
    public senha: number;

    constructor(id: number, user: string,  senha: number){
        this.id = id;
        this.user = user;
        this.senha = senha;
    }
}
