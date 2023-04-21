import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kevin-medzorian', component: AboutComponent},
];

// Route all tools to the same component.
const tools = ['accents', 'metronome', 'definition-finder', 'encrypter', 'screencapper'];
for(const tool of tools)
  routes.push({ path: tool, component: ToolsComponent});

routes.push({ path: '**', component: PageNotFoundComponent });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
