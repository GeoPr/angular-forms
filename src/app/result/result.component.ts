import { Router } from '@angular/router';
import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  userData = Object.entries(this.userDataService.userData);
  mainData = this.userData.filter(([key]) => key !== 'files');
  files = this.userDataService.userData.files;

  constructor(public userDataService: UserDataService, public router: Router) {}

  ngOnInit(): void {}

  onClick() {
    Swal.fire({
      title: 'Thanks a lot ✨',
      text: 'Bye bye 🤚',
      icon: 'success',
      timer: 3000,
    });
    this.userDataService.setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phone: null,
      files: null,
    });
    this.router.navigate(['/']);
  }
}
