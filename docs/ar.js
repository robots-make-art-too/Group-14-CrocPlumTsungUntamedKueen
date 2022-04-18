window.onload = () => {
  const button = document.querySelector('button[data-action="change"]');
  button.innerText = '﹖';
}
var models = [
  {
    url: 'dirt.gltf',
    scale: '0.05 0.05 0.05',
    rotation: '0 0 0',
  },
  {
      url: 'Seed.gltf',
      scale: '0.05 0.05 0.05',
      rotation: '0 0 0',
    
  },
  {
      url: 'SunFlower.gltf',
      scale: '0.05 0.05 0.05',
      rotation: '0 0 0',
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

  setModel(models[modelIndex], model);

  model.setAttribute('animation-mixer', '');

 document.querySelector('button[data-action="change"]').addEventListener('click', function () {
 var newIndex = modelIndex % models.length;
 setModel(models[newIndex], entity);
});

scene.appendChild(model);
};


