import { Injectable } from '@angular/core';

interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  files?: File[] | null;
}

@Injectable({ providedIn: 'root' })
export class UserDataService {
  userData: IUserData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: null,
    files: null,
  };

  setUserData(newData: IUserData) {
    this.userData = newData;
  }
}
