import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiImageAddFill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

import {
  changeInputSearch,
  fetchCitiesSearch,
  resetSearch,
} from '../../../actions/searchActions';
import { fetchActivitiesFromCity } from '../../../actions/activityActions';
import Map from './Map/Map';

import './CreateActivity.scss';
import imageByDefault from '../../../assets/images/image_placeholder.png';
import InputSearch from './InputSearch/InputSearch';

const CreateActivity = () => {
  const [image, setImage] = useState(null);
  const today = new Date().toISOString().split('T')[0];

  const handleImageChange = (e) => {
    // we get the first file selected by the user from the input
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setImage(null);
  };

  return (
    <main className="CreateActivity">
      <h1 className="CreateActivity-title">Création d&apos;une activité</h1>
      <form action="" className="CreateActivity-form">
        <div className="CreateActivity-form-left">
          <label htmlFor="title">Titre</label>
          <input type="text" id="title" name="title" required />
          <div className="CreateActivity-form-left-thumbnail">
            {!image ? (
              <img src={imageByDefault} alt="par défaut" />
            ) : (
              <img src={image} alt="thumbnail of the activity" />
            )}
            {image && (
              <FaTrashAlt
                className="CreateActivity-form-left-thumbnail-delete"
                onClick={handleResetImage}
              />
            )}
          </div>
          <div className="CreateActivity-form-left-wrapper">
            <div className="CreateActivity-form-left-wrapper-row">
              <legend>Photo</legend>
              <input
                type="file"
                id="upload-picture"
                accept="image/*"
                onChange={handleImageChange}
                className="CreateActivity-form-left-wrapper-row-input"
              />
              <label
                htmlFor="upload-picture"
                className="CreateActivity-form-left-wrapper-row-button"
              >
                Choisir une image
                <RiImageAddFill />
              </label>
            </div>
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="sport">Sport</label>
              <select id="sport" name="sport" required>
                <option value="0">Selectionner</option>
                <option value="1">Sport 1</option>
                <option value="2">Sport 2</option>
                <option value="3">Sport 3</option>
              </select>
            </div>
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="10"
            maxLength="1000"
            minLength="100"
            required
          />
        </div>
        <div className="CreateActivity-form-right">
          <label htmlFor="area">Lieu</label>
          <div className="CreateActivity-form-right-area">
            <InputSearch id="area" />
          </div>
          <div className="CreateActivity-form-right-map">
            <Map />
          </div>
          <div className="CreateActivity-form-left-wrapper">
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                value={today}
                required
              />
            </div>
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="time">Heure de départ</label>
              <input type="time" id="time" name="time" required />
            </div>
          </div>
          <div className="CreateActivity-form-left-wrapper">
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="groupSize">Taille du groupe</label>
              <select id="groupSize" name="groupSize" required>
                <option value="0">Selectionner...</option>
                <option value="2-5">Moins de 5 personnes</option>
                <option value="6-10">Moins de 10 personnes</option>
                <option value="11+">Plus de 10 personnes</option>
              </select>
            </div>
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="difficulty">Niveau de difficulté</label>
              <select id="difficulty" name="difficulty" required>
                <option value="0">Selectionner...</option>
                <option value="1">Facile</option>
                <option value="2">Moyen</option>
                <option value="3">Difficile</option>
              </select>
            </div>
          </div>
          <button type="submit" className="CreateActivity-form-button">
            Créer mon activité
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateActivity;
