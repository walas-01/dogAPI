const boton = document.querySelector("#boton")
const img = document.querySelector("#img")

const URL = "https://api.thedogapi.com/v1/images/search?api_key=live_ABP5jdqtXEE8BAUrvOur2mnt5GbxVIlniNbhP2UlmSGBcWDzBp4C8Iis0OH4R4XQ"
const URL2 = "https://dog.ceo/api/breeds/image/random"


boton.addEventListener( "click", () =>{
    console.log("[Boton]: Click!")

    fetch(URL2) //* esto devuelve una promesa, las cuales se pueden resolver con .then()
        .then((data)=>{
            console.log(data.url)
            img.src = data.url
        })

})


