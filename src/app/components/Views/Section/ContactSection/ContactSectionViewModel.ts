import { AppViewModel } from "@/app/viewmodels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormSubmissionStatus {
  type: 'success' | 'error';
  message: string;
}

export class ContactSectionViewModel {
  private appViewModel: AppViewModel;
  
  title: string = "Contact Me";
  subtitle: string = "Let's Connect";

  contactParagraphs: string[] = [
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    "Feel free to reach out using the form or through any of the provided contact methods. I look forward to hearing from you!"
  ];
  
  contactLinks = [
    { label: "brandon.ceemoe@gmail.com", url: "mailto:brandon.ceemoe@gmail.com", icon: "envelope" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bcalderonmorales-cmoe", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/bcalderonmorales", icon: "github" },
    { label: "Portfolio", url: "https://brandon-calderon-moralesportfolio.dev", icon: "globe" }
  ];

  formData: ContactFormData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting: boolean = false;
  formSubmissionStatus: FormSubmissionStatus | null = null;

  constructor(appViewModel: AppViewModel) {
    this.appViewModel = appViewModel;
    makeAutoObservable(this);
  }

  updateField = (field: keyof ContactFormData, value: string) => {
    this.formData[field] = value;
  };

  submitForm = async () => {
    this.isSubmitting = true;
    this.formSubmissionStatus = null;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful submission
      console.log('Form submitted:', this.formData);
      
      this.formSubmissionStatus = {
        type: 'success',
        message: 'Your message has been sent! I will get back to you soon.'
      };
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    } catch (error) {
      this.formSubmissionStatus = {
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      };
    } finally {
      this.isSubmitting = false;
    }
  };

  get isDarkMode(): boolean {
    return this.appViewModel.isDarkMode;
  }
}
