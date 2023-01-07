import doctor from "./img/doctor.png";
import logo from "./img/logo.png";
import { RiCalendar2Line } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { CgWebcam } from "react-icons/cg";
import "./App.css";

function App() {
  return (
    <>
      <div className="box">
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="logo" />
              <b>Holadoc</b>
            </div>
            <p>
              <b>Home</b>
            </p>
            <p>Features</p>
            <p>Blog</p>
            <p>About Us</p>
          </div>

          <div className="right">
            <b>Login</b>
            <button>Book Now</button>
          </div>
        </div>
        <div className="inner-box">
          <div className="text">
            <h1>Get the healthcare you need,when you need it.</h1>
            <p>
              Manage all of your healthcare needs in one convienient place -
              from booking appointments to tracking your health history.
            </p>
            <button className="btn1">Book an Appointment</button>
          </div>
          <div className="image">
            <div className="review">
              <div className="profile">
                <div className="square"></div>
                <b>Zidan</b>
              </div>

              <p>
                "The doctor appointment app has been great or me. Scheduling
                appointments and getting medication reminders is much easier,
                and i love the option for virtual consultations. I'd reccomend
                this app to others."
              </p>
            </div>
            <img src={doctor} alt="doctor" />
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-box">
            <div className="icon">
              <RiCalendar2Line size={'3em'}/>
            </div>
            <div>
              <b>Online appointment scheduling</b>
              <p>
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>

          <div className="bottom-box">
            <div className="icon">
              <BiBell size={'3em'} />
            </div>
            <div>
              <b>Medication reminders</b>
              <p>
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>

          <div className="bottom-box">
            <div className="icon">
              <CgWebcam size={'3em'}/>
            </div>
            <div>
              <b>Virtual consultations</b>
              <p>
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
