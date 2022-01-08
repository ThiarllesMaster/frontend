import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component'
import { UtilizadorCrudComponent } from './views/utilizador-crud/utilizador-crud.component'
import { AdicionarLivroComponent } from './components/livro/adicionar-livro/adicionar-livro.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "livros",
  component: LivroCrudComponent
},
{
  path: "utilizadores",
  component: UtilizadorCrudComponent
}, 
{
  path:"livro/adicionar", 
  component: AdicionarLivroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
