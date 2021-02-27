import { Router } from '@angular/router';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  files: File[] | null = null;

  constructor(public userDataService: UserDataService, public router: Router) {}

  ngOnInit(): void {}

  onUpload() {
    this.userDataService.setUserData({
      ...this.userDataService.userData,
      files: this.files,
    });
    this.router.navigate(['/result']);
  }

  onChange(e: any) {
    this.files = [...e.target.files];
  }
}
