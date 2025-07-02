import ContentHeader from "@/components/ContentHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ContentHeader title="Prendre un rendez-vous" description="Recherchez un spécialiste et prenez rendez-vous en quelques clics."/>
        {children}
    </>
  );
}
