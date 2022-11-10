import "../../App.css";
import Footer from "../Footer/Footer";
import Quote from "../Quote/Quote";
const Card = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="card shadow rounded" id="quote-box">
        <div>
          <Quote />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Card;
