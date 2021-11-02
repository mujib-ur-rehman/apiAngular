import { Component, OnInit } from '@angular/core';
import { ApiService } from '../sharedservice/api.service';
import { datamodel } from '../datamodel';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  constructor(private service: ApiService) {}

  datamodelobj: datamodel = new datamodel();
  data: any[] = [];

  getdata() {
    console.warn(
      this.service.getdata().subscribe(res => {
        this.data = res;
      })
    );
  }

  ngOnInit(): void {
    this.getdata();
  }
}
