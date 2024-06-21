import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UsersDetailsComponent } from './users-details/users-details.component';

import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [
    UsersDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
    imports: [
      FormsModule,
      CommonModule,
      AngularMaterialModule,
      PipesModule,
    ],
    exports: [
      UsersDetailsComponent,
      FilterComponent,
      UsersListComponent
    ]
})
export class ComponentsModule { }