import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    name: new FormControl(''),
    age: new FormControl('')
  });
  onSubmit() {
    this.datamodelobj.name = this.profileForm.value.name;
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

  ngOnInit(): void {}
}
