"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'; // Import your CSS module

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <h2>Linking all routes below:</h2>
      <br />
      <Link href="/navbar">Go to Navbar</Link> <br />
      <Link href="/about">Go to About</Link> <br />
      <Link href="/contact">Go to Contact</Link> <br />
      <Link href="/footer">Go to Footer</Link> <br />
      <br />
      
      <h2>Adding navigation for all routes using buttons and useRouter:</h2>
      <div>
        
        <button className={styles.button} onClick={() => router.push('/contact')}>
          Go to Contact page
        </button> <br />
        <button className={styles.button} onClick={() => router.push('/about')}>
          Go to About page
        </button> <br />
        <button className={styles.button} onClick={() => router.push('/footer')}>
          Go to Footer page
        </button> <br />
        <button className={styles.button} onClick={() => router.push('/navbar')}>
          Go to Navbar page
        </button> <br />
      </div>
    </div>
  );
};

export default Home;