import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') formValues;
  name:string;
  email:string;
  message:string;

  title:string = 'AGM map';
  lat: number = 53.197744;
  lng: number = 18.373484;

  constructor(public db: AngularFirestore) { 
    
  }

  ngOnInit() {
  }

  onSubmit():void {
    this.db.collection('messages').add({ name:this.name, email:this.email, message:this.message});
    // console.log('sent');
    this.formValues.resetForm();
    
  }
  
  //successfuly sends data to firebase

}
