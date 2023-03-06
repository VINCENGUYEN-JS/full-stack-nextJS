import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import { Inter } from "@next/font/google";
import Sidebar from "@/components/Sidebar";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}
