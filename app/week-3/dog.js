export default function Dog(props) {
    return(
    <section className="m-2 bg-neutral-100">
    <h3 className ="text-xl font-bold
    text-violet-900">{props.name}</h3>
    <p>Breed: {props.breed}</p>
    <p>Age: {props.age}</p>
    <p>Colour: {props.colour}</p>
    </section>
    );
}