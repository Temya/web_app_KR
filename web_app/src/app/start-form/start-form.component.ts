import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {TuiInputModule, TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {TuiButton} from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { ClientsInfoComponent } from '../clients-info/clients-info.component';

@Component({
  selector: 'app-start-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButton,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    FormsModule,
    ClientsInfoComponent
  ],
  templateUrl: './start-form.component.html',
  styleUrl: './start-form.component.scss'
})
export class StartFormComponent {

  public type: String | null = null;
  public form: FormGroup;
  
  public readonly types: readonly String[] = [
     'Эконом',
     'Комфорт',
     'Комфорт +',
     'Премиум',
     'Прездидентский Люкс',
  ];

  constructor(private readonly fb: FormBuilder){
    this.form = this.fb.group({
			arrivalDate: this.fb.control("", Validators.required),
      departureDate: this.fb.control("", Validators.required),
      countOfGuests: this.fb.control("", Validators.required),
      typeRoom: this.fb.control("Выберите тип номера", Validators.required),
		});
  }

  public test(): void {
    console.log(this.form.get("typeRoom")?.value);
  }
}
