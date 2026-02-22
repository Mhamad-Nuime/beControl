import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BasePage } from '../base/base-page/base-page';
import { PrimengModule } from './prime-module';
import { FormsModule } from '@angular/forms';

const SharedModules: any[] = [FormsModule, CommonModule, PrimengModule, TranslateModule, BasePage];

@NgModule({
  imports: SharedModules,
  exports: SharedModules,
})
export class SharedModule {}
