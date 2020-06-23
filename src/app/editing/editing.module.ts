import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';

import { OkComponent } from './ok.component';
import { CreateComponent } from './create.component';
import { UpdateComponent } from './update.component';
import { AddUrlComponent } from './addurl.component';
import { ChangeUrlComponent } from './changeurl.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule, RouterModule],
  declarations: [OkComponent, CreateComponent, UpdateComponent, AddUrlComponent, ChangeUrlComponent ],
  exports: [ OkComponent, CreateComponent, UpdateComponent ]
})

export class EditingModule { }
