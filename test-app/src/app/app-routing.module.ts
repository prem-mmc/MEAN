import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientNote } from './posts/PN/patient-note.component';
import { ExamineInstructionComponent } from './posts/examine-instruction/examine-instruction.component';


const routes: Routes = [
  {path:'',redirectTo:"patientNote",pathMatch:'full'},
  {path:'patientNote',component:PatientNote},
  {path:'examineInstruction',component:ExamineInstructionComponent},
  {path:'**',redirectTo:'patientNote'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
