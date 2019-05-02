document.getElementById("body").innerHTML = "hello, world?";

var uri = "https://secure3.convio.net/skech/site/CRConsAPI";
//   ,postdata = "method=getTopDonors&v=1.0&api_key=skech$auth=[S42]";
//
// function makeXhrRequest() {
//   xhr = new XMLHttpRequest();
//   xhr.open("POST", uri, true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//     }
//   };
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.send(postdata);
// }

// makeXhrRequest();

const Http2 = new XMLHttpRequest();
const url2 =
  "https://secure3.convio.net/skech/site/SRConsAPI?method=getSingleSignOnToken&api_key=skech&login_name=skechapi&login_password=&v=1.0";
Http.open("POST", url2);
Http.send();
Http.onreadystatechange = e => {
  console.log(Http.responseText);
};
const Http = new XMLHttpRequest();
const url =
  "https://secure3.convio.net/skech/site/CRTeamraiserAPI?method=getTopDonors&v=1.0&api_key=skech&fr_id=1140";
Http.open("GET", url);
Http.send();
Http.onreadystatechange = e => {
  console.log(Http.responseText);
};
