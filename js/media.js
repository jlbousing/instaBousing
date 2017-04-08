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
      
      if(this.index == 0){
          
          $.ajax({
              url: this.url,
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                  
                  var new_page = data.pagination.next_url;
                  
                  //SE HACE UNA LLAMADA A AJAX PARA IMPRIMIR LAS FOTOS DE LA PÁGINA OBTENIDA
                  $.ajax({
                      url: new_page,
                      type: "GET",
                      dataType: "jsonp",
                      success: function(data){
                          
                          data.data.forEach(function(elemento,index,array){
                              
                              var url = elemento.images.standard_resolution.url;
                              var etiqueta = '<img src="'+url+'">';
                               $("."+item).append(etiqueta);
                          });
                      }
                  });
              }
          });
          
          this.index++; //SE INCREMENTA EL ÍNDICE
      }else{
          
          this.index++;
          console.log("Ahora el index tiene "+this.index);
          
          //SE GUARDA LA RUTA ACTUAL EN UN TEMPORAL CREADO EN EL DOM
          if(!document.getElementById("temp")){
              
              $("<input type='hidden' id='temp'>").appendTo("body");
              document.getElementById("temp").value = this.url;
              console.log("Se creo un input con valor "+document.getElementById("temp").value);
          }
          
          for(var i = 0; i <= this.index; i++){
              
              var ruta = document.getElementById("temp").value;
              //SE VUELVE A USAR AJAX
              
              $.ajax({
                  url: ruta,
                  type: "GET",
                  dataType: "jsonp",
                  success: function(data){
                      
                      document.getElementById("temp").value = data.pagination.next_url;
                      
                  },
                  error: function(jqXHR,textStatus,error){
                      console.log(error);
                  }
              });
          }
          
          //UNA ÚLTIMA LLAMADA AJAX PARA IMPRIMIR LAS FOTOS DE LA ÚLTIMA PÁGINA OBTENIDA
          
          ruta = document.getElementById("temp").value;
          $.ajax({
              url: ruta,
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                  
                  data.data.forEach(function(elemento,index,array){
                      
                      var url = elemento.images.standard_resolution.url;
                      var etiqueta = '<img src="'+url+'">';
                      $("."+item).append(etiqueta);
                  });
                  
              },
              error: function(jqXHR,textStatus,error){
                  console.log(error);
              }
          });
          
      }
      
  }
  
}
