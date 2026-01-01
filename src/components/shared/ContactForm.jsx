import React, { useState } from 'react';
import { content } from '../../data/content';
import Button from './Button';

const ContactForm = ({ layout = 'default' }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Netlify
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const { contactForm } = content;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          {contactForm.title}
        </h2>
        <p className="text-lg text-text-light">
          {contactForm.subtitle}
        </p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formState.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Membership Type */}
        <div>
          <label htmlFor="membershipType" className="block text-sm font-medium text-text mb-2">
            I'm Interested In *
          </label>
          <select
            name="membershipType"
            id="membershipType"
            required
            value={formState.membershipType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select an option</option>
            <option value="individual">Individual Membership</option>
            <option value="family">Family Membership</option>
            <option value="learning">Just Learning More</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
            Message (Optional)
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formState.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" size="large" fullWidth>
          {contactForm.submitText}
        </Button>

        {/* Success Message */}
        {submitted && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center font-medium">
              {contactForm.successMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
