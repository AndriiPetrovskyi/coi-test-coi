const adressListRef = document.querySelector('.contacts_adress-list');

console.log(adressListRef)

adressListRef.addEventListener('click', (event) => {
    console.log(event.target)
})

























function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 49.842, lng: 24.031 },
      zoom: 18,
    });
  }

