import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Dashboard | The Rail Exchange",
  description: "Manage your listings, messages, and seller profile.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50">
        {children}
      </div>
    </div>
  );
}
