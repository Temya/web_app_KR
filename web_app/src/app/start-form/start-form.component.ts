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
import { Reservation, UserInfo } from '../user-info';
import { Router } from '@angular/router';

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

  constructor(public readonly service: BackendService, private readonly cdr: ChangeDetectorRef, private readonly route: Router) {}

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
    this.service.addReservation(this.transformationDateToString(this.service.usersInfo as UserInfo)).subscribe((res) => console.log(res)
    )
  }

  public transformationDateToString(User: UserInfo): Reservation {
    const reserv = {
      arrivalDate: this.convertDateFormat(String(User.arrivalDate)),
      departureDate: this.convertDateFormat(String(User.departureDate)),
      guestCount: User.countOfGuests,
      guests: User.users,
      roomType: User.typeRoom
    }
    return reserv
  }

  public convertDateFormat(dateString: string): string {
    const parts = dateString.split('.');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  public getValidity(): boolean {
    if(this.page === 0 && this.isFormValidOne) return false;
    if(this.page === 1 && this.isFormValidTwo) return false;
    if(this.page === 2 && this.isFormValidThree) return false;

    return true;
  }

  public getToTable(): void {
    this.route.navigateByUrl("/table")
  }
}
