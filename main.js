
const pokemon=document.getElementById('pokemon')
const informacion = document.getElementById('informacion')
    async function buscar(nombre){
        const url =`https://pokeapi.co/api/v2/pokemon/${nombre}`
        const response=await fetch(url)
        if(response.status===404){
            pokemon.innerHTML=`<h2>pokemon no encontrado</h2>`
            informacion.innerHTML=``

        }else if(response.status===200){
            const data=await response.json()
           
            pokemon.innerHTML =`
                <img class="imagen-pokemon" src="${data.sprites.front_default}">`

            informacion.innerHTML =`
                <h3>${nombre}</h3>
                <p>${data.stats[0].stat.name}: ${data.stats[0].base_stat}</p>
                <p>${data.stats[1].stat.name}: ${data.stats[1].base_stat}</p>
                <p>${data.stats[2].stat.name}: ${data.stats[2].base_stat}</p>
                <p>${data.stats[3].stat.name}: ${data.stats[3].base_stat}</p>
                <p>${data.stats[4].stat.name}: ${data.stats[4].base_stat}</p>
                <p>${data.stats[5].stat.name}: ${data.stats[5].base_stat}</p>
                ` 
               
            }
            nombre=document.getElementById('nombre').value=''
        }
        document.getElementById('boton').addEventListener('click',()=>{
            nombre=document.getElementById('nombre').value
            buscar(nombre)
        })
            
        
                
        
 
 
 
 
 



