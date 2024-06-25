import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/material.module';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ AngularMaterialModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavbarComponent {

}
