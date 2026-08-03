import { Component, ElementRef, output, model, viewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ InputTextModule, ButtonModule ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})

export class TaskFormComponent {
  
  protected title = model('');

  readonly createTask = output<string>();

  protected inputElement =
        viewChild<ElementRef<HTMLInputElement>>(
            'taskInput'
        );

  protected addTask(): void {

    const value = this.title().trim();

    if (!value) {
      return;
    }

    this.createTask.emit(value);

    this.title.set('');

    this.inputElement()
        ?.nativeElement
        .focus();

  }

}