import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';

import './EditProfile.scss';

const EditProfile = () => {
  return (
    <div className="EditProfile">
      <div className="EditProfile-imgContainer">
        <img
          src="https://ca.slack-edge.com/T060RPZMDH6-U061SDTH4TF-c278721b6e6d-512"
          alt=""
        />
      </div>
      <div className="EditProfile-nameAndEdit">
        <p className="EditProfile-nameAndEdit-name">Tom Fourage</p>
        <Link className="EditProfile-nameAndEdit-edit" to="/profile/edit">
          <BiEditAlt />
          <p>Modifier le profil</p>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
