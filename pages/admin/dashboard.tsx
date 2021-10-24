import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const AdminDashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Admin Dashboard Panel</h1>
        <Link href="/">
          <a>Link back home</a>
        </Link>
      </main>
    </div>
  );
};

export default AdminDashboard;
