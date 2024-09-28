import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiButton} from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { ClientsInfoComponent } from '../clients-info/clients-info.component';
import { PaymentComponent } from '../payment/payment.component';
import {TuiCarousel} from '@taiga-ui/kit';
import { StartInfoComponent } from '../start-info/start-info.component';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-start-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    FormsModule,
    ClientsInfoComponent,
    PaymentComponent,
    StartInfoComponent,
    TuiCarousel
  ],
  templateUrl: './start-form.component.html',
  styleUrl: './start-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartFormComponent {
  public isFormValidOne?: boolean;
  public isFormValidTwo?: boolean;
  public isFormValidThree?: boolean;
  public page = 0;

  constructor(public readonly service: BackendService, private readonly cdr: ChangeDetectorRef) {}

  public handleFormValidityOne(validity: boolean) {
    this.isFormValidOne = validity;
  }

  public handleFormValidityTwo(validity: boolean) {
    this.isFormValidTwo = validity;
  }

  public handleFormValidityThree(validity: boolean) {
    this.isFormValidThree = validity;
  }

  public nextPage(): void {
    console.log(this.page);
    
    if(!this.getValidity()) {
      if(this.page < 2) this.page++;
    }    
  }

  public pastPage(): void {
    if(this.page > 0) this.page--;
  }

  public finish(): void {

  }

  public getValidity(): boolean {
    if(this.page === 0 && this.isFormValidOne) return false;
    if(this.page === 1 && this.isFormValidTwo) return false;
    if(this.page === 2 && this.isFormValidThree) return false;

    return true;
  }

  public test(): void {
    console.log(this.service.usersInfo);
    
  }
}
