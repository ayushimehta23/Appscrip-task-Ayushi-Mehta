// app/components/Header.tsx

import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image'; // For logo and icon images

// Correctly import the logo image
import Logo from '../../../../public/icons/Logo.png';
import Search from '../../../../public/icons/Search.png';
import Cart from '../../../../public/icons/Cart.png';
import Heart from '../../../../public/icons/Heart.png';
import Profile from '../../../../public/icons/Profile.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row1}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="Logo Icon" width={50} height={50} />
        </div>
        <div className={styles.logoText}>
          <span>LOGO</span>
        </div>
        <div className={styles.icons}>
          <Image src={Search} alt="Icon 1" width={24} height={24} />
          <Image src={Heart} alt="Icon 2" width={24} height={24} />
          <Image src={Cart} alt="Icon 3" width={24} height={24} />
          <Image src={Profile} alt="Icon 4" width={24} height={24} />
        </div>
      </div>
      <div className={styles.row2}>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Shop</Link></li>
            <li><Link href="/page2">Skills</Link></li>
            <li><Link href="/page3">Stories</Link></li>
            <li><Link href="/page4">About</Link></li>
            <li><Link href="/page4">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
