import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section id="testimonial__section" className="testimonial__section">
      <div className="testimonials">
        <h1 className="client_test_heading">client testimonials</h1>
        <div className="clients__feedback">
          <div className="client1 client">
            <img
              className="client_img_design"
              src="images/image-emily.jpg"
              alt=""
            />
            <p className="client_para_design">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="client__name_design">Emily R.</p>
            <p className="client__title_design">Marketing Director</p>
          </div>

          <div className="client2 client">
            <img
              className="client_img_design"
              src="images/image-thomas.jpg"
              alt=""
            />
            <p className="client_para_design">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className="client__name_design">Thomas S.</p>
            <p className="client__title_design">Chief Operating Officer</p>
          </div>

          <div className="client3 client">
            <img
              className="client_img_design"
              src="images/image-jennie.jpg"
              alt=""
            />
            <p className="client_para_design">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className="client__name_design">Jennie F.</p>
            <p className="client__title_design">Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
