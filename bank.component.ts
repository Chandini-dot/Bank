import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  title = 'rg';
    bankname="";
  aa:boolean=false;
  users=[{
    Action:'1',
    bankname:' Bharat Cooperative bank Mumbai Limited',
    IFSC:'BCBM00077',
  Bankid:'68',
  Branch:'Koramangala'
},{
    Action:'1',
    bankname:' Bharat Cooperative bank Mumbai Limited',
    IFSC:'BCBM00077',
  Bankid:'68',
  Branch:'Magadi Main Road'
  },{
    Action:'1',
    bankname:' City Union bank Limited',
    IFSC:'CIUB00054',
  Bankid:'44',
  Branch:'Bnaglore sultanpet'
  },{
    Action:'1',
    bankname:' City Union bank Limited',
    IFSC:'CIUB000109',
  Bankid:'44',
  Branch:'Koramangal Bangalore'
  },
  {
    naAction:'1',
    bankname:' City Union bank Limited',
    IFSC:'CIUB000132',
  Bankid:'44',
  Branch:'Malleshwaram'
  },
  {
    Action:'1',
    bankname:' City Union bank Limited',
    IFSC:'CIUB000139',
  Bankid:'44',
  Branch:'Indira nagar'
  },
  {
    Action:'1',
    bankname:' City Union bank Limited',
    IFSC:'CIUB000148',
  Bankid:'44',
  Branch:'Jaya nagar banglore'
  },
  {
    Action:'1',
    bankname:' City Union bank Limited',
    IFSC:'CIUB000188',
  Bankid:'44',
  Branch:'Rajaji Nagar banglore'
  }]
​
  setIndex(i){
    this.aa=i;
    console.log
  }

//  bankform:FormGroup;
// constructor(public router:Router,private fb:FormBuilder,) { 
//   this.bankform = this.fb.group({
//       city: new FormControl(''),
//        })
// }
constructor() {}
ngOnInit() {
  }
}
