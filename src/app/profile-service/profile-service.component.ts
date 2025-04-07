import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile-service',
  imports: [CardComponent, ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './profile-service.component.html',
  styleUrl: './profile-service.component.scss'
})
export class ProfileServiceComponent {
  private readonly baseProfile = 'http://192.168.1.10:3001/student'

  responses = new Array(4)
  errors = new Array(4)

  getFormGroup = new FormGroup({
    perPage: new FormControl(),
    currentPage: new FormControl()
  })
  postFormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  })
  updateFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl()
  })
  deleteId = new FormControl()

  constructor(private readonly httpClient:HttpClient){}
  getAll()
  {
    this.httpClient.get(this.baseProfile+'/list',
      {
        observe: 'response',
        params:{
          perPage:this.getFormGroup.get('perPage')?.value,
          currentPage:this.getFormGroup.get('currentPage')?.value}}).subscribe(
            {
              next: res => {this.responses[0] = res.body; this.errors[0] = undefined},
              error: err => {this.errors[0] = err?.error; this.responses[0] = undefined}
            }
          )

  }
  postOne()
  {
    this.httpClient.post(this.baseProfile+'/addOne',{
      name: this.postFormGroup.get('name')?.value,
      email: this.postFormGroup.get('email')?.value
    },
      {
        observe: 'response'
      }).subscribe(
        {
          next: res => {this.responses[1] = res.body; this.errors[1] = undefined},
              error: err => {this.errors[1] = err?.error; this.responses[1] = undefined}
    
  })
  }
  updateOne()
  {
    this.httpClient.put(this.baseProfile+'/updateOne',
      {
        id: this.updateFormGroup.get('id')?.value,
        name: this.updateFormGroup.get('name')?.value,
        email: this.updateFormGroup.get('email')?.value
      },{observe: 'response'}
    ).subscribe({
      next: res => {this.responses[2] = res.body; this.errors[2] = undefined},
      error: err => {this.errors[2] = err?.error; this.responses[2] = undefined}
    })
  }

  deleteOne()
  {
    this.httpClient.delete(this.baseProfile+'/deleteOne/'+this.deleteId.value,
      {
        observe: 'response'
      }
    ).subscribe({
      next: res => {this.responses[3] = res.body; this.errors[3] = undefined},
      error: err => {this.errors[3] = err?.error; this.responses[3] = undefined}
    })
  }
}
