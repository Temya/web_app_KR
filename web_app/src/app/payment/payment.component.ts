import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule, TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    FormsModule,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  public form: FormGroup;

  public type: String | null = null;  
  public readonly types: readonly String[] = [
     'Кредитная карта',
     'Дебетовая карта',
     'Наличные'
  ];

  constructor(private readonly fb: FormBuilder){
    this.form = this.fb.group({
			numberCard: this.fb.control("", Validators.required),
      cvv: this.fb.control("", Validators.required),
      dateEnd: this.fb.control("", Validators.required),
      paymentMethod: this.fb.control("Способ оплаты", Validators.required),
		});
  }
}
