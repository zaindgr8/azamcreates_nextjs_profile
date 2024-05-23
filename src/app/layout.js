
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'

import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';

const inter = Inter_Tight({ subsets: ['latin'] })
export const metadata = {
  title: "Azam Creates",
  description: "Azam Creates- Your Premium Realty Consultant!",
  icons: {
    icon: ["/a5b.png?v=4"],
    apple: ["/a5b.png?v4"],
    shortcut: ["/a5b.png"],
  },
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>  
      <ImportBs/>
        <div className=''>{children}</div>
      </body>
    </html>
  )
}
