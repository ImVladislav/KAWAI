import './globals.css';

export const metadata = {
   title: '$KAWAI',
   description: 'KAWAI WORLD'
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={`antialiased`}>{children}</body>
      </html>
   );
}
