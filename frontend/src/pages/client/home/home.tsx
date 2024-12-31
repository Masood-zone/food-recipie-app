import { HeroCarousel } from "../components/header/hero-carousel";

export default function Home() {
  const items = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1519915495817-684cdf876a1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9udXRzfGVufDB8fDB8fHww",
      title: "Delicious Donuts",
      description: "Indulge in our freshly baked, mouthwatering donuts!",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1454255779048-55ecd78837d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Donut Paradise",
      description: "Explore our wide variety of flavors and toppings!",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1519915529849-96bdf0f0680a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Sweet Temptations",
      description: "Treat yourself to our irresistible donut creations!",
    },
  ];
  return (
    <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 mx-auto">
        <HeroCarousel items={items} autoPlayInterval={5000} />
      </div>
    </section>
  );
}
