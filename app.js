let uploadedImage;

const producto = document.getElementById('producto');
const boton = document.querySelector('#boton-crear');
const description = document.getElementById('descripcion-producto');


document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage = e.target.result;
            console.log('Image uploaded:', uploadedImage);
        };

        reader.readAsDataURL(file);
    }
});

function createProduct() {
    if (uploadedImage && description.value != "") {
        

        let productoNuevo = document.createElement('div');
		productoNuevo.classList.add('producto');

        // Icono eliminar
		let eliminar = document.createElement('i');
		eliminar.classList.add('bi', 'bi-trash3');
		productoNuevo.appendChild(eliminar);
		eliminar.addEventListener('click',eliminarProducto);

        // Añadir imagen
        let imagenProducto = document.createElement('div');
        imagenProducto.classList.add('imagen');
        imagenProducto.innerHTML = `<img src="${uploadedImage}" alt="">`;
        productoNuevo.appendChild(imagenProducto);


        // Descripcion ingresada por el usuario
		let descripcionProducto = document.createElement('p');
        descripcionProducto.classList.add('descripcion');
		descripcionProducto.innerText = description.value;
		productoNuevo.appendChild(descripcionProducto);

        // Crear y agregar contenedor de iconos

		let footer = document.createElement('div');
		footer.classList.add('footer');
		productoNuevo.appendChild(footer);

        	// Iconos
		let boton = document.createElement('button');
		boton.classList.add('comprar');
        boton.innerText = 'COMPRAR'
		productoNuevo.appendChild(boton);

		let like = document.createElement('i');
		like.classList.add('bi','bi-heart-fill');

		footer.append(boton,like);

        producto.appendChild(productoNuevo);

    } else {
        alert('Falta subir la imagen o completar la descripción');
    }
}

function eliminarProducto(e){
	let producto = e.target.parentNode;
	producto.remove();
}

boton.addEventListener('click',createProduct);
