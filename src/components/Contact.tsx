import { useState, useRef } from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, SendIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import emailjs from '@emailjs/browser';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Hidden field to catch bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  // Input validation
  const validateForm = () => {
    if (!formState.name.trim()) {
      setErrorMessage('Name is required.');
      return false;
    }
    if (!formState.email.trim()) {
      setErrorMessage('Email is required.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formState.message.trim()) {
      setErrorMessage('Message is required.');
      return false;
    }
    if (formState.message.length < 10) {
      setErrorMessage('Message must be at least 10 characters long.');
      return false;
    }
    // Check honeypot field (should be empty)
    if (formState.honeypot) {
      setErrorMessage('Spam detected.');
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Check if EmailJS is configured
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS not configured. Please contact me directly at vsdev97@gmail.com');
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        message: '',
        honeypot: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setErrorMessage(error.text || error.message || 'Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Nature-themed decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-cover bg-bottom opacity-10" style={{
      backgroundImage: 'url(https://uploadthingy.s3.us-west-1.amazonaws.com/7Ks4bu9KZxtnPZ5ckRwwkq/Screenshot_2025-09-04_at_2.41.50_PM.png)'
    }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Reach out!" />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact information */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-600 p-8 h-full transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full transition-colors duration-300">
                    <MailIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">Email</h4>
                    <a href="mailto:vsdev97@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                      vsdev97@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full transition-colors duration-300">
                    <GithubIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      GitHub
                    </h4>
                    <a href="https://github.com/V3RS" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                      github.com/V3RS
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full transition-colors duration-300">
                    <LinkedinIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      LinkedIn
                    </h4>
                    <a href="https://www.linkedin.com/in/veerkaran-singh/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                      linkedin.com/in/veerkaran-singh
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/V3RS" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 p-3 rounded-full transition-colors duration-300" aria-label="GitHub">
                    <GithubIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/veerkaran-singh/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 p-3 rounded-full transition-colors duration-300" aria-label="LinkedIn">
                    <LinkedinIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-600 p-8 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
                Send Me a Message
              </h3>
              {submitStatus === 'success' ? <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg p-4 mb-6 transition-colors duration-300">
                  <p>✅ Thank you for your message! I'll get back to you soon.</p>
                </div> : submitStatus === 'error' ? <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg p-4 mb-6 transition-colors duration-300">
                  <p>
                    ❌ {errorMessage || 'There was an error sending your message. Please try again.'}
                  </p>
                </div> : null}
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required maxLength={100} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required maxLength={100} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-300" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleChange} required maxLength={1000} placeholder="Tell me about your project, collaboration idea, or just say hello!" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-300 resize-none"></textarea>
                  {/* Honeypot field - hidden from users */}
                  <input type="text" name="honeypot" value={formState.honeypot} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                </div>
                <button type="submit" disabled={isSubmitting} className={`flex items-center justify-center w-full md:w-auto px-6 py-3 bg-emerald-600 dark:bg-emerald-700 text-white font-medium rounded-md shadow-sm hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </> : <>
                      <SendIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}