import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router'
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {

  categoria: string = "";

  categorias: Categoria[] = [
    {value: 'Informática', viewValue: 'Informática'},
    {value: 'Ciências', viewValue: 'Ciências'}
  ];

  livro: Livro = {
    titulo: "", 
    categoria: "", 
    exemplares: 0
  }

  constructor(private livroService: LivroService, 
    private router: Router) { }

  ngOnInit(): void {}

  adicionarLivro():void {
    this.livro.categoria = this.categoria
    this.livroService.adicionarLivro(this.livro).subscribe(()=> {
      this.livroService.showMessage('Livro adicionado com sucesso')
      this.router.navigate(['/livros'])
    
    })
  }

  retornar():void {
    this.router.navigate(['/livros'])
  }

}
