import { APIS } from './../api/service/api/api';
import { ApiModule } from './../api/service/api.module';
import { AuthService } from './_service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { TokenService } from './_service/token.service';
import { urlConfigFactory } from './_config/url.config.factory';
import { MainComponent } from './main/main.component';
import { NoteComponent } from './notes/note/note.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { LinkmarksComponent } from './linkmarks/linkmarks.component';
import { LinkmarkComponent } from './linkmarks/linkmark/linkmark.component';
import { TokenInterceptor } from './_interceptor/token.interceptor';
import { RouteComponent } from './route/route.component';
import { RegisterComponent } from './register/register.component';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    RecipesComponent,
    LoginComponent,
    MainComponent,
    NoteComponent,
    RecipeComponent,
    LinkmarksComponent,
    LinkmarkComponent,
    RouteComponent,
    RegisterComponent
  ],
  imports: [
    ApiModule.forRoot(urlConfigFactory),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FileDropModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    APIS,
    HttpClient,
    TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
