import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RecipeDto, RecipeControllerService } from 'src/api/service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: RecipeDto;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipeControllerService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.getUsingGET2(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.createForm();
      });
    }
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.form = this.formBuilder.group(
      {
        title: this.formBuilder.control(this.recipe ? this.recipe.title : '', Validators.required),
        description: this.formBuilder.control(this.recipe ? this.recipe.description : '', Validators.required),
        category: this.formBuilder.control(this.recipe ? this.recipe.category : ''),
        link: this.formBuilder.control(this.recipe ? this.recipe.link : ''),
        steps: new FormArray([new FormGroup({step: new FormControl('')})])
      }
    );
  }

  get steps() {
    return this.form.get('steps') as FormArray;
  }

  addStep() {
    this.steps.push(new FormGroup({step: new FormControl('')}));
  }

  deleteStep(index) {
    this.steps.removeAt(index);
  }

  save() {
    if (this.recipe) {
      return this.edit();
    }
    return this.create();
  }

  edit() {
    this.recipe.description = this.form.get('description').value;
    this.recipe.title = this.form.get('title').value;
    this.service.updateUsingPUT2(this.recipe)
      .subscribe(note => this.router.navigate(['/recipes']));
  }

  create() {
    this.service.createUsingPOST2({
      title: this.form.get('title').value,
      description: this.form.get('description').value
    } as RecipeDto)
      .subscribe(note => this.router.navigate(['/recipes']));
  }

  cancel() {
    this.router.navigate(['/recipes']);
  }

}
