import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazylodingComponent } from './components/lazyloding/lazyloding.component';
import { ObservableComponent } from './components/observable/observable.component';
import { RoutingComponent } from './components/routing/routing.component';
import { SahringdataComponent } from './components/sahringdata/sahringdata.component';
import { SubjectComponent } from './components/subject/subject.component';
import { CorssharingdataComponent } from './corssharingdata/corssharingdata.component';

const routes: Routes = [
  {path:'routing' , component:RoutingComponent},
  {path:'subject', component:SubjectComponent},
  {path:'observable', component:ObservableComponent},
  {path:'sharedata', component:SahringdataComponent},
  {path:'crosssharedata', component:CorssharingdataComponent},
  {path:'lazyloading', component:LazylodingComponent},
  {path:'',component:RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
