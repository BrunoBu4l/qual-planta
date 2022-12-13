export class Mensagens {
    nameId: number;
    scientificName: string;
    family: string;

    constructor(nome: number, sname: string, fam: string) {
        this.nameId = nome;
        this.scientificName = sname;
        this.family = fam;
    }
}

export interface User {
    uid: string;
    email: string;
}
