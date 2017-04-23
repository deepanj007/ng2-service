import { Injectable } from '@angular/core';

@Injectable()
export class AddServiceService {

  constructor() { }
  add(a: number,b: number): any{
    return a+b;
  }
}
