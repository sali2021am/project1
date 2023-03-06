import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NotesComponent } from './components/notes/notes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"etudiant",component:EtudiantComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"notes",component:NotesComponent, canActivate:[AuthGuard]},
  {path:"**",redirectTo:"welcome",pathMatch:"full"},
  {path:"",redirectTo:"welcome",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
