import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      // Other form controls
      qualifications: this.fb.array([]),
    });
  }

  get qualificationForms() {
    return this.registrationForm.get('qualifications') as FormArray;
  }

  addQualification() {
    const qualification = this.fb.group({
      standard: ['', Validators.required],
      board: ['', Validators.required],
      institutionName: ['', Validators.required],
      percentage: ['', Validators.required],
      admissionYear: ['', Validators.required],
      passoutYear: ['', Validators.required],
    });

    this.qualificationForms.push(qualification);
  }

  removeQualification(index: number) {
    this.qualificationForms.removeAt(index);
  }

  onSubmit() {
    // Handle form submission
  }
}
