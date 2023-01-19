const searchfun = () =>{
let filter = document.getElementById("myInput").value.toUpperCase();
let Table =document.getElementById("Table");

let tr =Table.getElementsByTagName("tr");

for(var i=0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName("td")[0];

    if(td){
        let textvalue = td.innerHTML;
        if(textvalue.toUpperCase().includes(filter)){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display="none";
        }
    }
}
}
