import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, 
      horizontalPosition:"right", 
      verticalPosition: "top"
    })
  } 

  adicionarLivro(livro: Livro) {
    
  }
}
