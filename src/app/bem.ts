import {TipoDeBem} from './tipo-de-bem';
import {MarcaDoBem} from './marca-do-bem';

export class Bem {
    tipo: number;
    marca: number;
    nome: string;
    modelo: string;
    descricao: string;

    constructor(tipo: number, marca: number, nome: string, modelo?: string, descricao?: string){
        this.tipo = tipo;
        this.marca = marca;
        this.nome = nome;
        this.modelo = modelo;
        this.descricao = descricao;
    }
}