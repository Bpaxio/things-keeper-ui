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
    private noteService: NoteControllerService) { }

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    of(uuid)
      .pipe(
        switchMap(uuid =>
          iif(
            () => uuid !== null,
            this.noteService.getUsingGET1(uuid),
            EMPTY
          )
        )
      )
      .subscribe(note => {
          this.note = note;
          this.createForm();
        });
  }

  private createForm() {
    this.form = new FormGroup(
      {
        title: new FormControl(this.note ? this.note.title : '', Validators.required),
        description: new FormControl(this.note ? this.note.description : '', Validators.required)
      }
    );
  }

  edit() {
    this.note.description = this.form.get('description').value;
    this.note.title = this.form.get('title').value;
    this.noteService.updateUsingPUT1(this.note)
      .subscribe(note => this.note = note);
  }

  create() {
    this.noteService.createUsingPOST1({
      title: this.form.get('title').value,
      description: this.form.get('description').value
    } as NoteDto)
      .subscribe(note => this.router.navigate(['/notes']));
  }

  cancel() {
    this.router.navigate(['/notes']);
  }
}
