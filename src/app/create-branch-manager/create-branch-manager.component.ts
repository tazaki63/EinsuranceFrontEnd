import { Component, OnInit } from '@angular/core';
import { BranchManager } from 'src/branchManager';
import { BranchManagerService } from '../service/branch-manager.service';


@Component({
  selector: 'app-create-branch-manager',
  templateUrl: './create-branch-manager.component.html',
  styleUrls: ['./create-branch-manager.component.css']
})
export class CreateBranchManagerComponent implements OnInit {

  branchManager:BranchManager=new BranchManager(null,'','',null,'','','','','','','','');
  constructor(private service:BranchManagerService) { }

  ngOnInit(): void {
  }

  createBranchManager():void{
    this.service.createBranchManager(this.branchManager).subscribe(data=>console.log('manager created'));
  
  }
}
