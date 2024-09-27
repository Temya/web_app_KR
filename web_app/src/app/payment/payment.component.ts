import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule, TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { BackendService } from '../backend.service';

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
  @Output() formValidityThree = new EventEmitter<boolean>();

  public form: FormGroup;

  public type: String | null = null;  
  public readonly types: readonly String[] = [
     'Кредитная карта',
     'Дебетовая карта',
     'Наличные'
  ];

  private readonly destroy = inject(DestroyRef);

  constructor(private readonly fb: FormBuilder, private readonly service: BackendService){
    this.form = this.fb.group({
			numberCard: this.fb.control("", Validators.required),
      cvv: this.fb.control("", Validators.required),
      dateEnd: this.fb.control("", Validators.required),
      paymentMethod: this.fb.control("Способ оплаты", Validators.required),
		});

    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(data => {
        this.service.usersInfo = {...this.service.usersInfo, ...data};
        this.formValidityThree.emit(this.form.valid);      
      });
  }
}
