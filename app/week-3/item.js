export default function Item({ name, quantity, category}) {
    return(
    <section>
    <h3>{name}</h3>
    <p>Buy {quantity} in {category}</p>
    </section>
    );
}