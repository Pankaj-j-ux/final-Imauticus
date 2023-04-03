/** @format */

function Header({ headername, isSlide, setIsSlide, width }) {
  return (
    <div className="header">
      {width > 900 ? (
        <div>{headername}</div>
      ) : (
        <div className="burger_btn" onClick={() => setIsSlide(true)}>
          ☰
        </div>
      )}
      <img
        src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo-green.svg"
        alt="logo"
      />
      <div className="profile">
        <p>P</p>
        {width > 900 ? <p>Your Profile</p> : ""}
      </div>
    </div>
  );
}

export default Header;
