import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  fb = inject(FormBuilder);

  contactForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]
    ],

    subject: [
      '',
      [
        Validators.required,
        Validators.maxLength(120)
      ]
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.maxLength(1000)
      ]
    ]
  });

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);

    const { email, subject, message } = this.contactForm.getRawValue();

    // Encode to make sure special characters work
    const mailtoLink = `mailto:sales@becontrol-sy.com?subject=${encodeURIComponent(<string>subject)}&body=${encodeURIComponent(
      `From: ${email}\n\n${message}`
    )}`;
  
    // Open the user's email client
    window.location.href = mailtoLink;
  } 
}
