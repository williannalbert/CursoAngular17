import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UsersDetailsComponent } from './users-details/users-details.component';

@NgModule({
    declarations: [
    UsersDetailsComponent
  ],
    imports: [
        AngularMaterialModule
    ],
    exports: [
      UsersDetailsComponent
    ]
})
export class ComponentsModule { }