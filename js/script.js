function copyAddy(){
    var check=document.getElementById("sameaddy");
    var billaddy=document.getElementById("streetaddybill");
    var shipaddy=document.getElementById("streetaddyship");

    var billcity=document.getElementById("citybill");
    var shipcity=document.getElementById("cityship");

    var billstate=document.getElementById("statebill");
    var shipstate=document.getElementById("stateship");

    var billzip=document.getElementById("zipbill");
    var shipzip=document.getElementById("zipship");
    if(check.checked==true){
        shipaddy.value=billaddy.value;
        shipcity.value=billcity.value;
        shipstate.value=billstate.value;
        shipzip.value=billzip.value;
    }
}