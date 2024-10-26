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
