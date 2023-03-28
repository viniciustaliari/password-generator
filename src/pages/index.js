import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [textoCopiado, setTextoCopiado] =  useState('Copiar')
  const [valor, setValor] = useState(1);
  const [password, setPassword] = useState("");
  const [checkedNum, setCheckedNum] = useState(false);
  const [checkedLetras, setCheckedLetras] = useState(false);
  const [checkedLetrasMayusculas, setCheckedLetrasMayusculas] = useState(false);
  const [checkedSimbolos, setCheckedSimbolos] = useState(false);
  const [dificultad, setDificultad] = useState(0);
  const [textoDificultad, setTextoDificultad] = useState("");
  const [fondo1, setFondo1] = useState({
    backgroundColor: "white",
    width: "7px",
    height: "20px",
    border: '1px solid white'
  });
  const [fondo2, setFondo2] = useState({
    backgroundColor: "white",
    width: "7px",
    height: "20px",
    border: '1px solid white'
  });
  const [fondo3, setFondo3] = useState({
    backgroundColor: "white",
    width: "7px",
    height: "20px",
    border: '1px solid white'
  });
  const [fondo4, setFondo4] = useState({
    backgroundColor: "white",
    width: "7px",
    height: "20px",
    border: '1px solid white'
  });

  const handleNumCheck = () => {
    setCheckedNum(!checkedNum);
    if (checkedNum != true) {
      setDificultad(dificultad + 1);
    } else if (checkedNum === true) {
      setDificultad(dificultad - 1);
    }
  };
  const handleLetrasCheck = () => {
    setCheckedLetras(!checkedLetras);
    if (checkedLetras != true) {
      setDificultad(dificultad + 1);
    } else if (checkedLetras === true) {
      setDificultad(dificultad - 1);
    }
  };
  const handleLetrasMayusculasCheck = () => {
    setCheckedLetrasMayusculas(!checkedLetrasMayusculas);
    if (checkedLetrasMayusculas != true) {
      setDificultad(dificultad + 1);
    } else if (checkedLetrasMayusculas === true) {
      setDificultad(dificultad - 1);
    }
  };
  const handleSimbolosCheck = () => {
    setCheckedSimbolos(!checkedSimbolos);
    if (checkedSimbolos != true) {
      setDificultad(dificultad + 1);
    } else if (checkedSimbolos === true) {
      setDificultad(dificultad - 1);
    }
  };

  const setearRange = (e) => {
    setValor(e.target.value);
  };

  const generarPassword = (e) => {
    e.preventDefault();
    setTextoCopiado('Copiar')
    if (
      !checkedNum &&
      !checkedLetras &&
      !checkedLetrasMayusculas &&
      !checkedSimbolos
    ) {
      alert("debes seleccionar un tipo de caracter");
    } else {
      let alfabeto = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "z",
      ];
      let simbolos = ["@", "$", "*", "!", "%", "#"];
      let contraseña = [];

      function randomizar(max) {
        return Math.floor(Math.random() * max);
      }
      for (let i = 0; i <= valor - 1; i++) {
        let numeroAleatorio = randomizar(3) + 1;
        if (numeroAleatorio === 1) {
          if (checkedNum) {
            contraseña[i] = randomizar(9);
          } else {
            i--;
          }
        } else if (numeroAleatorio === 2) {
          if (checkedLetras) {
            contraseña[i] = alfabeto[randomizar(alfabeto.length)];
          } else {
            i--;
          }
        } else if (numeroAleatorio === 3) {
          if (checkedLetrasMayusculas) {
            contraseña[i] = alfabeto[randomizar(alfabeto.length)].toUpperCase();
          } else {
            i--;
          }
        } else if (numeroAleatorio === 4) {
          if (checkedSimbolos) {
            contraseña[i] = simbolos[randomizar(simbolos.length)];
          } else {
            i--;
          }
        } else {
          console.log("Algo fue mal");
        }
      }

      setPassword(contraseña.join(""));
    }
  };

  useEffect(() => {
    if (dificultad === 1) {
      setTextoDificultad("Debil");
    } else if (dificultad === 2) {
      setTextoDificultad("Normal");
    } else if (dificultad === 3) {
      setTextoDificultad("Fuerte");
    } else if (dificultad === 4) {
      setTextoDificultad("Muy Fuerte");
    } else if (dificultad === 0) {
      setTextoDificultad("");
    }

    if (dificultad === 0) {
      setFondo1({
        ...fondo1,
        backgroundColor: "transparent",
      });
      setFondo2({
        ...fondo2,
        backgroundColor: "transparent",
      });
      setFondo3({
        ...fondo3,
        backgroundColor: "transparent",
      });
      setFondo4({
        ...fondo4,
        backgroundColor: "transparent",
      });
    } else if (dificultad === 1) {
      setFondo1({
        ...fondo1,
        backgroundColor: "#00fd8f",
      });
      setFondo2({
        ...fondo2,
        backgroundColor: "transparent",
      });
      setFondo3({
        ...fondo3,
        backgroundColor: "transparent",
      });
      setFondo4({
        ...fondo4,
        backgroundColor: "transparent",
      });
    } else if (dificultad === 2) {
      setFondo1({
        ...fondo1,
        backgroundColor: "#00fd8f",
      });
      setFondo2({
        ...fondo2,
        backgroundColor: "#00fd8f",
      });
      setFondo3({
        ...fondo3,
        backgroundColor: "transparent",
      });
      setFondo4({
        ...fondo4,
        backgroundColor: "transparent",
      });
    } else if (dificultad === 3) {
      setFondo1({
        ...fondo1,
        backgroundColor: "#00fd8f",
      });
      setFondo2({
        ...fondo2,
        backgroundColor: "#00fd8f",
      });
      setFondo3({
        ...fondo3,
        backgroundColor: "#00fd8f",
      });
      setFondo4({
        ...fondo4,
        backgroundColor: "transparent",
      });
    } else if (dificultad === 4) {
      setFondo1({
        ...fondo1,
        backgroundColor: "#00fd8f",
      });
      setFondo2({
        ...fondo2,
        backgroundColor: "#00fd8f",
      });
      setFondo3({
        ...fondo3,
        backgroundColor: "#00fd8f",
      });
      setFondo4({
        ...fondo4,
        backgroundColor: "#00fd8f",
      });
    }
  }, [dificultad]);

  const handleCopiar = ()=>{
    let aux = document.createElement("input")
    aux.setAttribute("Value", password)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand("copy")
    document.body.removeChild(aux)
    setTextoCopiado('Copiado!')
  }

  //Estilos
  const fuente = '-apple-system, BlinkMacSystemFont, sans-serif';

  const contenedorDivDificultad = {
    display: "flex",
    gap: "5px",
  };

  const estiloMain = {
    width: '100%',
    height: '100vh',
    background: 'rgba(8,8,11)',
    background: ' linear-gradient(180deg, rgba(8,8,11,1) 0%, rgba(54,54,80,1) 100%, rgba(46,46,70,1) 100%, rgba(4,5,18,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const contenedorPassword = {
    width: '40%',
    maxWidth: '400px',
    height: '50px',
    backgroundColor: '#27282b',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    minWidth: '300px'
  }

  const estiloBotonCopiar = {
    marginLeft: 'auto',
    marginRight: '10px',
    width: '70px',
    height: '40px',
    backgroundColor: '#53545d',
    border: 'none',
    padding: '5px',
    fontFamily: fuente
  }

  const estiloTextoPassword = {
    marginLeft: '10px',
    fontSize: '1.02rem',
    fontFamily: fuente,
    fontWeight: '600',
    color: '#53545d'
  }

  const estiloContenedorFormulario = {
    width: '40%',
    maxWidth: '400px',
    minWidth: '300px',
    backgroundColor: '#27282b',
    fontSize: '1.01rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontFamily: fuente,
    gap: '10px'
  }

  const estiloCheckBox = {
    marginRight: '10px'
  }

  const estiloConetenedorFuerza = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#121111',
    height: '40px',
    alignItems: 'center',
    padding: '10px'
  }

  const contenedorBarrasDificultad = {
    display: 'flex',
    gap: '10px'
  }

  const botonGenerar = {
    ...estiloBotonCopiar,
    width: '100%',
    backgroundColor: '#00fd8f',
    color: '#27282b',
    fontSize: '1.01rem',
    fontWeight: '600'
  }

  const estiloFuerza = {
    color: '#53545d'
  }

  const estiloTitulo = {
    fontFamily: fuente,
    marginBottom: '50px',
    fontSize: '2.5rem'
  }

  const estiloPasswordSize = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <>
      <Head>
        <title>PassGen</title>
        <meta name="description" content="Generador de contraseñas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/3256/3256783.png"
        />
      </Head>
      <main style={estiloMain}>
        <h1 style={estiloTitulo}>PassGen</h1>
        <div style={contenedorPassword}>
          <p style={estiloTextoPassword}>{password}</p>
          <button onClick={handleCopiar} style={estiloBotonCopiar}>{textoCopiado}</button>
        </div>
        <form name="formulario" onSubmit={generarPassword} style={estiloContenedorFormulario}>
          <div style={estiloPasswordSize}>
            <label htmlFor="inputRange">Tamaño de la contraseña</label>
            <p>{valor}</p>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            name="inputRange"
            value={valor}
            onChange={setearRange}
          />
          <div>
          <input
            type="checkbox"
            name="numeros"
            checked={checkedNum}
            onClick={handleNumCheck}
            style={estiloCheckBox}
          />
          <label htmlFor="numeros">Incluir números</label>
          </div>
          
          <div>
          <input
            type="checkbox"
            name="letras"
            checked={checkedLetras}
            onClick={handleLetrasCheck}
            style={estiloCheckBox}
          />
          <label htmlFor="letras">Incluir letras</label>
          </div>
          <div>
          <input
            type="checkbox"
            name="letrasMayusculas"
            checked={checkedLetrasMayusculas}
            onClick={handleLetrasMayusculasCheck}
            style={estiloCheckBox}
          />
          <label htmlFor="letrasMayusculas">Incluir letras mayusculuas</label>
          </div>
          <div>
          <input
            type="checkbox"
            name="simbolos"
            checked={checkedSimbolos}
            onClick={handleSimbolosCheck}
            style={estiloCheckBox}
          />
          <label htmlFor="simbolos">Incluir simbolos</label>
          </div>
          <div style={estiloConetenedorFuerza}>
            <p style={estiloFuerza}>Fuerza</p>
            <div style={contenedorBarrasDificultad}>
              <p>{textoDificultad}</p>
              <div style={contenedorDivDificultad}>
                <div style={fondo1}></div>
                <div style={fondo2}></div>
                <div style={fondo3}></div>
                <div style={fondo4}></div>
              </div>
            </div>
          </div>
          <button type="submit" style={botonGenerar}>Generar</button>
        </form>
      </main>
    </>
  );
}
