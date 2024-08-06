"use client";
import { useState } from 'react';
import styles from './RecommendedDropdown.module.css';
import dropdownIcon from '../../../../public/icons/DropDown.png';
import Image from 'next/image';

const RecommendedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <span className={styles.dropdownToggle} onClick={toggleDropdown}>
        RECOMMENDED
        <Image src={dropdownIcon} alt="Dropdown Icon" width={16} height={16} />
      </span>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li><a href="#">Recommended</a></li>
            <li><a href="#">Newest First</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Price: High to Low</a></li>
            <li><a href="#">Price: Low to High</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecommendedDropdown;
