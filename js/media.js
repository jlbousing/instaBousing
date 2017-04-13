//MODULE OF instaBousing FOR THE MANAGE OF MEDIA

function media(token,selector){
    
    this.token = token;
    this.url = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+token;
    this.info = "";
    this.index = 0;
    this.selector = selector; //CLASS OF SELECTOR DIV FOR THE ISOTOPE
    
    this.setToken = function(dato){
    this.token = dato;
}

  this.setIndex = function(dato){
    this.index = dato;
  }
  
  this.setInfo = function(dato){
      this.info = dato;
  }
  
//GETTERS

   this.getToken = function(){
    return this.token;
  }

   this.getUrl = function(){
    return this.url;
  }

   this.getIndex = function(){
    return this.index;
  }
   
   this.getInfo = function(){
       return this.info;
   }

//METHOD FOR GET THE INFORMATION JSON OF THE API
  this.fotosAppend = function(item) {
    
       $.ajax({
          url: this.url,
          type: "GET",
          dataType: "jsonp",
          success: function(data){
            
            console.log(data.data[0]);
            
            data.data.forEach(function(elemento,index,array){
                
                var url = elemento.images.standard_resolution.url;
                
                var etiqueta = '<img src="'+url+'">';
                
                $("."+item).append(etiqueta);
            });
              
            document.getElementById("temp").value = data.pagination.next_url;  
        },
          error: function(jqXHR,textStatus,error){
               console.log(error);
          }
       }); 
               
    }

  //INITIALIZATE THE ISOTOPE WITH THE SELECTOR ATRIBUTE
  this.IsotopeInit = function(item,loyout){
      
      $("."+this.selector).isotope({
           itemSelector: item,
           layoutMode: loyout
      });
  }
  
  this.LoadMore = function(item){    
      
       
      var ruta = document.getElementById("temp").value;
      
      $.ajax({
          url: ruta,
          type: "GET",
          dataType: "jsonp",
          success: function(data){
              
              data.data.forEach(function(elemento,index,array){
                  var url = elemento.images.standard_resolution.url;
                  var etiqueta  = '<img src="'+url+'">';
                  $("."+item).append(etiqueta);
              });
              
              //SE GUARDA LA SIGUIENTE RUTA EN EL TEMPORAL
              document.getElementById("temp").value = data.pagination.next_url;
              console.log(document.getElementById("temp").value);
              
              
              
          },
          error: function(jqXHR,textStatus,error){
              console.log(error);
          }
      });
      
      
      //SE ELIMINA EL BOTON DE LOAD MORE CUANDO SE LLEGUE A LA ÚLTIMA PÁGINACIÓN
      if(typeof(document.getElementById("temp").value) == "undefined"){
                  console.log("bla bla bla");
                  $("#button").remove();
        }
  }
  
}
