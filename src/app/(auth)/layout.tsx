import { Ambulance, HeartPulse, Stethoscope } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <main className="min-h-screen gradient flex flex-col items-center justify-center p-6">
            <div className="mb-10">
                <Stethoscope size={72} strokeWidth={1.5} className="text-cyan-100"/>
                {/* <Ambulance size={72} strokeWidth={1.25} className="text-cyan-100"/> */}
            </div>
            {children}
        </main>
    </>
  );
}