import "./mailList.css";

export default function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Signup and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}