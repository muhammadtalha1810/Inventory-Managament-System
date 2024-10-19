import { Routes } from '@angular/router';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RefundsPageComponent } from './refunds-page/refunds-page.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { SuppliersPageComponent } from './suppliers-page/suppliers-page.component';
import { WarehousesPageComponent } from './warehouses-page/warehouses-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { InvoicesPageComponent } from './invoices-page/invoices-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { MobiledataComponent } from './mobiledata/mobiledata.component';
import { UserdataComponent } from './userdata/userdata.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { NeworderComponent } from './neworder/neworder.component';

export const routes: Routes = [
    {path: '', component: DashboardPageComponent},
    {path: 'inventory', component: InventoryPageComponent},
    {path: 'refunds', component: RefundsPageComponent},
    {path: 'tracking', component: TrackingPageComponent},
    {path: 'suppliers', component: SuppliersPageComponent},
    {path: 'warehouses', component: WarehousesPageComponent},
    {path: 'payments', component: PaymentsPageComponent},
    {path: 'invoices', component: InvoicesPageComponent},
    {path: 'users', component: UsersPageComponent},
    {path: 'requests', component: RequestsPageComponent},
    {path: 'profile', component: ProfilePageComponent},       
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'reset-password', component: ResetPageComponent},
    {path: 'mobiledata/:id', component: MobiledataComponent},
    {path: 'userdata/:id', component: UserdataComponent},
    {path: 'adduser', component: AdduserComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'order/:id', component: OrderComponent},
    {path: 'neworder', component: NeworderComponent}
];
