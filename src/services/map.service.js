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

export function showMap(canvas, lat, lng) {
  if (!isLoaded) {
    waiting.push({ fn: showMap, arguments })
    return
  }
  const mapOptions = {
    zoom: 10,
    center: new window.google.maps.LatLng(lat, lng),
    disableDefaultUI: true,
    zoomControl: true,
  }
  const map = new window.google.maps.Map(canvas, mapOptions)
  const position = new window.google.maps.LatLng(lat, lng)
  const marker = new window.google.maps.Marker({ position })
  marker.setMap(map)
}
