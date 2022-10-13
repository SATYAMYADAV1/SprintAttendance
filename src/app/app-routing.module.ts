import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';

const routes: Routes = [
  {path:'Attendances',component:AttendanceListComponent},
  {path:'Attendances/add',component:AddAttendanceComponent},
  {path:'Attendances/Update/:id',component:UpdateAttendanceComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
