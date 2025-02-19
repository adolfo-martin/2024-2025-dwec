import { computed, effect, Injectable, signal } from '@angular/core';
import { delay, EMPTY, Observable } from 'rxjs';

type AuthStatusT = {
  isLoading: boolean,
  isLogged: boolean,
  token: string | undefined,
  username: string | undefined,
  firstname: string | undefined,
  lastname: string | undefined,
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private authStatus = signal<AuthStatusT>({
    isLoading: false,
    isLogged: false,
    token: undefined,
    username: undefined,
    firstname: undefined,
    lastname: undefined,
  });

  public readonly isLogged = computed(() => this.authStatus().isLogged);
  public readonly isLoading = computed(() => this.authStatus().isLoading);
  public readonly username = computed(() => this.authStatus().username);
  public readonly fullname = computed(() => `${this.authStatus().firstname} ${this.authStatus().lastname}`);

  
  constructor() {
    effect(() => console.log('authStatus: ', this.authStatus()));

    // setTimeout(() => {
    //   this.authStatus.set({
    //     isLoading: false,
    //     isLogged: true,
    //     token: undefined,
    //     username: 'adolfo.martin',
    //     firstname: 'Adolfo',
    //     lastname: 'Martín',
    //   });
    // }, 5000);
  }

  public closeSession() {
    this.authStatus.update(status => ({
      ...status,
      isLogged: false,
      username: undefined,
      firstname: undefined,
      lastname: undefined,
    }));
  }

  public openSession(username: string, password: string): void {
    this.authStatus.update(status => ({
      ...status,
      isLoading: true,
    }));

    if (username === 'adolfo.martin' && password === 'Hola1234') {
      setTimeout(() => {
        this.authStatus.update(status => ({
          ...status,
          isLoading: false,
          isLogged: true,
          username: 'adolfo.martin',
          firstname: 'Adolfo',
          lastname: 'Martín',
        }));
      }, 5000);
    } else {
      setTimeout(() => {
        this.authStatus.update(status => ({
          ...status,
          isLoading: false,
        }));
      }, 5000);
    }
  }

}
