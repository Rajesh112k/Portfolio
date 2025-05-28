
import Nav from "./components/nav/nav";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'


export const metadata = {
  title: "Rajesh Kumar Reddy Avula | Portfolio",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
      </body>
    </html>
  );
}
