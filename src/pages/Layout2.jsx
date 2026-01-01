import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/shared/Logo';
import Button from '../components/shared/Button';
import ContactForm from '../components/shared/ContactForm';
import { content } from '../data/content';

const Layout2 = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'membership', label: 'Membership' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sticky Sidebar Navigation - Desktop Only */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-primary lg:text-white">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div className="flex items-center h-20 px-6 bg-primary-dark">
            <Link to="/">
              <Logo size="small" className="brightness-0 invert" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-white bg-opacity-20 font-semibold'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="px-6 py-6 border-t border-white border-opacity-20 text-sm space-y-2">
            <a
              href={`tel:${content.business.phone}`}
              className="flex items-center gap-2 hover:text-secondary transition"
            >
              <span>📞</span>
              <span>{content.business.phone}</span>
            </a>
            <a
              href={`mailto:${content.business.email}`}
              className="flex items-center gap-2 hover:text-secondary transition"
            >
              <span>✉️</span>
              <span className="text-xs">{content.business.email}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/">
            <Logo size="small" className="brightness-0 invert" />
          </Link>
          <a
            href={`tel:${content.business.phone}`}
            className="text-secondary font-semibold"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Main Content - Offset by sidebar on desktop */}
      <main className="flex-1 lg:ml-64">
        {/* Hero Section - Split Screen */}
        <section
          id="hero"
          className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-accent lg:pt-0 pt-20"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {content.hero.headline}
                </h1>
                <p className="text-xl mb-8 text-white text-opacity-95">
                  {content.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="secondary"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                  >
                    {content.hero.cta}
                  </Button>
                  <Button
                    variant="outline"
                    size="large"
                    onClick={() => scrollToSection('pricing')}
                    className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
                  >
                    {content.hero.ctaSecondary}
                  </Button>
                </div>
              </div>

              {/* Right: Visual Element */}
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-6">🏥</div>
                    <h3 className="text-2xl font-bold mb-4">Concierge Medicine</h3>
                    <p className="text-lg text-white text-opacity-90">
                      Direct access to your physician, anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition - Alternating Layout */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
              {content.valueProposition.title}
            </h2>

            {content.valueProposition.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center mb-16 last:mb-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon/Visual Side */}
                <div
                  className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-light to-accent flex items-center justify-center">
                    <span className="text-9xl">
                      {benefit.icon === 'clock' && '⏰'}
                      {benefit.icon === 'heart' && '❤️'}
                      {benefit.icon === 'home' && '🏠'}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-xl text-text-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Benefits - Split Design */}
        <section id="membership" className="py-20 bg-neutral-light">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Heading and Subtitle */}
              <div className="lg:sticky lg:top-8 lg:self-start">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {content.membershipBenefits.title}
                </h2>
                <p className="text-xl text-text-light mb-8">
                  {content.membershipBenefits.subtitle}
                </p>
                <div className="hidden lg:block p-6 bg-primary text-white rounded-2xl">
                  <p className="text-lg font-semibold mb-2">Ready to join?</p>
                  <p className="mb-4">
                    Get started with comprehensive concierge care today.
                  </p>
                  <Button
                    variant="secondary"
                    size="medium"
                    fullWidth
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Right: Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {content.membershipBenefits.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                    <p className="text-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Dr. Riaz - Split Design */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Visual */}
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    <div className="text-9xl mb-6">👩‍⚕️</div>
                    <p className="text-2xl font-bold">
                      {content.aboutDoctor.credentials}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Meet Your Physician
                </h2>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  {content.aboutDoctor.name}
                </h3>

                <div className="space-y-4 text-text-light leading-relaxed mb-6">
                  {content.aboutDoctor.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <blockquote className="p-6 bg-neutral rounded-lg border-l-4 border-secondary italic text-text">
                  "{content.aboutDoctor.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Split Cards */}
        <section id="pricing" className="py-20 bg-primary bg-opacity-5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {content.pricing.title}
              </h2>
              <p className="text-xl text-text-light">{content.pricing.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {content.pricing.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${
                    plan.featured ? 'ring-4 ring-secondary lg:scale-105' : ''
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-secondary text-white text-center py-2 font-bold">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-text-light mb-6">{plan.description}</p>

                    <div className="mb-8">
                      <span className="text-6xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-text-light text-xl">
                        /{plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-500 text-xl flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-text-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.featured ? 'secondary' : 'primary'}
                      size="large"
                      fullWidth
                      onClick={() => scrollToSection('contact')}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-text-light mt-8 text-lg">
              {content.pricing.guarantee}
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <Logo size="medium" className="mb-6 justify-center brightness-0 invert" />
            <p className="text-lg mb-2">{content.business.phone}</p>
            <p className="text-lg mb-6">{content.business.email}</p>
            <p className="text-sm opacity-75">
              © 2025 Integrative Wellness Partners. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout2;
