import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Inventory Tracker",
  description: "Manage your inventory with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <body
          className={poppins.className}
          style={{ backgroundColor: "#EAEBF0" }}
        >
          {children}
        </body>
      </ThemeWrapper>
    </html>
  );
}
