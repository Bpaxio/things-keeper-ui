import { LinkMarkControllerService } from './../../../api/service/api/linkMarkController.service';
import { Component, OnInit } from '@angular/core';
import { LinkMarkDto } from 'src/api/service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkmark',
  templateUrl: './linkmark.component.html',
  styleUrls: ['./linkmark.component.scss']
})
export class LinkmarkComponent implements OnInit {
  linkMark: LinkMarkDto;
  form: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: LinkMarkControllerService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.getUsingGET(id)
      .subscribe(linkMark => {
        this.linkMark = linkMark;
        this.createForm();
      });
    }
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    console.log(this.linkMark);
    this.form = new FormGroup(
      {
        title: new FormControl(this.linkMark ? this.linkMark.title : '', Validators.required),
        description: new FormControl(this.linkMark ? this.linkMark.description : '', Validators.required),
        link:  new FormControl(this.linkMark ? this.linkMark.link : '', Validators.required)
      }
    );
  }

  save() {
    if (this.linkMark) {
      return this.edit();
    }
    return this.create();
  }

  edit() {
    this.linkMark.description = this.form.get('description').value;
    this.linkMark.title = this.form.get('title').value;
    this.linkMark.link = this.form.get('link').value;
    this.service.updateUsingPUT(this.linkMark)
      // .subscribe(note => this.note = note)
      .subscribe(note => this.router.navigate(['/linkmarks']));
  }

  create() {
    this.service.createUsingPOST({
      title: this.form.get('title').value,
      description: this.form.get('description').value,
      link: this.form.get('link').value
    } as LinkMarkDto)
      .subscribe(note => this.router.navigate(['/linkmarks']));
  }

  cancel() {
    this.router.navigate(['/linkmarks']);
  }

}
