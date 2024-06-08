import React, {useState} from "react";
import './explorer.css';

function Explorer({setShowDetails}) {
  const [authDropdownVisible, setAuthDropdownVisible] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const [postsDropdownVisible, setPostsDropdownVisible] = useState(false);

  const toggleAuthDropdown = () => {
    setAuthDropdownVisible(prevState => !prevState);
  };

  const toggleUserDropdown = () => {
    setUserDropdownVisible(prevState => !prevState);
  };

  const togglePostsDropdown = () => {
    setPostsDropdownVisible(prevState => !prevState);
  };


  const closeDropdown = (event) => {
    if (!event.target.closest('.div-3') && !event.target.closest('.div-6') && !event.target.closest('.div-9')) {
      setAuthDropdownVisible(false);
      setUserDropdownVisible(false);
      setPostsDropdownVisible(false);
    }
  };

  // Close the dropdown when clicking outside
  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const renderToggleText = (dropdownType) => {
    switch (dropdownType) {
      case 'auth':
        return authDropdownVisible ? '-' : '+';
      case 'user':
        return userDropdownVisible ? '-' : '+';
      case 'posts':
        return postsDropdownVisible ? '-' : '+';
      default:
        return '+';
    }
  };

  return (
    <div className="explorer">
                <div className="div">
                  <div className="div-1">Explorer</div>
                  <div className="div-2" />
                  <div className="div-3">
                    <div className="div-4" onClick={() => toggleAuthDropdown('auth')}> {renderToggleText('auth')}</div>
                    <div className="div-5">auth
                    {authDropdownVisible && (
                      <div className="dropdown-menu">
                         <div className="sign-up">  sign up</div>
                         <div className="login">login</div>
                      </div>
                    )}
                    </div>
                    <div className="space"> </div>
                  </div>
                  <div className="div-6">
                    <div className="div-7" onClick={() => toggleUserDropdown('user')}>{renderToggleText('user')}</div>
                    <div className="div-8">user{userDropdownVisible && (
                      <div className="dropdown-menu">
                         <div className="get-all" onClick={() => setShowDetails(true)}>get all</div>
                         <div className="get-one">get one</div>
                      </div>
                    )}
                    </div>
                  </div>
                  <div className="div-9">
                    <div className="div-10" onClick={() => togglePostsDropdown('posts')}> {renderToggleText('posts')}</div>
                    <div className="div-11">posts{postsDropdownVisible && (
                      <div className="dropdown-menu">
                         <div className="add-post">add</div>
                         <div className="edit-post">edit</div>
                      </div>
                    )}</div>
                  </div>
                </div>
              </div>
  );
}

export default Explorer;

