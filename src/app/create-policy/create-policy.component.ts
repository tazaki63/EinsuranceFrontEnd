import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../service/policy.service';
import { Policy } from 'src/policy';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  policy:Policy=new Policy(null,null,null,null,null,null,null,null);
  constructor(private service:PolicyService) { }

  ngOnInit(): void {
  }

  createPolicy():void{
    this.service.create(this.policy).subscribe(data=>console.log('policy created'));
  }
}
