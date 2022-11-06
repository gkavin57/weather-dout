async function restdata(){
    let res=await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    let res1= await res.json();
    console.log(res1);
    // console.log(res1[0].name);
    // console.log(res1[0].latlng);
    try {
        for(var i=0;i<res1.length;i++){
        var name=res1[i].name;
        var latlong=res1[i].latlng;
        if(latlong.length===undefined){
            throw new Error("invalid coordinates");
        }
        opendata(name,...latlong);
        }
    } catch (error) {
        console.log("invalid"+error.message);
    }
    }
    //lat:33
    //lon:65
    async function opendata(name,lat,lon){
    try {
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`);
    let res1= await res.json();
    console.log(`Country name:${name} , Temp:${res1.main.temp}`);
    } catch (error) {
        console.log(error.message);
    }
    }
    
    
    restdata();