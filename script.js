var jcontent = {
  "theSymbol": "",
  "thePrice": "",
  "theVolume": ""
}

fetch('https://alpha-vantage.p.rapidapi.com/query?symbol=RDS-A&function=GLOBAL_QUOTE', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839',
  },
})

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    jcontent.theSymbol = data["Global Quote"]["01. symbol"];
    jcontent.thePrice = data["Global Quote"]["05. price"];
    jcontent.theVolume = data["Global Quote"]["06. volume"];
    console.log(jcontent);

  })


  .then(function (data) {
    var output = document.getElementById("output");
    output.innerHTML = jcontent.theSymbol + ' ' + jcontent.thePrice + ' ' + jcontent.theVolume;

    console.log(data);
  });

var jcontent2 = {
  "theSymbol": "",
  "thePrice": "",
  "theVolume": ""
}

fetch('https://alpha-vantage.p.rapidapi.com/query?symbol=TSLA&function=GLOBAL_QUOTE', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839',
  },
})

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    jcontent2.theSymbol = data["Global Quote"]["01. symbol"];
    jcontent2.thePrice = data["Global Quote"]["05. price"];
    jcontent2.theVolume = data["Global Quote"]["06. volume"];
    console.log(jcontent);

  })


  .then(function (data) {
    var output = document.getElementById("output2");
    output.innerHTML = jcontent2.theSymbol + ' ' + jcontent2.thePrice + ' ' + jcontent2.theVolume;

    console.log(data);
  });


var jcontent3 = {
  "theSymbol": "",
  "thePrice": "",
  "theVolume": ""
}

fetch('https://alpha-vantage.p.rapidapi.com/query?symbol=LEVI&function=GLOBAL_QUOTE', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839',
  },
})

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    jcontent3.theSymbol = data["Global Quote"]["01. symbol"];
    jcontent3.thePrice = data["Global Quote"]["05. price"];
    jcontent3.theVolume = data["Global Quote"]["06. volume"];
    console.log(jcontent);

  })


  .then(function (data) {
    var output = document.getElementById("output3");
    output.innerHTML = jcontent3.theSymbol + ' ' + jcontent3.thePrice + ' ' + jcontent3.theVolume;

    console.log(data);
  });
