import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { FilmComponent } from './layout/film.component';
import { SerialComponent } from './layout/serial.component';
import { OkComponent } from './editing/ok.component';
import { CreateComponent } from './editing/create.component';
import { UpdateComponent } from './editing/update.component';


const appRoutes: Routes = [
    { path: '', component: LayoutComponent},
    { path: 'film/:movieId', component: FilmComponent},
    { path: 'serial/:movieId', component: SerialComponent},
    { path: 'ok', component: OkComponent},
    { path: 'create', component: CreateComponent},
    { path: 'update/:movieId', component: UpdateComponent}
  ];

@NgModule({
  declarations: [LayoutComponent, FilmComponent, SerialComponent, OkComponent,
                  CreateComponent, UpdateComponent ],
  imports: [RouterModule.forRoot(appRoutes), CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
