import { Routes } from '@angular/router';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DisplaydocumentComponent } from './displaydocument/displaydocument.component';
import { DocumentaccessComponent } from './documentaccess/documentaccess.component';
import { DocumentselectionComponent } from './documentselection/documentselection.component';

import { LoginComponent } from './login/login.component';
import { SuccessuploaddocumentComponent } from './successuploaddocument/successuploaddocument.component';

 
export const appRoutes: Routes = [
  // { path: '', component: RegisterSchoolComponent },
    // { path: 'registerschool', component: RegisterSchoolComponent },
    { path: 'login', component: LoginComponent },
    { path: 'documentselection', component: DocumentselectionComponent },
    { path: 'documentAccess', component: DocumentaccessComponent },
    { path: 'Successuploaddocument', component: SuccessuploaddocumentComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'displayDocument', component: DisplaydocumentComponent },



    // { path: 'documentselection', component: g },

    



    




]
  