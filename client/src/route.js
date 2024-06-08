import React, {useState} from "react";
import './route.css';

function RouteSet() {
  const [path, setPath] = useState("/");
  const [description, setDescription] = useState("Get all users");
  const [isEditingPath, setIsEditingPath] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handlePathDoubleClick = () => {
    setIsEditingPath(true);
  };

  const handlePathBlur = (event) => {
    setIsEditingPath(false);
    setPath(event.target.textContent);
  };

  const handlePathKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditingPath(false);
      setPath(event.target.textContent);
    }
  };

  const handleDescriptionDoubleClick = () => {
    setIsEditingDescription(true);
  };

  const handleDescriptionBlur = (event) => {
    setIsEditingDescription(false);
    setDescription(event.target.textContent);
  };

  const handleDescriptionKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditingDescription(false);
      setDescription(event.target.textContent);
    }
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="route">
      <div className="div-17">
                  <div className="div-18">
                    <div className="div-19">
                      <div className="div-20">Method</div>
                      <div className="div-21">
                        <div className="div-22">GET</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3740159fede7d745238d28409d46413d2074eff240ad470daa78c0e53818a174?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                          className="img"
                        />
                      </div>
                    </div>
                    <div className="div-23">
                      <div className="div-24">DB</div>
                      <div className="div-25">Mongo DB</div>
                      <div className="div-26">URI</div>
                      <div className="div-27">mongouriexample..</div>
                    </div>
                  </div>
                  <div className="div-28">
                    <div className="div-29">Path</div>
                    <div className="div-30">{path}
                     <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcfa47ae4c71a71bd9eb656168e957868fa01e334114bdb862d484c675d2ae?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                        className="add"
                        onClick={toggleDropdown}
                      />
                      {dropdownVisible && (
              <div className="dropdown-menu-path">
                <div className="dropdown-item" onClick={() => setPath("/path1")}>/path1</div>
                <div className="dropdown-item" onClick={() => setPath("/path2")}>/path2</div>
                <div className="dropdown-item" onClick={() => setPath("/path3")}>/path3</div>
              </div>
            )}
                    </div>
                  </div>
                  <div className="div-31">
                    <div className="div-32">Description</div>
                    <div className={`div-33 ${isEditingDescription ? 'editable' : ''}`}
            onDoubleClick={handleDescriptionDoubleClick}
            onBlur={handleDescriptionBlur}
            onKeyDown={handleDescriptionKeyDown}
            contentEditable={isEditingDescription}
            suppressContentEditableWarning={true}>
            {description}
                    </div>
                  </div>
                  </div>
                  </div>
  );
}

export default RouteSet;