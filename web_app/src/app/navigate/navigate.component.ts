import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [TuiButton],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.scss'
})
export class NavigateComponent {

  constructor(private readonly route: Router) {}

  public getToTable(): void {
    this.route.navigateByUrl("/table")
  }

  public getToMain(): void {
    this.route.navigateByUrl("/")
  }

  public getToNumbers(): void {
    this.route.navigateByUrl("/numbers")
  }

  public getToReservation(): void {
    this.route.navigateByUrl("/reservation")
  }
}
