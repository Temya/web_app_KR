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
  public isFormValid?: boolean;
  public page = 0;

  constructor(private readonly service: BackendService, private readonly cdr: ChangeDetectorRef) {}

  public handleFormValidity(validity: boolean) {
    this.isFormValid = validity;
  }

  public nextPage(): void {
    if(this.isFormValid) {
      if(this.page < 2) this.page++;
    }    
  }

  public pastPage(): void {
    if(this.page > 0) this.page--;
  }

  public finish(): void {

  }
}
