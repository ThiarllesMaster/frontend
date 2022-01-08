import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
  
  }

  createLivro():void {
    this.livroService.showMessage('Teste de inclusão')
  }

}
