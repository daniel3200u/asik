import Card from "./components/Card";
export default function Product() {
  const data=[
    {
      price:"100",
      img:"./assets/jacket.png",
      title:"Gucci Duffle Bag",
    },
    {
      price:"100",
      img:"./assets/jacket.png",
      title:"Gucci Duffle Bag",
    },
    {
      price:"100",
      img:"./assets/jacket.png",
      title:"Gucci Duffle Bag",
    },
    {
      price:"100",
      img:"./assets/jacket.png",
      title:"Gucci Duffle Bag",
    },
  ];
  return (
    <section className="flex flex-col w-fit mx-auto p-8">
      <div className="flex flex-row justify-between items-center py-4">
        <p className="text-xl">Wishlist (4)</p>
        <button className="border w-fit border-neutral-900 py-2 px-4 rounded-md">
          Move All To Bag
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {
          data.map((item,index) => (
            <Card 
            key={index}
            img={item.img} 
            title={item.title} 
            price={item.price}
            />
        ))}
      <iframe src="https://v2-embednotion.com/13cd6e988eac809db648cacd58960b50" style="width: 100%; height: 500px; border: 2px solid #ccc; border-radius: 10px; padding: none;"></iframe>
      <Card img="assets\tas-gucci.png" title="gucci kulit" price="$200"/>
      <Card img="assets\cpu-cooler.png" title="cpu ganteng" price="$200"/>
      <Card img="assets\jacket.png" title="jacket" price="$200"/>
      <Card>
        <p1>aduh banf</p1>
      </Card>
      </div>
    </section >
  );
}
