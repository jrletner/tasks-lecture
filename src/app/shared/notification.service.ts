import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _message = signal<string | null>(null);

  readonly message = this._message.asReadonly();

  show(msg: string) {
    this._message.set(msg);
    // Auto-clear after 3 seconds
    setTimeout(() => this._message.set(null), 3500);
  }
}
