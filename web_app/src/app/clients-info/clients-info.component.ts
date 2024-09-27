import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-clients-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
  ],
  templateUrl: './clients-info.component.html',
  styleUrl: './clients-info.component.scss'
})
export class ClientsInfoComponent {

  public form: FormGroup;

  constructor(private readonly fb: FormBuilder){
    this.form = this.fb.group({
			users: this.fb.array([])
		});
    for(let i = 0; i < 6; i++) {
      this.addClient();
    }
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
}
