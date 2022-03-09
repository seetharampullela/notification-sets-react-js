const Notification = (props) => {
  //  Write your code here.
  const { name, notification } = props;
  return <p className={name}>{notification}</p>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div className="cardContainer">
      <div className="cards notice1">
        <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
        <Notification notification="Information Message" />
      </div>
      <div className="cards notice2">
        <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
        <Notification notification="Success Message" />
      </div>
      <div className="cards notice3">
        <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification notification="Warning Message" />
      </div>
      <div className="cards notice4">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <Notification notification="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
