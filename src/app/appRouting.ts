
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


//import { AuthGuard } from './auth.guard';
import { AccueilComponent } from './accueil/accueil.component';
import { TableauComponent } from './tableau/tableau.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { CourbeComponent } from './courbe/courbe.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
 /*{ path: "login", component: LoginComponent },*/
 { path: 'accueil',component: AccueilComponent,/*canActivate: [AuthGuard]*/ },
 { path:'', redirectTo: '/accueil', pathMatch : 'full' },
 { path: 'tableau', component:TableauComponent },
 { path: 'localisation', component:LocalisationComponent},
 { path : 'courbe', component:CourbeComponent },
 { path : 'journal', component :JournalComponent },
];
@NgModule({
	imports:[ RouterModule.forRoot(routes)],
	exports:[RouterModule]
	
})
export class AppRoutingModule{
	
}