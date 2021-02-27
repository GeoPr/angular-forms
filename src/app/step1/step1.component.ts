import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const validators = [Validators.required, Validators.pattern(/^[A-Za-z]+$/)];

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  formData = new FormBuilder().group({
    firstName: new FormControl(
      this.userDataService.userData.firstName,
      validators
    ),
    lastName: new FormControl(
      this.userDataService.userData.lastName,
      validators
    ),
  });

  constructor(
    public userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { value, valid } = this.formData;

    this.userDataService.setUserData({
      ...this.userDataService.userData,
      ...value,
    });

    if (valid) {
      this.router.navigate(['/step2']);
    }
  }
}
