import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TreeModule } from 'angular-tree-component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, PageNotFoundComponent, TreeNodeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TreeModule.forRoot(),
    NgMaterialMultilevelMenuModule,
    MatSidenavModule,
    HttpClientModule,
    RouterModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TreeModule,
    NgMaterialMultilevelMenuModule,
    MatSidenavModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ]
})
export class SharedModule {


  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    }
  }


 }
