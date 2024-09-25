export default function Item({ name, quantity, category}) {
    return(
    <section className="my-5 ml-5 w-60 bg-slate-500">
    <h3 className="font-bold">{name}</h3>
    <p>Buy {quantity} in {category}</p>
    </section>
    );
}