// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',itemsMarkup);

function galleryItemsMarkup(galleryItems){
    return galleryItems
    .map( ({preview,original,description}) => 
   {return `<a class="gallery__item" href=${original}>
            <img class="gallery__image" 
            src=${preview} 
            alt=${description} 
            />
            </a>`;
})
.join('');
};

const lightbox = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionsDelay: 250,
}
);