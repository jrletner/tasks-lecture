import { Component, computed, inject } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  // constructor(private notificationService = NotificationService){}
  private notificationService = inject(NotificationService);
  message = computed(() => this.notificationService.message());
}
