import React, { useState } from 'react';
import Modal from '../Modal';

// List of photo information
const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    // array of photo
    const [photos] = useState([
        {
            name: '',
            category: '',
            description: ''
        }
    ])

    //return photo model
    return (
        <div>
          {isModalOpen && (
            <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
          )}
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              {/*<img
                src={require(`../../assets/small/${category}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
            />*/}
            ))}
          </div>
        </div>
      );
};

export default PhotoList;