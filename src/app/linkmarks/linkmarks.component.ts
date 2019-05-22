import { Component, OnInit } from '@angular/core';
import { LinkMarkControllerService, LinkMarkDto } from 'src/api/service';
import { Observable, BehaviorSubject } from 'rxjs';
import { LINKMARKS } from 'src/mock-linkmarks';

@Component({
  selector: 'app-linkmarks',
  templateUrl: './linkmarks.component.html',
  styleUrls: ['./linkmarks.component.scss']
})
export class LinkmarksComponent implements OnInit {
  linkMarks$: Observable<LinkMarkDto[]>;

  constructor(
    private linkMarkService: LinkMarkControllerService
    ) { }

  ngOnInit() {
    this.linkMarks$ = this.linkMarkService.getAllUsingGET();
    // this.linkMarks$ = <BehaviorSubject<LinkMarkDto[]>>new BehaviorSubject(LINKMARKS).asObservable();
  }

}
