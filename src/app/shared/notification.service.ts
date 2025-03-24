import { Injectable, signal } from '@angular/core';

// Marks this class as injectable and makes it available throughout the app.
// `providedIn: 'root'` means Angular will create a single shared instance (singleton).
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // Create a signal to hold the current message.
  // It can be a string (the message to display) or null (no message).
  private _message = signal<string | null>(null);

  // Expose a read-only version of the signal so components can subscribe to it
  // but can't directly modify the message.
  readonly message = this._message.asReadonly();

  // Show a message by setting the signal's value.
  // The message will automatically disappear after 3.5 seconds.
  show(msg: string) {
    this._message.set(msg); // Set the message

    // Clear the message after 3.5 seconds to hide the notification
    setTimeout(() => this._message.set(null), 3500);
  }
}
