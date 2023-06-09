import "./styles.css";

const Contact = () => {
  return (
    <>
      <div className="container mb-5 mt-5" id="c1">
        <h2 className="text-center">Contact us form</h2>
        <form action="/action_page.php">
          <div class="row">
            <div class="col-25">
              <label for="fname">Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Email</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your email.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="subject">Mobile Number</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your mobile number.."
              />
            </div>
          </div>
          <br />
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
