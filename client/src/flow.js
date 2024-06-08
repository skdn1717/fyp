import React, {useState} from "react";
import './flow.css';

function Flow() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flow">
      <div className="div-35">Start</div>
                    <div className="div-36">
                      <div className="div-37">
                        <div className="div-38">var</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b251b364e8492e540f4ead9941609d924efb7631e8b3884efa66d9c0dc3d6a?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                          className="img"
                        />
                      </div>
                      <div className="div-39">users</div>
                      <div className="div-40">:</div>
                      <div className="div-41">Find</div>
                      <div className="div-42">User</div>
                      <div className="div-43" />
                      <div className="div-44">Filter</div>
                      <div className="div-45">
                        <div className="div-46">email</div>
                        <div className="div-47">x</div>
                        <div className="div-48">
                          <div className="div-49">password</div>
                          <div className="div-50">x</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b251b364e8492e540f4ead9941609d924efb7631e8b3884efa66d9c0dc3d6a?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                          className="img-2"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcfa47ae4c71a71bd9eb656168e957868fa01e334114bdb862d484c675d2ae?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                        className="img-3"
                      />
                    </div>
                    <div className="div-51">
                      <div className="div-52">
                        <div className="div-53">return</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b251b364e8492e540f4ead9941609d924efb7631e8b3884efa66d9c0dc3d6a?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                          className="img-4"
                        />
                      </div>
                      <div className="div-54">
                        <div className="div-55">users</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b251b364e8492e540f4ead9941609d924efb7631e8b3884efa66d9c0dc3d6a?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                          className="img-5"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcfa47ae4c71a71bd9eb656168e957868fa01e334114bdb862d484c675d2ae?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                        className="img-6"
                      />
                          {/* {dropdownVisible && (
              <div className="dropdown-menu">
              </div>
            )} */}

                    </div>
                    <div className="div-56">
                      <div className="div-57">Add Step</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1fcfa47ae4c71a71bd9eb656168e957868fa01e334114bdb862d484c675d2ae?apiKey=c88477001710423a80b4a3ad8ecfeb73&"
                        className="img-7"
                      />
                    </div>
                    <div className="div-58">End</div>
                  </div>
  );
}

export default Flow;