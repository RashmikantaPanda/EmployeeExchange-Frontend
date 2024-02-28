import { Component } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private candidateService: CandidateService) { }


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  dateOfBirth: string = '';
  // gender: string = '';
  mobile: string = '';
  country: string = '';
  state: string = '';
  city: string = '';
  pincode: number | null = null;
  qualifications: any[] = [];

  addQualification() {
    this.qualifications.push({
      standard: '',
      board: '',
      institution: '',
      percentage: '',
      admissionYear: null,
      passoutYear: null
    });
  }

  removeQualification(index: number) {
    this.qualifications.splice(index, 1);
  }

  onSubmit() {
    const formData = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      // gender: this.gender,
      moblile: this.mobile,
      address: {
        street: 'A-55',
        city: this.city,
        state: this.state,
        country: this.country,
        pincode: this.pincode
      },
      qualifications: this.qualifications.map((qualification: any) => {
        return {
          standard: qualification.standard,
          institution: qualification.institutionName,
          stream: 'Science',
          board: qualification.board,
          percentage: qualification.percentage,
          admissionYear: qualification.admissionYear,
          passoutYear: qualification.passoutYear
        };
      })
    };

    console.log("Form DATA : " + formData);

    this.candidateService.registration(formData).subscribe((response: any) => {
      console.log('Registration successful!', response);
    });
  }
}
