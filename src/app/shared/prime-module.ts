import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageModule } from 'primeng/message';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';

import { PopoverModule } from 'primeng/popover';

const primengModules: any[] = [
  ButtonModule,
  SelectButtonModule,
  MessageModule,
  FloatLabelModule,
  TextareaModule,
  InputTextModule,
  PopoverModule
];

@NgModule({
  imports: primengModules,
  exports: primengModules,
})
export class PrimengModule {}
