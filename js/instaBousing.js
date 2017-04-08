/*Open Source Library for Frontend development with Instagram API
This code was made in Caracas, Venezuela, started in April 4th 2017
Is for free use.
 Jorge Bou-saad
*/

//LETS CREATE A JAVASCRIPT PROTOTYPE



var instaBousing = function(token,selector){
    
    //ATRIBUTES
    this.token = token; //ATRIBUTE FOR THE ACCES TOKEN
    this.selector = selector;
    this.url = ""; //ATRIBUTE FOR THE URL OF INSTAGRAM API
    this.userId = ""; //ATRIBUTE FOR THE ID OF USER
    this.media = new media(token,selector);
    
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
    

}



var ib = new instaBousing("225931655.1677ed0.63d4ae8077bf4ceeb72d7023cba1804c","grid");

ib.media.IsotopeInit("grid-item","fitRows"); 
ib.media.fotosAppend("grid-item");




