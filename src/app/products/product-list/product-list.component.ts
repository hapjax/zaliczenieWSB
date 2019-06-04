import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';

interface Product {
  name: string;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  currentItem = null; // for unfolding selected item

  constructor(public db: AngularFirestore) {
    //read from firebase
    db.collection('products').valueChanges()
      .subscribe((products: Product[]) => this.products = products);
  }

  selectItem(item) {
    // console.warn('działa');
    if (this.currentItem === item) {
      this.currentItem = null;
    } else {
      this.currentItem = item;
      // console.warn(this.currentItem);
    }
  }

  ngOnInit() {
  }

}
