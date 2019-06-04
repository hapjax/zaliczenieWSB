import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

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
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpI3Yf0bbXV6yKMleZxWjhfsMqpK7PGtk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
