function getInfo(event){
    var elements = event.currentTarget;
    var name= elements[0].value;
  
    console.log("Name: ", name);
    event.preventDefault();
  
    var request = new XMLHttpRequest();
    var api = 'https://meowfacts.herokuapp.com/';
    console.log(api);
    request.open('GET', api);
    request.send();
    
    request.onload = ()=>{
      console.log(request.status);
      
      // console.log(request.responseText);
      var div= document.getElementById("data");
      var result = JSON.parse(request.responseText);
      
      // console.log(result.data);
      
      var text=document.createTextNode(result.data);
      var para = document.createElement('p');
      para.append(text);
      div.append(para);
      div.insertBefore(para, div.firstChild);
    }
  }
  
  document.getElementById("getInfo").addEventListener("submit", getInfo, false);