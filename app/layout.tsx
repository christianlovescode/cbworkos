import cx from "classnames";
import { Inter } from "next/font/google";
import StitchesRegistry from "./registry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className)}>
        <StitchesRegistry>{children}</StitchesRegistry>
      </body>
    </html>
  );
}
