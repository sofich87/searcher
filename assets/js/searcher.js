let URLjson = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json'
let URLxml = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml'

let element = document.getElementById('filter');
  fetch(URLjson)
  .then(response => response.json() ) 
  .then(result => {

    element.onclick = (event) => {
      
      let text = document.getElementById('text').value;
      let idtag= document.getElementById('input1');
      idtag.innerHTML ='';
      result.forEach(element => {
        let src = element.src;
        let name = element.name;
        let type = element.type;
        let price = element.price;
        if(text.includes(name) || text.includes(type)){
          
          let plantilla = `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
            <div class="card-header p-0 mt-n4 mx-3">
              <a class="d-block shadow-xl border-radius-xl">
              <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
            </a>
            </div>
            <div class="card-body p-3">
              <p class="mb-0 text-sm">${type}</p>
              <a href="javascript:;">
                <h5>
                  ${name}
                </h5>
              </a>
              <p class="mb-4 text-sm">
                <b>Price: </b> $ ${price}
              </p>
              </div>
            </div>
            </div>`
          idtag.innerHTML+=plantilla;
  
        }
          
      });
      }

    });


let loadProducts=(URLjson, URLxml) =>{
    
  fetch(URLjson)
      .then(response => response.json() ) 
      .then(result => {
        let idtag= document.getElementById('input1');
        result.forEach(element => {
          let src = element.src;
          let name = element.name;
          let type = element.type;
          let price = element.price;
          
          let plantilla = `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
          <div class="card card-blog card-plain">
          <div class="card-header p-0 mt-n4 mx-3">
            <a class="d-block shadow-xl border-radius-xl">
            <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
          </a>
        </div>
        <div class="card-body p-3">
          <p class="mb-0 text-sm">${type}</p>
          <a href="javascript:;">
            <h5>
              ${name}
            </h5>
          </a>
          <p class="mb-4 text-sm">
            <b>Price: </b> $ ${price}
          </p>
          </div>
        </div>
        </div>`
        idtag.innerHTML+=plantilla;
        
        });
        
      })

  fetch(URLxml)
  .then(response => response.text())
  .then(result => {

    let xml = (new DOMParser()).parseFromString(result, 'application/xml');
    
    let product = xml.getElementsByTagName('product');
    let idtag2= document.getElementById('input1');
          
    for (let element of product){

      let src = element.getElementsByTagName('src')[0].innerHTML;
      let name = element.getElementsByTagName('name')[0].innerHTML;
      let type = element.getElementsByTagName('type')[0].innerHTML;
      let price = element.getElementsByTagName('price')[0].innerHTML;
      
      let plantilla = `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
          <div class="card card-blog card-plain">
          <div class="card-header p-0 mt-n4 mx-3">
            <a class="d-block shadow-xl border-radius-xl">
            <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
          </a>
        </div>
        <div class="card-body p-3">
          <p class="mb-0 text-sm">${type}</p>
          <a href="javascript:;">
            <h5>
              ${name}
            </h5>
          </a>
          <p class="mb-4 text-sm">
            <b>Price: </b> $ ${price}
          </p>
          </div>
        </div>
        </div>`
    
      idtag2.innerHTML+=plantilla;
    }
    
  })
  
  .catch(error => {
    /* Callback por fallo: Procese el error */
    console.log( error );
  })
};

loadProducts(URLjson,URLxml);
      
     // let xml = (new DOMParser()).parseFromString(result, 'application/xml');
      
    //Código a ejecutar
      /*let product = xml.getElementsByTagName('product');
      let text = document.getElementById('text').value;
    
      for (let elemento of product){

        if (text == xml.getElementsByTagName('name') || text==xml.getElementsByTagName('type')){
          let src = element.getElementsByTagName('src')[0].innerHTML;
          let name = element.getElementsByTagName('name')[0].innerHTML;
          let type = element.getElementsByTagName('type')[0].innerHTML;
          let price = element.getElementsByTagName('price')[0].innerHTML;
      
          let plantilla = `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
              <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                  <a href="javascript:;">
                    <h5>${name}</h5>
                  </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
                </div>
                </div>
              </div>`
    
          text.innerHTML+=plantilla;
        }

      }*/