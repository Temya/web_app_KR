import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TuiButton } from '@taiga-ui/core';
import { Guests, Reservation } from '../user-info';
import { DateFormatPipe } from '../date-format.pipe';

@Component({
  selector: 'app-table-of-information',
  standalone: true,
  imports: [
    CommonModule,
    TuiButton,
    DateFormatPipe
  ],
  templateUrl: './table-of-information.component.html',
  styleUrl: './table-of-information.component.scss'
})
export class TableOfInformationComponent {
  public allInfo?: Reservation[];
  public selectedReserv?: Guests[];

  protected readonly columns = this.allInfo ? Object.keys(this.allInfo[0]) : null;

  constructor(private readonly service: BackendService, private readonly route: Router) {
    this.service.getAllReservations()
    .subscribe((res) => this.allInfo = res);
  }

  public selectParam(selected: number): void {
    if(this.allInfo) this.selectedReserv = this.allInfo[selected].guests;
  }


  public getToStart(): void {
    this.route.navigateByUrl("/");
  }
}
