import { Component, OnInit } from '@angular/core';
import { Attendance } from '../models/attendance';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {
  attList!:Attendance[];
  constructor(private attService:AttendanceService) { }

  ngOnInit(): void {
    this.attService.getList().subscribe(list=>{
      console.log(list);
      this.attList=list;
    }, err=>{
      console.log(err);
      alert('Api Call Failed');
    })
  }
  delete(id:number){
    if(confirm('do you want to delete'))
  {
    console.log('deleting');
    this.attService.delete(id).subscribe(result=>{
      alert('Attendance deleted');
      this.ngOnInit();
    }, err=>{
      console.log(err);
    alert('Delete failed')  
    })
    
  }
  }
}