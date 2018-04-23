import { Component, OnInit } from '@angular/core';
import {TipoDeBem} from '../tipo-de-bem';
import {MarcaDoBem} from '../marca-do-bem';
import {Bem} from '../bem';

@Component({
  selector: 'app-bem',
  templateUrl: './bem.component.html',
  styleUrls: ['./bem.component.css']
})
export class BemComponent implements OnInit {
  tipo = null;
  marca = null;
  nome = null;
  modelo = null;
  descricao = null;
  salvar_ok = false;
  selecionado = false;

  tipos = [ new TipoDeBem(0, 'Computador'),
            new TipoDeBem(1, 'Scanner'),
            new TipoDeBem(2, 'Monitor'),
            new TipoDeBem(3, 'Impressora')];

  marcas = [ new MarcaDoBem(0, 'Positivo', '../../assets/logo_positivo.png'),
             new MarcaDoBem(1, 'Samsung', '../../assets/logo_samsung.png'),
             new MarcaDoBem(2, 'Itautec', '../../assets/logo_itautec.png'),
             new MarcaDoBem(3, 'Lenovo', '../../assets/logo_lenovo.png')];


  bens = [ new Bem(0, 0, 'POSITIVO D570', 'D570', 'Microcomputador desktop c/ gerenciamento remoto')]
  constructor() {
  }

  salvar(){
      const b = new Bem(this.tipo, this.marca, this.nome, this.modelo, this.descricao);
      this.bens.push(b);
      this.salvar_ok = true;
      this.cancelar();
  }

  cancelar(){
      this.tipo = null;
      this.marca = null;
      this.nome = null;
      this.modelo = null;
      this.descricao = null;
  }

    selecionar(status) {
        this.selecionado = status;
    }

  ngOnInit() {
  }

}
