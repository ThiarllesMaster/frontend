import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = environment.apiBaseUrl

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, 
      horizontalPosition:"right", 
      verticalPosition: "top"
    })
  } 

  adicionarLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro)
  }
}
