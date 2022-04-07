import React from "react";

const Context = React.createContext({
    //Valores que tendriamos sin tener acceso al "objeto magico"
    name: 'sin provider',
    lastName: 'aaaa'
})

export default Context