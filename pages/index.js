import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Novo link de acesso ao CRM
        </h1>

        <div className={styles.grid}>
          <a href="http://177.10.200.16:3022/" className={styles.card}>
            <p>CRM do Grupo Vicoa Brasil. &rarr;</p>
          </a>
        </div>
      </main>
    </div>
  )
}
