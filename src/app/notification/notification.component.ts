import { Component, computed, inject } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
@Component({
  selector: 'app-notification',
  standalone: false,  //<---We made this component not Standalone to import it into our shared Module.
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  // Injecting the NotificationService using the inject() function (Angular's new functional DI).
  private notificationService = inject(NotificationService);

  // Alternatively, we could use constructor injection:
// constructor(private notificationService: NotificationService) {}

  // below we will create a computed signal saved into the message property as a es6 function to run message().
  message = computed(() => this.notificationService.message());
}
