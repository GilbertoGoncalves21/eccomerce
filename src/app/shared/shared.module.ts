import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SimpleDialogComponent } from './simples-dialog/simples-dialog.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SimpleDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SimpleDialogComponent
  ]
})
export class SharedModule { }
