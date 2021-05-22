import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-story',
  templateUrl: './submit-story.component.html',
  styleUrls: ['./submit-story.component.scss'],
})
export class SubmitStoryComponent implements OnInit {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    title: ['', Validators.required],
    content: ['', Validators.required],
    tags: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('form submitted');
  }
}
