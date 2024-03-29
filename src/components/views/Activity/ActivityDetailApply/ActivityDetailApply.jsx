import './ActivityDetailApply.scss';

const ActivityDetailApply = () => {
  return (
    <div className="Activity-detailsAndApply">
      <div className="Activity-detailsAndApply-description">
        <h3>Description</h3>
        <p>
          Il s'agit d'enchaîner la montée de la combe du Grand Crêt, passer le
          trou de la Mouche pour basculer à droite sur le couloir SE du Trou de
          la Mouche (5min du trou), arriver dans le beau, grand et silencieux
          vallon de Tré le Crot qu'il faut remonter vers le nord pour atteindre
          une crête orientée plein E. Ensuite, on franchit le passage de la
          Grande Forclaz et dévaler la combe du même nom avant de revenir via le
          bas de Tardevant et Paccaly, à notre point de départ.
        </p>
      </div>

      <button type="button" className="Activity-detailsAndApply-apply">
        Participer
      </button>
    </div>
  );
};

export default ActivityDetailApply;
