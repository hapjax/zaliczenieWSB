import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

const config = {
  apiKey: "AIzaSyBwb1nmkfEo8yCHc0Z6aRCkyR3r8D0rHgE",
    authDomain: "angular-project-56c28.firebaseapp.com",
    databaseURL: "https://angular-project-56c28.firebaseio.com",
    projectId: "angular-project-56c28",
    storageBucket: "angular-project-56c28.appspot.com",
    messagingSenderId: "337992010917",
    appId: "1:337992010917:web:260ecab4f2278c2f"
};

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ]
})
export class ProductsModule { }
