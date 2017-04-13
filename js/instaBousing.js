/*Open Source Library for Frontend development with Instagram API
This code was made in Caracas, Venezuela, started in April 4th 2017
Is for free use.
 Jorge Bou-saad
*/

//MODULE OF instaBousing FOR MEDIA

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
  this.fotosAppend = function(item,resolution) {
    
       $.ajax({
          url: this.url,
          type: "GET",
          dataType: "jsonp",
          success: function(data){
            
            console.log(data.data[0]);
            
            data.data.forEach(function(elemento,index,array){
                
            if(resolution == "standard_resolution"){    
                
                var url = elemento.images.standard_resolution.url;
                
                var etiqueta = '<img src="'+url+'">';
                
                $("."+item).append(etiqueta);
            }
             else if(resolution == 'low_resolution'){
                 
                 var url = elemento.images.low_resolution.url;
                 var etiqueta = '<img src="'+url+'">';
                 $("."+item).append(etiqueta);
             }
              else{
                  
                  var url = elemento.images.thumbnail.url;
                  var etiqueta = '<img src="'+url+'">';
                  $("."+item).append(etiqueta);
              }
                
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
  
  this.LoadMore = function(item,resolution){    
      
       
      var ruta = document.getElementById("temp").value;
      
      $.ajax({
          url: ruta,
          type: "GET",
          dataType: "jsonp",
          success: function(data){
              
              data.data.forEach(function(elemento,index,array){
                  
                  
                if(resolution == "standard_resolution"){    
                
                   var url = elemento.images.standard_resolution.url;
                   var etiqueta = '<img src="'+url+'">';
                   $("."+item).append(etiqueta);
                }
                 else if(resolution == 'low_resolution'){
                 
                 var url = elemento.images.low_resolution.url;
                 var etiqueta = '<img src="'+url+'">';
                 $("."+item).append(etiqueta);
                }
                else{
                  
                  var url = elemento.images.thumbnail.url;
                  var etiqueta = '<img src="'+url+'">';
                  $("."+item).append(etiqueta);
                }
                  
                  
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



//MODULE OF instaBousing FOR PHOTOS WHITH A HASHTAG

function hashtag(token,tag){
    
    this.token = token,
    this.tag = tag,
    
    this.setTag = function(dato){
        this.tag = dato;
    }
    
    this.getTag = function(){
        return this.tag;
    }
    
    this.fotosAppend = function(item,resolution){
        
        $.ajax({
	          url: 'https://api.instagram.com/v1/tags/'+this.tag+'/media/recent',
	          dataType: 'jsonp',
	          type: 'GET',
	          data: {access_token: token},
	          success: function(data){
                            
                         document.getElementById("temp").value = data.pagination.next_url;
                         
                         data.data.forEach(function(elemento,index,array){
                             
                             
                             if(resolution == "standard_resolution"){    
                
                                  var url = elemento.images.standard_resolution.url;
                                  var etiqueta = '<img src="'+url+'">';
                                  $("."+item).append(etiqueta);
                            }
                             else if(resolution == 'low_resolution'){
                 
                                  var url = elemento.images.low_resolution.url;
                                  var etiqueta = '<img src="'+url+'">';
                                  $("."+item).append(etiqueta);
                           }
                           else{
                  
                              var url = elemento.images.thumbnail.url;
                              var etiqueta = '<img src="'+url+'">';
                              $("."+item).append(etiqueta);
                          }
                             
                             
                             
                         });

	                 },
	           error: function(data){
		                  console.log(data);
	                 }
              });
        
    }
    
}


//LETS CREATE A JAVASCRIPT PROTOTYPE


var instaBousing = function(token,selector){
    
    //ATRIBUTES
    this.token = token; //ATRIBUTE FOR THE ACCES TOKEN
    this.selector = selector;
    this.url = ""; //ATRIBUTE FOR THE URL OF INSTAGRAM API
    this.userId = ""; //ATRIBUTE FOR THE ID OF USER
    this.media = new media(token,selector);
    this.hashtag = new hashtag(token,""); //THE TAG ES "" BY DEFAULT
    
    //SETTERS
    this.setToken = function(dato){
        this.token = dato;
    }
    
    this.setUrl = function(dato){
        this.url = dato;
    }
    
    this.setUserID = function(dato){
        this.userId = dato;
    }
    
    //GETTERS
    
    this.getToken = function(){
        return this.token;
    }
    
    this.getUrl = function(){
        return this.url;
    }
    
    this.getUserId = function(){
        return this.userId;
    }
    
    this.getMedia = function(){
        return this.media;
    }
    
    
    //SE CREA UN TEMPORAL EN EL DOCUMENTO PARA ALMACENAR LA PRÓXIMA RUTA
    $("<input type='hidden' id='temp'>").appendTo("body");
    
   this.tagInit = function(dato){
       this.hashtag.setTag(dato);
   }
}



var ib = new instaBousing("225931655.1677ed0.63d4ae8077bf4ceeb72d7023cba1804c","grid");

ib.media.IsotopeInit("grid-item","fitRows"); 
ib.media.fotosAppend("grid-item","standard_resolution");

//ib.tagInit("QueBellaEsLaLoca");
//ib.hashtag.fotosAppend();



