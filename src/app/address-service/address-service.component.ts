import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-service',
  imports: [ReactiveFormsModule, JsonPipe, CardComponent],
  templateUrl: './address-service.component.html',
  styleUrl: './address-service.component.scss'
})
export class AddressServiceComponent {
  constructor(private readonly httpClient: HttpClient){}

  private readonly baseAddress = 'http://localhost:3002'

  responses = new Array(2)
  errors = new Array(2)

  getFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    id: new FormControl()
  })
  postFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })


  getOne()
  {
    const headers =  'Basic '+btoa(this.getFormGroup.get('username')?.value+':'+this.getFormGroup.get('password')?.value)
    this.httpClient.get(this.baseAddress+'/address/getOne/'+this.getFormGroup.get('id')?.value,
  {
    observe: 'response',
    headers: {authorization:headers}

  }).subscribe(
    {
      next: res => this.responses[0] = res.body,
      error: err => this.errors[0] = err?.error
    }
  )
  }
  postOne()
  {
    this.httpClient.post(this.baseAddress+'/auth/register',
    {
      username: this.postFormGroup.get('username')?.value,
      password: this.postFormGroup.get('password')?.value
    },{
      observe: 'response'
    }).subscribe(
      {
        next: res => this.responses[1] = res.body,
        error: err => this.errors[1] = err?.error
      }
    )
  }
}
