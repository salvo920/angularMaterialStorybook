import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
{ path: "", component: HomeComponent },
{ path: "table", component: TableComponent },
{ path: "user", component: UserComponent },
];
