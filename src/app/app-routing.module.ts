import { RecipeComponent } from './recipes/recipe/recipe.component';
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
import { LinkmarkComponent } from './linkmarks/linkmark/linkmark.component';

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
          { path: ':id', component: NoteComponent }
        ]
      },
      {
        path: 'recipes', component: RouteComponent,
        children: [
          { path: '', pathMatch: 'full', component: RecipesComponent},
          { path: 'create', component: RecipeComponent },
          { path: ':id', component: RecipeComponent }
        ]
      },
      {
        path: 'linkmarks', component: RouteComponent,
        children: [
          { path: '', pathMatch: 'full', component: LinkmarksComponent},
          { path: 'create', component: LinkmarkComponent },
          { path: ':id', component: LinkmarkComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
