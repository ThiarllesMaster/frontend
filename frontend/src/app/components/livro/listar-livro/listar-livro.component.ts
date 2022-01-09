import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros:Livro[] = []
  displayedColumns = ['id', 'titulo', 'categoria', 'exemplares']
  id: number = 0

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.listarLivros().subscribe(livros => {
      this.livros = livros
      console.log(livros)
    })
  }
  

  delete(){
    if(window.confirm('Are sure you want to delete this item ?')){
    //put your delete method logic here
    console.log("id")
   } 

  }
}
