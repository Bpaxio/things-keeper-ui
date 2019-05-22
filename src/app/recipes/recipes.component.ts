import { Component, OnInit } from '@angular/core';
import { RecipeDto, RecipeControllerService } from 'src/api/service';
import { Observable, BehaviorSubject } from 'rxjs';
import { RECIPES } from 'src/mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes$: Observable<RecipeDto[]>;

  constructor(
    private recipeService: RecipeControllerService
    ) { }

  ngOnInit() {
    this.recipes$ = this.recipeService.getAllUsingGET2();
    // this.recipes$ = <BehaviorSubject<RecipeDto[]>> new BehaviorSubject(RECIPES).asObservable();
  }

}
