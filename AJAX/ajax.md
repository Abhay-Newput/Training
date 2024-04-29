# AJAX

Ajax stands for Asynchronus Javascript and XML.

- Ajax is not a programming language.
- Ajax jus uses a combination of:
  - A browser build-in XMLHttpRequest object (to request data from web server)
  - Javascript and Html DOM (to display or use the data)

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

# XmlHttpRequest vs HttpRequest

**XMLHttpRequest**:

- is an API in the web browser that allows JavaScript code to make HTTP requests to web servers.
- It is commonly used to retrieve data from a server without having to refresh the entire page. This technique is known as - AJAX (Asynchronous JavaScript and XML).
- Despite the name, XMLHttpRequest can be used to request any type of data, not just XML.

**HttpRequest**:

- is a generic term referring to any request made using the HTTP protocol. It encompasses a wide range of HTTP requests, including those made by various programming languages, frameworks, and libraries.

# AJAX XMLHttp

- **Create an XMLHttpRequest Object**

var xhhtp = new XMLHttpRequest()

- **Send a Request To a Server**

  - GET Request
    xhttp.open("GET", "ajax_info.txt", true); // open(method, url, async)
    xhttp.send();

  - POST Request
    To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:

            xhttp.open("POST", "demo_post2.asp", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");   //setRequestHeader(header, value)
            xhttp.send("fname=Henry&lname=Ford");
