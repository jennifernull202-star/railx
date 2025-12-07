import "../globals.css";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-gray-50">
        <AdminSidebar />
        <main className="flex-grow p-10">{children}</main>
      </body>
    </html>
  );
}
