/*
 * Open Source Library for Frontend development with Instagram API
 * This code was made in Caracas, Venezuela, started in April 4th 2017
 * Is for free use.
 *  Jorge Bou-saad
 */
// The module of instaBousing for media.
function media(token, selector) {
    this.token = token;
    this.url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token;
    this.info = "";
    this.index = 0;
    this.selector = selector; // Class of selector div for the isotope.
    this.setToken = function (value) {
        this.token = value;
    };
    this.setIndex = function (value) {
        this.index = value;
    };
    this.setInfo = function (value) {
        this.info = value;
    };
    // Getters.
    this.getToken = function () {
        return this.token;
    };
    this.getUrl = function () {
        return this.url;
    };
    this.getIndex = function () {
        return this.index;
    };
    this.getInfo = function () {
        return this.info;
    };
    // The method to get the information JSON of the API.
    this.fotosAppend = function (item, resolution) {
        var url, label;
        $.ajax({
            url: this.url,
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                data.data.forEach(function (elemento) {
                    if (resolution == "standard_resolution") {
                        url = elemento.images.standard_resolution.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                    else if (resolution == 'low_resolution') {
                        url = elemento.images.low_resolution.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                    else {
                        url = elemento.images.thumbnail.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                });
                document.getElementById("temp").value = data.pagination.next_url;
            },
            error: function (jqXHR, textStatus, error) {
                console.error(error);
            }
        });
    };
    // Initialize the isotope with the selector atribute.
    this.IsotopeInit = function (item, loyout) {
        $("." + this.selector).isotope({
            itemSelector: item,
            layoutMode: loyout
        });
    };
    this.LoadMore = function (item, resolution) {
        var url, label, path = document.getElementById("temp").value;
        $.ajax({
            url: path,
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                data.data.forEach(function (elemento) {
                    if (resolution == "standard_resolution") {
                        url = elemento.images.standard_resolution.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                    else if (resolution == 'low_resolution') {
                        url = elemento.images.low_resolution.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                    else {
                        url = elemento.images.thumbnail.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                });
                // The following path is saved in the temporary.
                document.getElementById("temp").value = data.pagination.next_url;
            },
            error: function (jqXHR, textStatus, error) {
                console.error(error);
            }
        });
        // Remove the load more button when you reach the last page.
        if (typeof (document.getElementById("temp").value) == "undefined") {
            $("#button").remove();
        }
    };
}
// The module of instaBousing for photos with a hashtag
function hashtag(token, tag) {
    this.token = token,
        this.tag = tag,
        /*jshint -W030 */
        this.setTag = function (value) {
            this.tag = value;
        };
    this.getTag = function () {
        return this.tag;
    };
    this.fotosAppend = function (item, resolution) {
        var url, label;
        $.ajax({
            url: 'https://api.instagram.com/v1/tags/' + this.tag + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: token },
            success: function (data) {
                document.getElementById("temp").value = data.pagination.next_url;
                data.data.forEach(function (elemento) {
                    if (resolution == "standard_resolution") {
                        url = elemento.images.standard_resolution.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                    else if (resolution == 'low_resolution') {
                        url = elemento.images.low_resolution.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                    else {
                        url = elemento.images.thumbnail.url;
                        label = '<img src="' + url + '">';
                        $("." + item).append(label);
                    }
                });
            },
            error: function (data) {
                console.error(data);
            }
        });
    };
}
// Let's create a javascript prototype.
var instaBousing = function (token, selector) {
    // Attributes.
    this.token = token; // Attribute for the access token.
    this.selector = selector;
    this.url = ""; // Attribute for the URL of Instagram API.
    this.userId = ""; // Attribute for the id of the user.
    this.media = new media(token, selector);
    this.hashtag = new hashtag(token, ""); // The tag is "" by default.
    // Setters.
    this.setToken = function (value) {
        this.token = value;
    };
    this.setUrl = function (value) {
        this.url = value;
    };
    this.setUserID = function (value) {
        this.userId = value;
    };
    // Getters.
    this.getToken = function () {
        return this.token;
    };
    this.getUrl = function () {
        return this.url;
    };
    this.getUserId = function () {
        return this.userId;
    };
    this.getMedia = function () {
        return this.media;
    };
    // A temporary document is created to store the next path.
    $("<input type='hidden' id='temp'>").appendTo("body");
    this.tagInit = function (value) {
        this.hashtag.setTag(value);
    };
};
