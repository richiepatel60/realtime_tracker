const socket = io();

if (navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
    const {latitude, longitude} = position.coords;  
    socket.emit("sendLocation", {latitude, longitude});
    },
    (err) => {
        console.log("Error getting location", err);
    },
    // Options for geolocation
    {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    });
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attrubution: "by Richie Patel"
}).addTo(map)

const markers = {};

socket.on("receive-location", (data)=>{
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude]);
    if (markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
})

socket.on("user-disconnected", (id) => {
    if (markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});