// app/components/Footer.tsx
"use client"
import React, { useState } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import usFlag from '../../../../public/icons/US.png'

// Add paths to your icon files
import instagramIcon from '../../../../public/icons/Instagram.png';
import linkedinIcon from '../../../../public/icons/Linkedin.png';
import gpayIcon from '../../../../public/icons/Gpay.png';
import mastercardIcon from '../../../../public/icons/MasterCard.png';
import applepayIcon from '../../../../public/icons/ApplePay.png';
import amexIcon from '../../../../public/icons/Amex.png';
import paypalIcon from '../../../../public/icons/PayPal.png';
import payIcon from '../../../../public/icons/Pay.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        console.log('Email submitted:', email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.row1}>
        <div className={styles.leftColumn}>
          <h2 className={styles.leftTitle}>Be the first to know</h2>
          <form onSubmit={handleSubmit} className={styles.emailForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.rightTitle}>Contact Us</h2>
          <p>Phone: +44 221 133 5360</p>
          <p>Email: customercare@mettamuse.com</p>
          <h2 className={styles.rightTitle}>Currency</h2>
          <div className={styles.currencyInfo}>
          <Image src={usFlag} alt="Currency Icon" width={24} height={24} />
          <span className={styles.dot}>•</span>
          <p>USD</p>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>
      <div className={styles.divider}></div> {/* Divider line */}
      <div className={styles.row2}>
        <div className={styles.col}>
          <h2 className={styles.sectionTitle}>Company</h2>
          <ul className={styles.list}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2 className={styles.sectionTitle}>Help</h2>
          <ul className={styles.list}>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Follow Us</h2>
            <ul className={styles.socialLinks}>
              <li><a href="#"><Image src={instagramIcon} alt="Instagram" width={24} height={24} /></a></li>
              <li><a href="#"><Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} /></a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>mettā muse Accepts</h2>
            <div className={styles.subscribeIcons}>
              <Image src={gpayIcon} alt="Gpay" width={44} height={26} />
              <Image src={mastercardIcon} alt="MasterCard" width={44} height={26} />
              <Image src={paypalIcon} alt="PayPal" width={44} height={26} />
              <Image src={amexIcon} alt="Amex" width={44} height={26} />
              <Image src={applepayIcon} alt="ApplePay" width={44} height={26} />
              <Image src={payIcon} alt="Pay"width={44} height={26} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row3}>
        <p> Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
