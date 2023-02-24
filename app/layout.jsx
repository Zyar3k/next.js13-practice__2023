import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>LOGO</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
