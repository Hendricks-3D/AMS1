import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCaseComponent } from './Components/Case/add-case/add-case.component';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { TabsComponent } from './Components/tabs/tabs.component';

const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'login', component: LoginComponent },

  //Client routes
  { path: 'add-client', component: AddClientComponent },
  //Case Routes
  { path: 'add-case', component: AddCaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
