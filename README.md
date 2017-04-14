# instaBousing

## What is ? 

   Is an Open Source library for use Instagram API with an easy way throught oriented object programming and Jquery Isotope.

## How use ?

   you must download the file instaBousing.js and JqueryIsotope call it in your HTML index like that:
   
   <script src="SomeWhereOfYourHD/isotope.js"></script>
   <script src="SomeWhereOfYourHD/instaBousing.js"></script>
   
   The use of Isotope is not necesary but instaBousingJS allow apply the isotope's loyout. For more info: http://isotope.metafizzy.co
   
   
   Then, in your main script create a instaBousing object and call methods for show contents.
   
   
       var ib = new instaBousing("ACCES_TOKEN","DIVCLASS PIVOT OF ISOTOPE");
       
       //EXECUTE METHODS FOR SHOW CONTENTS OF MEDIA
       ib.media.IsotopeInit("item of isotpe grid","fitRows"); 
       ib.media.fotosAppend("item of isotope grid","standard_resolution"); //IN THIS CASE standard_resolution

       /* METHODS FOR SHOW CONTENTS SEARCHED BY A HASHTAG (YOU MUST HAVE A PERMISSION OF INSTAGRAM API: SEE https://www.instagram.com/developer/review/ */

      ib.tagInit("MyHashtag");
      ib.hashtag.fotosAppend("item of isotope grid","standard_resolution"); //IN THIS CASE standard_resolution
   
   
## Display images

   The images are received throught AJAX calls to the url of the API. Those URLs give a JSON with all information about the account, profile, media, etc. For display images we need the url of each photos in a specific resolution. Once we receive the images url we can display with img of HTML. That code was writed inside AJAX calls in methods like FotosAppend and LoadMore of media and Hashtag class, but we can modify that tag for add css styles inside the tag or add a class/id and modify in a css file.   
   
   
   ##LIST OF RESOLUTION:
   
      - Standard_resolution
      -Thumbnails
      -Low_resolution
 
 
This code was made in Caracas, Venezuela by Jorge Luis Bou-saad. Is for free use. Enjoy and Happy Coding!!
