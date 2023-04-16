let textValue = document.querySelector(".input-text")
const btnEncrypt = document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt")
const encrypted = document.querySelector(".encrypted")
const hidde = document.querySelector(".hidde")
const btnCopy = document.querySelector(".btn-copy")

const styles =() => {
    hidde.style.height = "0"
    hidde.style.visibility = "hidden"
    encrypted.fontsize = "2em"

    btnCopy.style.visibility = "visible"
}
const copy =()=>{
    const text = encrypted.innerHTML
    const input = document.createElement("input")
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand("copy")
    document.body.removeChild(input)
    alert("copiado")

}
const encrypt = () => {
    //encriptar texto
    const textEncryptor = textValue.value
    const textArray = textEncryptor.split("")

    let encrypt = ""
    for (let i = 0; i < textArray.length; i++) {
        const letter = textArray[i]
        const letterCoder = letter.charCodeAt(0)
        encrypt += String.fromCharCode(letterCoder + 1)

    }

    if (encrypt.length > 0) {
        encrypted.innerHTML = encrypt
        styles()
    }else{
        alert("campo obligatorio")
    }
}

const decrypt = () => {
    const textDecryptor = textValue.value
    const textArray = textDecryptor.split("")
    let decrypt =""
    for(let i=0; i<textArray.length; i++){
        const letter = textArray[i]
        const letterCoder = letter.charCodeAt(0)
        decrypt += String.fromCharCode(letterCoder - 1)
    }

    if (decrypt.length  > 0){
        encrypted.innerHTML = decrypt
        styles()
    }
}



btnEncrypt.addEventListener("click", e =>{
    e.preventDefault()
    encrypt()
    textValue.value  = ""
})

btnDecrypt.addEventListener("click", e =>{
    e.preventDefault()
    decrypt()
    textValue.value  = ""
})


btnCopy.addEventListener("click", e =>{
    e.preventDefault()
    copy()
})