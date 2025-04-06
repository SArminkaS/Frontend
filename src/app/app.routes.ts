import { Routes } from '@angular/router';
import { ProfileServiceComponent } from './profile-service/profile-service.component';
import { AddressServiceComponent } from './address-service/address-service.component';

export const routes: Routes = [
    {path:'', redirectTo:'profile_service', pathMatch:'full'},
    {path:'profile_service', component: ProfileServiceComponent},
    {path:'address_service', component: AddressServiceComponent}
];
