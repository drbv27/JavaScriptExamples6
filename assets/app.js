/*Ejercicios Basicos JS Nivel 6
    18.Programa una función que dada una cadena de texto cuente el número de vocales y consonantes.Ejemplo: miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
    19.Programa una función que valide que un texto sea un nombre válido.Ejemplo miFuncion("Diego Bonilla") devolverá verdadero.
    20.Programa una función que valide que un texto sea un email válido.Ejemplo: miFuncion("drbv27@gmail.com") devolverá verdadero.
    */

//Soluciones:

//--------------------------------------------------------------------------------------------

//E18S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 18:")

const contarLetras = (cadena="") => {
    if (!cadena) return console.warn("No ingresaste un texto")
    if (typeof cadena !=="string") return console.error(`El valor "${cadena}" ingresado NO es una cadena de texto`)

    let vocales =0,
    consonantes =0

    cadena = cadena.toLocaleLowerCase()

    for (let letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) vocales++  //Regular expression to evaluate: /[aeiouáéíóúü]/
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras("Diego Bonilla")

//--------------------------------------------------------------------------------------------

//E19S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 19:")

const validarNombre = (nombre="") => {
    if (!nombre) return console.warn("No ingresaste un nombre")
    if (typeof nombre !=="string") return console.error(`El valor "${nombre}" ingresado NO es una cadena de texto`)

    if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(nombre)){ //if you want use regular expresion for spanish: ^[a-zA-ZÑñáÁéÉíÍóÚÜü\s]+/g
        console.info(`El nombre: ${nombre}, es valido.`)
    } else {
        console.error(`"${nombre}" no es valido como nombre.`)
    }
}
validarNombre("Diego Bonilla")
//--------------------------------------------------------------------------------------------

//E20S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 20:")

const validarEmail = (email="") => {
    if (!email) return console.warn("No ingresaste un correo")
    if (typeof email !=="string") return console.error(`El valor "${email}" ingresado NO es una cadena de texto`)

    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(email)){ //another reg expression maybe: /[a-z0-9]+(\.[_a-z0-9]+(\.[a-z]{2,15}))/i
        console.info(`El email: ${email}, es valido.`)
    } else {
        console.error(`"${email}" no es valido como email.`)
    }
}
validarEmail("drbv27@gmail.com")