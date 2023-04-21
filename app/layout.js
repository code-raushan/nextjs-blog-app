import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
export const metadata = {
  title: "Raushan's Blog",
  description: 'Created by Raushan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar/>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  )
}
