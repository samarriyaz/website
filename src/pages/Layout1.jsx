import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/shared/Logo';
import Button from '../components/shared/Button';
import ContactForm from '../components/shared/ContactForm';
import { content } from '../data/content';

const Layout1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap = {
    clock: '⏰',
    heart: '❤️',
    home: '🏠',
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/">
            <Logo size="small" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('benefits')} className="text-text hover:text-primary transition">
              Benefits
            </button>
            <button onClick={() => scrollToSection('membership')} className="text-text hover:text-primary transition">
              Membership
            </button>
            <button onClick={() => scrollToSection('about')} className="text-text hover:text-primary transition">
              About
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-text hover:text-primary transition">
              Pricing
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="primary" size="small">
              Contact Us
            </Button>
          </div>

          {/* Mobile Contact */}
          <div className="md:hidden">
            <a href={`tel:${content.business.phone}`} className="text-primary font-semibold">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {content.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white text-opacity-95">
            {content.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="large" onClick={() => scrollToSection('contact')}>
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

          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center text-white text-opacity-90">
            <a href={`tel:${content.business.phone}`} className="flex items-center gap-2 hover:text-secondary transition">
              <span className="text-2xl">📞</span>
              <span className="text-lg font-medium">{content.business.phone}</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a href={`mailto:${content.business.email}`} className="flex items-center gap-2 hover:text-secondary transition">
              <span className="text-2xl">✉️</span>
              <span className="text-lg font-medium">{content.business.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            {content.valueProposition.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {content.valueProposition.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6">{iconMap[benefit.icon]}</div>
                <h3 className="text-2xl font-bold text-text mb-4">{benefit.title}</h3>
                <p className="text-lg text-text-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="membership" className="py-20 bg-neutral-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            {content.membershipBenefits.title}
          </h2>
          <p className="text-xl text-center text-text-light mb-12">
            {content.membershipBenefits.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {content.membershipBenefits.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-500 text-2xl flex-shrink-0">✓</span>
                <p className="text-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Riaz */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            Meet Your Physician
          </h2>

          <div className="bg-neutral rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary mb-2">{content.aboutDoctor.name}</h3>
            <p className="text-lg text-secondary mb-6">{content.aboutDoctor.credentials}</p>

            <div className="space-y-4 text-text-light leading-relaxed">
              {content.aboutDoctor.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-8 p-6 bg-white rounded-lg border-l-4 border-secondary italic text-text">
              "{content.aboutDoctor.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-primary bg-opacity-5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
              {content.pricing.title}
            </h2>
            <p className="text-xl text-text-light">{content.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 text-center ${plan.featured ? 'ring-4 ring-secondary' : ''
                  }`}
              >
                {plan.featured && (
                  <div className="bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                <p className="text-text-light mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-text-light">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
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
          <Logo size="medium" className="mb-6 justify-center" />
          <p className="text-lg mb-2">{content.business.phone}</p>
          <p className="text-lg mb-6">{content.business.email}</p>
          <p className="text-sm opacity-75">
            © 2025 Integrative Wellness Partners. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout1;
