import Navbar from "./Navbar";
import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import SecondImage from "./components/home/SecondImage";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start '>
      <Hero />
      <SecondImage />
      <Products />
    </main>
  );
}
