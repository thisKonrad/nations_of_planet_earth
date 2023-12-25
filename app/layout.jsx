import './globals.css'
import styles from './page.module.css'
import NavBar from './components/Navbar/Navbar'

export const metadata = {
  title: 'nations of planet earth',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
      <header className='header_default'>
        <NavBar/>
      </header>
      <main className={styles.main}>
      {children}
      </main>
      <footer>
        <h4>footer/////////////////////////////:::::</h4>
      </footer>
    </body>
    </html>
  )
}
