import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/legacy';
import { BackendService } from '../backend.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-clients-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
  ],
  templateUrl: './clients-info.component.html',
  styleUrl: './clients-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsInfoComponent {
  @Output() formValidityTwo = new EventEmitter<boolean>();

  public form: FormGroup;

  private readonly destroy = inject(DestroyRef);

  constructor(private readonly fb: FormBuilder, private readonly service: BackendService){
    this.form = this.fb.group({
			users: this.fb.array([])
		});
    if(this.service.usersInfo?.countOfGuests) {
      for(let i = 0; i < this.service.usersInfo?.countOfGuests; i++) {
        this.addClient();
      }
    }

    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(data => {
        this.service.usersInfo = {...this.service.usersInfo, ...data};        
        this.formValidityTwo.emit(this.form.valid);
      });
  }

  addClient(): void {
    const clientGroup = this.fb.group({
      clientName: ['', Validators.required],
      clientLastName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientPhoneNumber: ['', Validators.required]
    });
    this.users.push(clientGroup);
  }

  public get users(): FormArray {
    return this.form.get("users") as FormArray;
  }

  public get formValid(): boolean {
    return this.form.valid
  }
}
