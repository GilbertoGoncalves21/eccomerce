import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  template: `
    <div class="dialog-content">
      {{ data.message }}
    </div>
  `,
  styles: [`
    .dialog-content {
      padding: 1rem 2rem;
      font-family: "Noto Sans Canadian Aboriginal", sans-serif;
      border-radius: 30px;
      font-size: 1.5rem;
    }
  `]
})
export class SimpleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
