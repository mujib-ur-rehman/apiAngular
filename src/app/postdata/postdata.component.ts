import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../sharedservice/api.service';
import { datamodel } from '../datamodel';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  constructor(private service: ApiService) {}

  datamodelobj: datamodel = new datamodel();

  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required
      // Validators.pattern('[a-zA-Z ]*')
    ]),
    age: new FormControl('')
  });
  onSubmit() {
    this.datamodelobj.email = this.profileForm.value.email;
    this.datamodelobj.age = this.profileForm.value.age;

    console.warn(this.profileForm.value);
    this.service.postdata(this.datamodelobj).subscribe(
      res => {
        console.warn(res);
        alert('user added succesfully');
      },
      err => {
        alert('something went wrong');
      }
    );
  }
  get email() {
    return this.profileForm.get('email');
  }

  ngOnInit(): void {}
}
