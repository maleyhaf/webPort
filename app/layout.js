import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/NavBar";

export const metadata = {
  title: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
