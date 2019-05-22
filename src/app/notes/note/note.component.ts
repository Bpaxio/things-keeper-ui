import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteControllerService, NoteDto } from 'src/api/service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { of, iif, EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note: NoteDto;
  form: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: NoteControllerService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.getUsingGET1(id)
      .subscribe(note => {
        this.note = note;
        this.createForm();
      });
    }
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    console.log(this.note);
    this.form = new FormGroup(
      {
        title: new FormControl(this.note ? this.note.title : '', Validators.required),
        description: new FormControl(this.note ? this.note.description : '', Validators.required)
      }
    );
  }

  save() {
    if (this.note) {
      return this.edit();
    }
    return this.create();
  }

  edit() {
    this.note.description = this.form.get('description').value;
    this.note.title = this.form.get('title').value;
    this.service.updateUsingPUT1(this.note)
      // .subscribe(note => this.note = note)
      .subscribe(note => this.router.navigate(['/notes']));
  }

  create() {
    this.service.createUsingPOST1({
      title: this.form.get('title').value,
      description: this.form.get('description').value
    } as NoteDto)
      .subscribe(note => this.router.navigate(['/notes']));
  }

  cancel() {
    this.router.navigate(['/notes']);
  }
}
