function getListings(){$.ajax({type:"GET",url:"/listings",success:function(a){console.log("From DB..."),appendListings(a)}})}function appendListings(a){for(var b=0;b<a.length;b++){var c=a[b],d=$(".viewListings").append();void 0===c.rent&&d.append('<div class="col-md-2 newListing "><img src="imgs/home.png" alt="house" class="img-responsive"><h4>'+c.city+"</h4><p>"+c.sqft+" sqft</p><p>For Sale: $"+c.cost+"</p></div>"),void 0===c.cost&&d.append('<div class="col-md-2 newListing"><img src="imgs/building.png" alt="building" class="img-responsive"><h4>'+c.city+"</h4><p>"+c.sqft+" sqft</p><p>For Rent: $"+c.rent+"</p></div>")}}$(document).ready(function(){console.log("HElloppppp"),getListings()});