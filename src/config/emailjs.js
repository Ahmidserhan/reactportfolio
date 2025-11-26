// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and login
// 2. Go to Email Templates and edit your template (template_pzvfshd)
// 3. In your template, use these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email  
//    - {{reply_to}} - for reply-to field (set this in EmailJS template settings)
//    - {{message}} - message content
//    - {{to_name}} - recipient name
//    - {{subject}} - dynamic subject line
// 4. IMPORTANT: In EmailJS template settings, set "Reply-To" field to {{reply_to}}
// 5. This way when you reply, it goes directly to the sender's email
