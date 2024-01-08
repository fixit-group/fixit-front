import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule, SharedMaterialModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
