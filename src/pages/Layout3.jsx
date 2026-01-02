import React from 'react';
import '../styles/Layout3.css';

const Layout3 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <li><a href="#physician" onClick={(e) => { e.preventDefault(); scrollToSection('physician'); }}>About Dr. Riaz</a></li>
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

      <section className="layout3-physician" id="physician">
        <div className="layout3-physician-container">
          <div className="layout3-physician-info">
            <div className="layout3-physician-image-wrapper">
              <img src="/dr-riaz-profile.jpeg" alt="Dr. Samar Riaz, NMD" className="layout3-physician-image" />
            </div>
            <h2 className="layout3-physician-name">Dr. Samar Riaz</h2>
            <p className="layout3-physician-credentials">NMD, Summa Cum Laude</p>
            <p className="layout3-physician-quote">
              "Being a strong advocate for my patients and going above and beyond for their well-being."
            </p>
          </div>
          <div className="layout3-physician-bio">
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
          <p className="layout3-contact-note">
            We look forward to building a lasting relationship focused on your optimal health.
          </p>
        </div>
      </section>

      <footer className="layout3-footer">
        <div className="layout3-footer-container">
          <img src="/IWP-LOGO.png" alt="Integrative Wellness Partners" className="layout3-footer-logo" />
          <div className="layout3-footer-text">Exclusive Concierge Medicine</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout3;
