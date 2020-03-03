import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PatientNote } from './posts/PN/patient-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { 
  MatInputModule,
   MatCardModule,
    MatButtonModule,
  MatExpansionModule
  } from '@angular/material';
import { ExamineInstructionComponent } from './posts/examine-instruction/examine-instruction.component';
import { HeaderComponent } from './posts/header/header.component';
// import { PostsService } from './posts/posts.service';




@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    PatientNote,
    ExamineInstructionComponent,
     HeaderComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
