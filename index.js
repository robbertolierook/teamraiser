document.getElementById("body").innerHTML = "hello, world";

var uri = "https://secure3.convio.net/skech/site/CRConsAPI",
  postdata = "method=getTopDonors&v=1.0&api_key=skech";

function makeXhrRequest() {
  xhr = new XMLHttpRequest();
  xhr.open("POST", uri, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(postdata);
}

makeXhrRequest();
