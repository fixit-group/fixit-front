import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { HeroContentComponent } from './hero-content/hero-content.component';

@NgModule({
  declarations: [HomeComponent, HeroContentComponent],
  imports: [CommonModule, CoreModule],
  exports: [HomeComponent],
})
export class HomeModule {}
