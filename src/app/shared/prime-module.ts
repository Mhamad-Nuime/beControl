import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';

const primengModules: any[] = [ButtonModule ,SelectButtonModule ];

@NgModule({
  imports: primengModules,
  exports: primengModules,
})
export class PrimengModule {}
