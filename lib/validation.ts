export function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
}

export function validateName(name: string): string | null {
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters long';
  }
  if (name.trim().length > 50) {
    return 'Name cannot be more than 50 characters';
  }
  return null;
}

export function validateSubject(subject: string): string | null {
  if (subject.trim().length < 3) {
    return 'Subject must be at least 3 characters long';
  }
  if (subject.trim().length > 100) {
    return 'Subject cannot be more than 100 characters';
  }
  return null;
}

export function validateMessage(message: string): string | null {
  if (message.trim().length < 10) {
    return 'Message must be at least 10 characters long';
  }
  if (message.trim().length > 5000) {
    return 'Message cannot be more than 5000 characters';
  }

  // Check for spam patterns
  const spamPatterns = [
    /viagra|cialis|casino|poker|lottery/i,
    /click here|buy now|limited offer/i,
  ];

  for (const pattern of spamPatterns) {
    if (pattern.test(message)) {
      return 'Message appears to contain spam content';
    }
  }

  return null;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const subjectError = validateSubject(data.subject);
  if (subjectError) errors.subject = subjectError;

  const messageError = validateMessage(data.message);
  if (messageError) errors.message = messageError;

  return errors;
}
