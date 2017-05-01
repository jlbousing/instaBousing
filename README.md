# instaBousing

## What is it?

Is an Open Source library to use Instagram API with an easy way through oriented object programming and Jquery Isotope.

## How to use it?

## Getting started
   
   You can install with npm:
   
   ```batch
npm install instabousing
```

You must download the file instaBousing.js and JqueryIsotope call it in your HTML index like that:

```html
<script src="SomeWhereOfYourHD/isotope.js"></script>
<script src="SomeWhereOfYourHD/instaBousing.js"></script>
```

The use of Isotope is not necessary but instaBousingJS allow apply the isotope's layout. For more info: <http://isotope.metafizzy.co>

Then, in your main script create an instaBousing object and call methods for show contents.

```js
var ib = new instaBousing("ACCES_TOKEN","DIVCLASS PIVOT OF ISOTOPE");

//EXECUTE METHODS FOR SHOW CONTENTS OF MEDIA
ib.media.IsotopeInit("item of isotpe grid","fitRows");

ib.media.setHtmlTag('<img src="'+ib.media.url+'">'); //YOU CONFIGURE HERE YOUR IMG TAG

ib.media.fotosAppend("item of isotope grid","standard_resolution"); //IN THIS CASE standard_resolution

/* METHODS FOR SHOW CONTENTS SEARCHED BY A HASHTAG (YOU MUST HAVE A PERMISSION OF INSTAGRAM API: SEE https://www.instagram.com/developer/review/ */

ib.tagInit("MyHashtag");
ib.hashtag.fotosAppend("item of isotope grid","standard_resolution"); //IN THIS CASE standard_resolution
```

## Display images

The images are received through AJAX calls to the URL of the API. Those URLs give a JSON with all information about the account, profile, media, etc. For display images, we need the URL of each photo in a specific resolution. Once we receive the images URL we can display with IMG of HTML. That code was written inside AJAX calls in methods like FotosAppend and LoadMore of media and Hashtag class, but we can modify that tag for add CSS styles inside the tag or add a class/id and modify in a CSS file.

## List of resolution

- Standard_resolution
- Thumbnails
- Low_resolution

## Example

   http://jorgebou-saad.esy.es/instabexample.html

This code was made in Caracas, Venezuela by Jorge Luis Bou-saad. Is for free use. Enjoy and Happy Coding!!
