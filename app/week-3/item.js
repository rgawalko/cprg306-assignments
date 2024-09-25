export default function Item({ name, quantity, category}) {
    return(
    <section className="my-5 ml-11 w-60 bg-violet-300 rounded-custom-md">
    <h3 className="font-bold text-blue-900 pl-2">{name}</h3>
    <p className="pl-2">Buy {quantity} in {category}</p>
    </section>
    );
}