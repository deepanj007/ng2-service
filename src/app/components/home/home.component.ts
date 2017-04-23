import { Component, OnInit } from '@angular/core';
import {AddServiceService} from '../../services/add-service.service';
import {NgProgressService} from "ng2-progressbar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text1 : number;
  text2 : number;
  result : number;
  constructor(
    private _addService:AddServiceService,
    private pService: NgProgressService
  ) { }

  ngOnInit() {
    this.pService.start();
  }

  add(){
    console.log("add : "+(this.text1 + this.text2));
    this.result = this._addService.add(this.text1,this.text2);
  }

}
