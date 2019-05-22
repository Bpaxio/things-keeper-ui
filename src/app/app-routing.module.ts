import { NoteComponent } from './notes/note/note.component';
import { RegisterComponent } from './register/register.component';
import { LinkmarksComponent } from './linkmarks/linkmarks.component';
import { AuthGuard } from './_service/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MainComponent } from './main/main.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: '', component: MainComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      {
        path: 'notes', component: RouteComponent,
        children: [
          { path: '', pathMatch: 'full', component: NotesComponent},
          { path: 'create', component: NoteComponent },
          { path: ':uuid', component: NoteComponent }
        ]
      },
      { path: 'recipes', component: RecipesComponent },
      { path: 'linkmarks', component: LinkmarksComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
