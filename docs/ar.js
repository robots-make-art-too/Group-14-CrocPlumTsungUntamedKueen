window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
    let places = staticLoadPlaces();
    renderPlaces(places);
    console.log('Hello');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition (
                gpspos=> {
                    console.log(`Lat ${gpspos.coords.latitude} Lon ${gpspos.coords.longitude}`); // show on the console
                },
                err=> {
                    alert(`An error occurred: ${err.code}`);
                }
            );
    } else {
        alert("Sorry, geolocation not supported in this browser");
    }
};


function staticLoadPlaces() {
     return [
         {
             name: 'myModels',
             location: {
                 lat: 43,
                 lng: -78,
             }
         },
     ];
}

var models = [
{
    },
    {
        url: './Assets/dirt.glb',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Dirt, HP 100/100',
        message: 'Time to Grow!'
    },

];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
     let scene = document.querySelector('a-scene');

     places.forEach((place) => {
         let latitude = place.location.lat;
         let longitude = place.location.lng;

         let model = document.createElement('a-entity');
         model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

         setModel(models[modelIndex], model);

         model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

         scene.appendChild(model);
     });
}