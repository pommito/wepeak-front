import './ParticipationsCard.scss';

const ParticipationsCard = () => {
  return (
    <div className="ParticipationsCard">
      <h4 className="ParticipationsCard-title">
        Mes participations à venir (8)
      </h4>
      <div className="ParticipationsCard-list">
        <div className="ParticipationsCard-list-item">
          <div className="ParticipationsCard-list-item-imgContainer">
            <img src="" alt="" />
          </div>
          <div className="ParticipationsCard-list-item-content">
            <p className="ParticipationsCard-list-item-content-name">Nom</p>
            <p className="ParticipationsCard-list-item-content-sport">Sport</p>
            <p className="ParticipationsCard-list-item-content-location">
              Lieu
            </p>
            <p className="ParticipationsCard-list-item-content-date">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipationsCard;
