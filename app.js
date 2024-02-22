
function cargarTendencias() {
    const apiKey = 'pWyTBl9Twn7NM2jANxpEf2RO08KZwWnA';
  
  
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;
  

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const gifs = data.data;
  
   
        const container = document.getElementById('tendencias-container');
        container.innerHTML = '';
  
        gifs.forEach(gif => {
          const gifUrl = gif.images.fixed_height.url;
          const imgElement = document.createElement('img');
          imgElement.src = gifUrl;
          imgElement.alt = gif.title;
          container.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.error('Error al cargar tendencias:', error);
      });
  }
  
  const cargarTendenciasBtn = document.getElementById('cargarTendenciasBtn');
  cargarTendenciasBtn.addEventListener('click', cargarTendencias);
  