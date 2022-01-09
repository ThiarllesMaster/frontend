import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros:Livro[] = []
  displayedColumns = ['id', 'titulo', 'categoria', 'exemplares', 'Ação']
  id: number = 0

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit(): void {
    this.livroService.listarLivros().subscribe(livros => {
      this.livros = livros
      console.log(livros)
    })
  }
  

  delete(id: number){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.livroService.removerLivro(id).subscribe(() => {
        this.livroService.showMessage('Livro removido com sucesso!')        
      })    
   } 
   this.router.navigate(['/livros'])
  }
}
