import { AuthGuard } from './_service/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'notes', canActivate: [AuthGuard], component: NotesComponent},
  {path: 'recipes', canActivate: [AuthGuard], component: RecipesComponent},
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
