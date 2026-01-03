import React, { useState } from 'react';
import '../styles/Layout3.css';

const Layout3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xbdlyywa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Membership Request from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <div className="layout3-container">
      <nav className="layout3-nav">
        <div className="layout3-nav-container">
          <div className="layout3-logo-container">
            <img src="/IWP-LOGO.png" alt="Integrative Wellness Partners" className="layout3-logo-image" />
          </div>
          <ul className="layout3-nav-menu">
            <li><a href="#approach" onClick={(e) => { e.preventDefault(); scrollToSection('approach'); }}>Our Approach</a></li>
            <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Our Team</a></li>
            <li><a href="https://us.fullscript.com/welcome/iwellnesspartners" target="_blank" rel="noopener noreferrer">Supplements</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Connect</a></li>
          </ul>
        </div>
      </nav>

      <section className="layout3-hero">
        <div className="layout3-hero-content">
          <div className="layout3-hero-eyebrow">Concierge Medicine</div>
          <h1>
            Medicine as it was<br />
            <em>meant to be</em>
          </h1>
          <p className="layout3-hero-description">
            A return to the fundamentals of healthcare: time, attention, and a physician who truly knows you.
            Our concierge practice offers exclusive access to integrative medicine designed around your life.
          </p>
          <button className="layout3-hero-cta" onClick={() => scrollToSection('contact')}>
            Request Membership
          </button>
        </div>
        <div className="layout3-hero-visual">
          <img src="/IWP-LOGO.png" alt="DNA Helix - Integrative Wellness Partners" className="layout3-hero-visual-logo" />
        </div>
      </section>

      <section className="layout3-quote-section">
        <div className="layout3-quote-container">
          <blockquote className="layout3-quote">
            "I want my patients to feel empowered and in control of their health.
            My plans are focused on setting them up for success."
          </blockquote>
          <p className="layout3-quote-attribution">Dr. Samar Riaz, NMD</p>
        </div>
      </section>

      <section className="layout3-services" id="approach">
        <div className="layout3-section-header">
          <div className="layout3-section-label">What's Included</div>
          <h2 className="layout3-section-title">A Complete Approach to Your Wellness</h2>
          <p className="layout3-section-description">
            Every aspect of our service is designed to prioritize your convenience, health, and peace of mind.
          </p>
        </div>

        <div className="layout3-services-grid">
          <div className="layout3-service-card">
            <div className="layout3-service-number">01</div>
            <div className="layout3-service-content">
              <h3 className="layout3-service-title">Always Available</h3>
              <p className="layout3-service-description">
                24/7 direct communication with your physician and care team. We're here when you need us.
              </p>
            </div>
          </div>

          <div className="layout3-service-card">
            <div className="layout3-service-number">02</div>
            <div className="layout3-service-content">
              <h3 className="layout3-service-title">Specialist Navigation</h3>
              <p className="layout3-service-description">
                We coordinate all referrals and accompany you to appointments—virtually or in person—at your request.
              </p>
            </div>
          </div>

          <div className="layout3-service-card">
            <div className="layout3-service-number">03</div>
            <div className="layout3-service-content">
              <h3 className="layout3-service-title">Immediate Care</h3>
              <p className="layout3-service-description">
                Same-day and next-day appointments. Telehealth available wherever you are, including out of state.
              </p>
            </div>
          </div>

          <div className="layout3-service-card">
            <div className="layout3-service-number">04</div>
            <div className="layout3-service-content">
              <h3 className="layout3-service-title">Prevention First</h3>
              <p className="layout3-service-description">
                Comprehensive treatment plans with regular blood work every 6-12 weeks, plus personalized recommendations for diet, supplements, and lifestyle choices.
              </p>
            </div>
          </div>

          <div className="layout3-service-card">
            <div className="layout3-service-number">05</div>
            <div className="layout3-service-content">
              <h3 className="layout3-service-title">Your Location</h3>
              <p className="layout3-service-description">
                All services delivered where you're most comfortable—from blood draws to x-rays, we come to you.
              </p>
            </div>
          </div>

          <div className="layout3-service-card">
            <div className="layout3-service-number">06</div>
            <div className="layout3-service-content">
              <h3 className="layout3-service-title">Family Care</h3>
              <p className="layout3-service-description">
                Well-child checks, well-women exams, minor procedures, and sports physicals for the entire family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="layout3-team" id="team">
        <div className="layout3-team-header">
          <h2 className="layout3-section-title">Our Team</h2>
          <p className="layout3-section-description">
            Meet the dedicated professionals committed to your health and wellbeing.
          </p>
        </div>

        <div className="layout3-team-members">
          {/* Dr. Samar Riaz */}
          <div className="layout3-team-member">
            <div className="layout3-team-member-image-wrapper">
              <img src="/dr-riaz-profile.jpeg" alt="Dr. Samar Riaz, NMD" className="layout3-team-member-image" />
            </div>
            <div className="layout3-team-member-content">
              <h3 className="layout3-team-member-name">Dr. Samar Riaz</h3>
              <p className="layout3-team-member-credentials">NMD</p>
              <p className="layout3-team-member-quote">
                "Being a strong advocate for my patients and going above and beyond for their well-being."
              </p>
              <div className="layout3-team-member-bio">
                <p>
                  Dr. Riaz's journey into naturopathic medicine began with a profound realization during her undergraduate
                  studies: the medical system was failing young patients who lacked access to preventative care. After
                  witnessing young diabetic patients admitted for preventable complications, she knew there had to be a better way.
                </p>
                <p>
                  <strong>Integrative medicine became that answer.</strong> It offered the best of both worlds—the ability
                  to focus on diet, exercise, and mental health while maintaining the credentials to prescribe medications
                  when needed. This approach allows her to provide truly comprehensive care.
                </p>
                <p>
                  Her philosophy centers on <strong>informed consent and patient empowerment</strong>. Whether supporting
                  a breast cancer patient's decision to take hormone blockers or helping families navigate developmental
                  health challenges, Dr. Riaz provides options and respects autonomy.
                </p>
                <p>
                  Patients consistently describe feeling heard and respected. Her years working with children with
                  developmental disorders have taught her to provide compassionate care to those who may be fearful.
                  Her unique perspective—informed by her husband's decade-long career as a professional MMA fighter—has
                  deepened her ability to care for patients under immense pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Maggie Young */}
          <div className="layout3-team-member">
            <div className="layout3-team-member-image-wrapper">
              <img src="/maggie-young-profile.jpeg" alt="Maggie Young, RN, BSN" className="layout3-team-member-image" />
            </div>
            <div className="layout3-team-member-content">
              <h3 className="layout3-team-member-name">Maggie Young</h3>
              <p className="layout3-team-member-credentials">RN, BSN</p>
              <div className="layout3-team-member-bio">
                <p>
                  Maggie is an Arizona native with a passion for building meaningful connections with her patients. She earned
                  her Bachelor of Science in Public Health from the University of Hawaii and her Bachelor of Science in Nursing
                  from Creighton University.
                </p>
                <p>
                  What drew Maggie to nursing was her love of helping others and the opportunity to truly get to know her patients.
                  She believes that strong relationships are at the heart of great care.
                </p>
                <p>
                  Outside of work, Maggie enjoys spending time with friends and family and coaches cheerleading at a local high school.
                </p>
              </div>
            </div>
          </div>

          {/* Dawn Williams */}
          <div className="layout3-team-member">
            <div className="layout3-team-member-image-wrapper">
              <img src="/dawn-williams-profile.jpeg" alt="Dawn Williams, Medical Office Coordinator" className="layout3-team-member-image" />
            </div>
            <div className="layout3-team-member-content">
              <h3 className="layout3-team-member-name">Dawn Williams</h3>
              <p className="layout3-team-member-credentials">Medical Office Coordinator</p>
              <div className="layout3-team-member-bio">
                <p>
                  Dawn is the Medical Office Coordinator at Integrative Wellness Partners, specializing in accounting and human resources.
                  She's known for helping patients and colleagues achieve the best possible results efficiently and with care.
                </p>
                <p>
                  Dawn's passion for healthcare is deeply personal. Growing up with a mother who lived with Multiple Sclerosis sparked her
                  desire to support others facing health challenges. She participates in the MS Walk annually and makes personal donations
                  throughout the year—a commitment that remains close to her heart, especially when she reflects on how far treatment has
                  come since her mother's diagnosis in the 1970s.
                </p>
                <p>
                  Outside of work, Dawn is a devoted dog lover and advocate for animal welfare. She also prioritizes her own wellness through
                  yoga and water aerobics, which keep her feeling balanced and ready to take on whatever challenges come her way.
                </p>
              </div>
            </div>
          </div>

          {/* Jay Bhatnagar */}
          <div className="layout3-team-member">
            <div className="layout3-team-member-image-wrapper">
              <img src="/jay-bhatnagar-profile.jpeg" alt="Jay Bhatnagar, Medical Scribe" className="layout3-team-member-image" />
            </div>
            <div className="layout3-team-member-content">
              <h3 className="layout3-team-member-name">Jay Bhatnagar</h3>
              <p className="layout3-team-member-credentials">Medical Scribe</p>
              <div className="layout3-team-member-bio">
                <p>
                  Jay provides essential support to our medical team, ensuring accurate and thorough documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout3-contact" id="contact">
        <div className="layout3-contact-container">
          <h2>Let's Begin</h2>
          <div className="layout3-contact-grid">
            <div className="layout3-contact-item">
              <div className="layout3-contact-label">Call</div>
              <div className="layout3-contact-value">
                <a href="tel:480.508.7050">480.508.7050</a>
              </div>
            </div>
            <div className="layout3-contact-item">
              <div className="layout3-contact-label">Email</div>
              <div className="layout3-contact-value">
                <a href="mailto:Info@iwellnesspartners.com">Info@iwellnesspartners.com</a>
              </div>
            </div>
            <div className="layout3-contact-item">
              <div className="layout3-contact-label">Address</div>
              <div className="layout3-contact-value">
                <a href="https://maps.google.com/?q=2375+E+Camelback+Road+Ste+600,+Phoenix,+Arizona+85016" target="_blank" rel="noopener noreferrer">
                  2375 E Camelback Road<br />Ste 600<br />Phoenix, Arizona 85016
                </a>
              </div>
            </div>
            <div className="layout3-contact-item">
              <div className="layout3-contact-label">Fax</div>
              <div className="layout3-contact-value">
                <a href="tel:855.535.9242">855.535.9242</a>
              </div>
            </div>
          </div>

          <form className="layout3-contact-form" onSubmit={handleSubmit}>
            <h3 className="layout3-form-title">Request Membership</h3>
            <p className="layout3-form-description">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <div className="layout3-form-row">
              <div className="layout3-form-group">
                <label htmlFor="name" className="layout3-form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="layout3-form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="layout3-form-group">
                <label htmlFor="email" className="layout3-form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="layout3-form-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="layout3-form-group">
              <label htmlFor="phone" className="layout3-form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="layout3-form-input"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="layout3-form-group">
              <label htmlFor="message" className="layout3-form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="layout3-form-textarea"
                placeholder="Tell us about your healthcare goals and any questions you may have..."
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="layout3-form-submit"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Submit Request'}
            </button>

            {formStatus === 'success' && (
              <p className="layout3-form-message layout3-form-success">
                Thank you for your message! We'll be in touch soon.
              </p>
            )}

            {formStatus === 'error' && (
              <p className="layout3-form-message layout3-form-error">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>

          <p className="layout3-contact-note">
            We look forward to building a lasting relationship focused on your optimal health.
          </p>
        </div>
      </section>

      <footer className="layout3-footer">
        <div className="layout3-footer-container">
          <img src="/IWP-LOGO.png" alt="Integrative Wellness Partners" className="layout3-footer-logo" />
          <div className="layout3-footer-supplements">
            <a href="https://us.fullscript.com/welcome/iwellnesspartners?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_dark_728x90.svg&signup_source=website_buttons" target="_top">
              <img src="https://assets.fullscript.com/buttons/dark_728x90.svg" alt="Order supplements through my Fullscript store." />
            </a>
          </div>
          <div className="layout3-footer-text">Exclusive Concierge Medicine</div>
        </div>
        <div className="layout3-footer-privacy">
          <p className="layout3-footer-privacy-text">
            <strong>SMS Privacy Policy:</strong> Integrative Wellness Partners respects your privacy.
            We collect phone numbers only for appointment reminders and medical updates. Mobile information
            will not be shared with third parties/affiliates for marketing/promotional purposes. All the
            above categories exclude text messaging originator opt-in data and consent; this information
            will not be shared with any third parties.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout3;
