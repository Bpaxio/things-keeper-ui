import { NoteControllerService } from './../../api/service/api/noteController.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteDto } from 'src/api/service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes$: Observable<NoteDto[]>;

  constructor(private noteService: NoteControllerService) { }

  ngOnInit() {
    this.notes$ = this.noteService.getAllUsingGET1();
  }

}
