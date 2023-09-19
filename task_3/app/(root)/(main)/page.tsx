import Gallery from "@/components/Gallery";
export default function Home() {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <Gallery />
      </section>
    </main>
  );
}
