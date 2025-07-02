import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <main className="relative first-section-height mt-18 pt-12 container mx-auto max-w-7xl flex">
          <Sidebar />
          <div className="px-6 space-y-4 ml-[256px] width-main-content">
            {children}
          </div>
        </main>
    </>
  );
}

