const adressListRef = document.querySelector('.contacts_adress-list');

adressListRef.addEventListener('click', onActiveItemClick)

function onActiveItemClick(event) {
   if(event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveItem = event.currentTarget.querySelector('.active-item-adress');
  if(currentActiveItem) {
    currentActiveItem.classList.remove('active-item-adress');
  }

  const nextListItem = event.target;
  nextListItem.classList.add('active-item-adress');

}



function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 49.842, lng: 24.031 },
      zoom: 18,
    });
  }

