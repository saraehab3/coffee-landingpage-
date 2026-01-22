
// import { Component ,OnInit} from '@angular/core';
// import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-contact',
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './contact.html',
//   styleUrl: './contact.scss',
// })
// export class Contact {
// // form = this.createForm();

// constructor(private fb: FormBuilder) {}

// private createForm() {
//   return this.fb.group({
//     name: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     message: ['', Validators.required]
//   });
// }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
    standalone: true,
      imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
}
