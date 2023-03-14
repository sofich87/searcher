

let URLjson = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json'
let URLxml = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml'


/*// Changes XML to JSON
function xmlToJson(URLxml) {
	
	// Create the return object
	var obj = {};

	if (URLxml.nodeType == 1) { // element
		// do attributes
		if (URLxml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < URLxml.attributes.length; j++) {
				var attribute = URLxml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (URLxml.nodeType == 3) { // text
		obj = URLxml.nodeValue;
	}

	// do children
	if (URLxml.hashasChildNodes()) {
		for(var i = 0; i < URLxml.childNodes.length; i++) {
			var item = URLxml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
*/
//URLjson=URLjson+xmlToJson(URLxml);
let loadProducts=(URLjson,URLxml) =>{
    
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
      .then(response=> response.text())
      .then (result =>{
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

let element = document.getElementById('filter');
  fetch(URLjson)
  .then(response => response.json() ) 
  .then(result => {

    element.onclick = (event) => {
      
      let text = document.getElementById('text').value;
      let idtag= document.getElementById('input1');
      idtag.innerHTML ='';
      for(element of result){
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
          
      }
    }
  });
  fetch(URLxml)
  .then(response=> response.text())
  .then (result =>{

    element.onclick = (event) => {
      let xml = (new DOMParser()).parseFromString(result, 'application/xml');
      let text = document.getElementById('text').value;

      let product = xml.getElementsByTagName('product');
      let idtag2= document.getElementById('input1');
      idtag2.innerHTML ='';
      
      for (let element of product){

        let src = element.getElementsByTagName('src')[0].innerHTML;
        let name = element.getElementsByTagName('name')[0].innerHTML;
        let type = element.getElementsByTagName('type')[0].innerHTML;
        let price = element.getElementsByTagName('price')[0].innerHTML;
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

          idtag2.innerHTML+=plantilla;
        }
        
      }

    }
  })
.catch(error => {
/* Callback por fallo: Procese el error */
console.log( error );
});
  
  


loadProducts(URLjson,URLxml);
//xmlToJson(URLxml);
      
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