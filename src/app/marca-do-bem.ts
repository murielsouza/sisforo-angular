export class MarcaDoBem {
    id: number;
    nome: string;
    logo: string;

    constructor(id: number, nome: string, logo?: string) {
        this.id = id;
        this.nome = nome;
        this.logo = logo;
    }
}