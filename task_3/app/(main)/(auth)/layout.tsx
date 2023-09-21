export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex-center mx-auto'>{children}</div>;
}
