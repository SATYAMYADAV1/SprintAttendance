import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceListComponent,
    AddAttendanceComponent,
    UpdateAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
