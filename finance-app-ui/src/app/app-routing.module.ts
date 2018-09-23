import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { TaggingComponent } from './tagging/tagging.component'
import { OverviewComponent } from './overview/overview.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: 'tag', component: TaggingComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: AppComponent}
];

@NgModule({
 exports : [RouterModule],
 imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {

}
