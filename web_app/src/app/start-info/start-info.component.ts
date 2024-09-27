import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputDateModule, TuiInputModule, TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { BackendService } from '../backend.service';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-start-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiInputDateModule
  ],
  templateUrl: './start-info.component.html',
  styleUrl: './start-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartInfoComponent {
  @Output() formValidity = new EventEmitter<boolean>();
  
  public form: FormGroup;
  
  public readonly types: readonly String[] = [
     'Эконом',
     'Комфорт',
     'Комфорт +',
     'Премиум',
     'Прездидентский Люкс',
  ];

  private readonly destroy = inject(DestroyRef);

  constructor(private readonly fb: FormBuilder, private readonly service: BackendService){
    this.form = this.fb.group({
			arrivalDate: this.fb.control(null, Validators.required),
      departureDate: this.fb.control(null, Validators.required),
      countOfGuests: this.fb.control(null, [Validators.required, Validators.max(6), Validators.min(1)]),
      typeRoom: this.fb.control("Выберите тип номера", Validators.required),
		});

    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(data => {
        this.service.usersInfo = {...this.service.usersInfo, ...data};
        this.formValidity.emit(this.form.valid);       
      });
  }
}
