export function Greeting(props) {
  //     const name = 'marco';
  //    return <h1>Mi nombre es {name} </h1>;
  //console.log(props);
  return <h1>{props.title}</h1>;
}

export default function Greeting2({title, name = 'default name'}) {
    return <h1>{title} dice {name}</h1>;

}

export function UseCard({name , amount, married, address, grett}) {
    console.log(grett);
    return (
    <>
        <h1>{name}</h1>
        <p>{amount}</p>
        <p>{married ? 'married' : 'single'}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Street: {address.street}</li>
        </ul>
    </>
    );
  }
  