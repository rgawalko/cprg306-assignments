export default function Item({ name, quantity, category}) {
    return(
    <section className="my-5 ml-14 w-60 bg-violet-500 rounded-custom-md">
    <h3 className="font-bold text-gray-100 pl-2">{name}</h3>
    <p className="pl-2 text-gray-100">Buy {quantity} in {category}</p>
    </section>
    );
}