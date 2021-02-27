import { UserDataService } from './../../services/user-data.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  hasPhone = false;
  formData = new FormBuilder().group({
    email: new FormControl(this.userDataService.userData.email, [
      Validators.required,
    ]),
    phone: new FormControl(this.userDataService.userData.phone ?? ''),
  });

  constructor(
    public userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.userDataService.userData.email);
  }

  onSubmit() {
    const { value, valid } = this.formData;

    this.userDataService.setUserData({
      ...this.userDataService.userData,
      ...value,
    });

    if (valid) {
      this.router.navigate(['/step3']);
    }
  }
}
