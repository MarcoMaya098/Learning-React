export function Button({ text, name = "" }) {
    console.log(text);
    return ( <button onClick={function() {
        console.log('Hola mundo');
    }}>
        {text} - {name}
      </button>
    )
  }