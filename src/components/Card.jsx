export default function Card({img="assets\sticks.png",title="10",price="100",children}){
    return(<div className="flex flex-col gap-2.5">
        <div className="flex flex-col">
          <figure className="bg-neutral-200 flex justify-center items-center w-[270px] h-[250px] rounded-t-lg">
            <img src={img} alt={img} />
          </figure>
          <button className="gap-2 bg-neutral-900 py-4 text-white flex items-center justify-center rounded-b-lg">
            <img src="./assets/cart.png" alt="Keranjang" /> Add To Cart
          </button>
        </div>
        <div className="flex flex-col">
            <h1 className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">{title}</h1>
            <h1 className="text">{price}</h1>
            <p className="text">{children}</p>
        </div>
        </div>);

}