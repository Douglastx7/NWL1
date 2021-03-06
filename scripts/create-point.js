   
   
    function populateUFs() { 
        const ufSelect = document.querySelector("select[name=uf]")
        
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then ( res => res.json() )
        then ( states => { 

             for( const state of states ) { 
                 ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

             }

        } )
      }

      populateUFs()

      function getCities (event) { 
      const citySelect = document.querySelector("[name=city]")
      const stateInput = document.querySelector("[name=state]")
     
     
      const rfValue = event.target.value

      const indexOfSelectedState = event.target.selectedIndex
      stateInput.value = event.target.options[indexOfSelectedState].text

      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${rfValue}/municipios`


      citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
      citySelect.disabled = true

        fetch(url)
        .then ( res => res.json() )
        then ( cities => { 
          citySelect.innerHTML =""

             for( const city of states ) { 
                 citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
             }
 

             citySelect.disabled = false
        } )


      }


     

      document
      .querySelector("select[name=uf]")
      .addEventListener("change", getCities) 



      
      // Itens de coleta
      // pegar todos os li´s
      const itemsToCollect = document.querySelectorAll(".items-grid li")  


      for (const item of itemsToCollect){
            item.addEventListener("click", handleSelectedItem)  
      }

   
      function handleSelectedItem(event) { 
        console.log(event.target)
      }