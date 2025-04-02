//João Victor, Jordan, José

let total = 0;
var n1, media;
for(u=0;u<=2;u++){
  for(i=0;i<=2;i++){
    n1 = Number(prompt("digite sua nota(de 0 a 100):"));
    total = total + n1;
  }
  media = total/3;
  alert("Sua média é "+media);

  f = Number(prompt("digite sua frequencia em porcentagem:"));

  if(media>=60 && f>=75){
    alert("Aprovado");
  }
  else{
    alert("Reprovado");
          }
}
