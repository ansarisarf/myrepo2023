import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { RoutingComponent } from './components/routing/routing.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ObservableComponent } from './components/observable/observable.component';
import { SahringdataComponent } from './components/sahringdata/sahringdata.component';
import { ParentComponent } from './components/sahringdata/parent/parent.component';
import { ChildComponent } from './components/sahringdata/child/child.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { CorssharingdataComponent } from './corssharingdata/corssharingdata.component';
import { LazylodingComponent } from './components/lazyloding/lazyloding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RoutingComponent,
    SubjectComponent,
    ObservableComponent,
    SahringdataComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    CorssharingdataComponent,
    LazylodingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
