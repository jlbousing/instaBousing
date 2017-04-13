# instaBousing

# What is ? 

   Is an Open Source library for use Instagram API with an easy way throught oriented object programming and Jquery Isotope.

# How use ?

   you must download the file instaBousing.js and JqueryIsotope call it in your HTML index like that:
   
   <script src="SomeWhereOfYourHD/isotope.js"></script>
   <script src="SomeWhereOfYourHD/instaBousing.js"></script>
   
   The use of Isotope is not necesary but instaBousingJS allow apply the isotope's loyout. For more info: http://isotope.metafizzy.co
   
   
   Then, in your main script create a instaBousing object and call methods for show contents.
   
   
       var ib = new instaBousing("ACCES_TOKEN","DIVCLASS PIVOT OF ISOTOPE");
       
       //EXECUTE METHODS FOR SHOW CONTENTS OF MEDIA
       ib.media.IsotopeInit("item of isotpe grid","fitRows"); 
       ib.media.fotosAppend("item of isotope grid","standard_resolution"); //IN THIS CASE standard_resolution

       /* METHODS FOR SHOW CONTENTS SEARCHED BY A HASHTAG (YOU MUST NEED PERMISSION OF INSTAGRAM API: SEE https://www.instagram.com/developer/review/ */

      ib.tagInit("QueBellaEsLaLoca");
      ib.hashtag.fotosAppend("item of isotope grid","standard_resolution"); //IN THIS CASE standard_resolution
   
   
   
   LIST OF RESOLUTION:
   
      - Standard_resolution
      -Thumbnails
      -Low_resolution
 
This code was made in Caracas, Venezuela by Jorge Luis Bou-saad. Is for free use. Enjoy and Happy Coding!!
