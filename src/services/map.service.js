let isLoaded = false
let waiting = []

export function addScript() {
  const script = document.createElement('script')
  script.src =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCxYJxhuuvjduFFs89KybA68XCVgfUbNvE&libraries=places&callback=initGoogleMap'
  script.async = true
  window.initGoogleMap = initGoogleMap
  document.head.appendChild(script)
}

function initGoogleMap() {
  isLoaded = true
  waiting.forEach((item) => {
    if (typeof item.fn === 'function') {
      item.fn(...item.arguments)
    }
  })
  waiting = []
}

export function getLatLng(city) {
  if (!isLoaded) {
    waiting.push({ fn: getLatLng, arguments })
    return
  }
  const geocoder = new window.google.maps.Geocoder()
  return geocoder.geocode({ address: city }).then((result) => {
    return {
      lat: result.results[0].geometry.location.lat(),
      lng: result.results[0].geometry.location.lng(),
    }
  })
}

export function showMap(canvas, coords) {
  if (!isLoaded) {
    waiting.push({ fn: showMap, arguments })
    return
  }
  const mapOptions = {
    zoom: 10,
    center: new window.google.maps.LatLng(coords.lat, coords.lng),
    disableDefaultUI: true,
    zoomControl: true,
  }
  const map = new window.google.maps.Map(canvas, mapOptions)
  const position = new window.google.maps.LatLng(coords.lat, coords.lng)
  const marker = new window.google.maps.Marker({ position })
  marker.setMap(map)
}
