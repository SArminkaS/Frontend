import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressServiceComponent } from "./address-service/address-service.component";
import { ProfileServiceComponent } from "./profile-service/profile-service.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddressServiceComponent, ProfileServiceComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
