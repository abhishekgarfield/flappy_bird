/** function changes colors for piller and bird */
export const changeColor = () =>{
    let colors = ['red','green','yellow','pink','blue','skyblue','black']
    let randomNumber = Math.floor(Math.random() * colors.length)
    return [colors[randomNumber],colors[randomNumber+1] == undefined ? colors[randomNumber-1] : colors[randomNumber+1] ] // first color value is for pillers and second for bird
}

