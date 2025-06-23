import { Header } from "@/components/shared";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <div className="max-w-[1200px] mx-auto">
        <Header />
        {children}
    </div>
  </>;
}