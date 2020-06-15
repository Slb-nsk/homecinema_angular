import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OkComponent } from './ok.component';
import { CreateComponent } from './create.component';
import { UpdateComponent } from './update.component';
import { AddUrlComponent } from './addurl.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [OkComponent, CreateComponent, UpdateComponent, AddUrlComponent ],
  exports: [ OkComponent, CreateComponent, UpdateComponent ]
})

export class EditingModule { }
