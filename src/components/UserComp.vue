<template>

 <div class="hello">

      <hr>

   <p>
      Her er en oversigt over brugerne der skal vil du se en gennemgang af produkter som du kan ligge i kurven<br>
   <hr>  
<ul>
<h1>Navn: {{name}} </h1>
 <h1>Fødselsdag:   {{Dateofbirth}} </h1>
 <h1> Adresse:   {{Address}} </h1>
 <h1>Køn: {{ Gender}} </h1>
 <h1>By:   {{City}} </h1>
 <h1>bykode:   {{CountryCode}} </h1>
 <h1>Email: {{Email}} </h1>
 <h1>Betalingsmulighed: {{PaymentO}} </h1>
  
</ul>
<hr>
<ul>
<h1>Navn: {{name1}} </h1>
 <h1>Fødselsdag:   {{Dateofbirth1}} </h1>
 <h1> Adresse:   {{Address1}} </h1>
 <h1>Køn: {{ Gender1}} </h1>
 <h1>By:   {{City1}} </h1>
 <h1>bykode:   {{CountryCode1}} </h1>
 <h1>Email: {{Email1}} </h1>
<h1>Betalingsmulighed: {{PaymentO1}} </h1>
  
</ul>

<hr>
<ul>
<h1>Navn: {{name2}} </h1>
 <h1>Fødselsdag:   {{Dateofbirth2}} </h1>
 <h1> Adresse:   {{Address2}} </h1>
 <h1>Køn: {{ Gender2}} </h1>
 <h1>By:   {{City2}} </h1>
 <h1>bykode:   {{CountryCode2}} </h1>
 <h1>Email: {{Email2}} </h1>
<h1>Betalingsmulighed: {{PaymentO2}} </h1>
  
</ul>
<hr>

<ul>
<h1>Navn: {{name3}} </h1>
 <h1>Fødselsdag:   {{Dateofbirth3}} </h1>
 <h1> Adresse:   {{Address3}} </h1>
 <h1>Køn: {{ Gender3}} </h1>
 <h1>By:   {{City3}} </h1>
 <h1>bykode:   {{CountryCode3}} </h1>
 <h1>Email: {{Email3}} </h1>
<h1>Betalingsmulighed: {{PaymentO3}} </h1>
  
</ul>

</div>
 </template>

<script>

export default {
  name: 'UserComp',
  data: function(){
return {
    name: 'Peter hansen',
    Dateofbirth: "0404",
    Address: "Petersvej 7",
    Gender: 'M',
    City: 'Petersborg',
    CountryCode: '7110',
    Email: 'peter@gmail.com',
   PaymentO: "MasterCard",


name1: 'Hans Hansen',
    Dateofbirth1: "0404",
    Address1: "Hansensvej 7",
    Gender1: 'M',
    City1: 'hansenborg',
    CountryCode1: '7110',
    Email1: 'hans@gmail.com',
   PaymentO1: "MasterCard",



    name2: 'Kathrine kathrinesen',
    Dateofbirth2: "0404",
    Address2: "kathrinevej 7",
    Gender2: 'M',
    City2: 'kathrinebjerg',
    CountryCode2: '7110',
    Email2: 'kathrine@gmail.com',
   PaymentO2: "MasterCard",


   name3: 'Niels Nielsen',
    Dateofbirth3: "0404",
    Address3: "Nielsvej 7",
    Gender3: 'M',
    City3: 'Nielssborg',
    CountryCode3: '7110',
    Email3: 'Niels@gmail.com',
   PaymentO3: "MasterCard"




  }
  }
}



  </script>