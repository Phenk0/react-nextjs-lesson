import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/MainNavigation";
import classes from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT Meetups",
  description: "Lesson was taught by Max",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  );
}
