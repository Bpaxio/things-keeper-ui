import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NoteDto, NoteControllerService } from 'src/api/service';
import { NOTES } from 'src/mock-notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes$: Observable<NoteDto[]>;

  constructor(
    private noteService: NoteControllerService
    ) { }

  ngOnInit() {
    this.notes$ = this.noteService.getAllUsingGET1();
    // this.notes$ = <BehaviorSubject<NoteDto[]>>new BehaviorSubject(NOTES).asObservable();
  }

}
