import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section id="testimonial__section" class="testimonial__section">
      <div class="testimonials">
        <h1 class="client_test_heading">client testimonials</h1>
        <div class="clients__feedback">
          <div class="client1 client">
            <img
              class="client_img_design"
              src="images/image-emily.jpg"
              alt=""
            />
            <p class="client_para_design">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p class="client__name_design">Emily R.</p>
            <p class="client__title_design">Marketing Director</p>
          </div>

          <div class="client2 client">
            <img
              class="client_img_design"
              src="images/image-thomas.jpg"
              alt=""
            />
            <p class="client_para_design">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p class="client__name_design">Thomas S.</p>
            <p class="client__title_design">Chief Operating Officer</p>
          </div>

          <div class="client3 client">
            <img
              class="client_img_design"
              src="images/image-jennie.jpg"
              alt=""
            />
            <p class="client_para_design">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p class="client__name_design">Jennie F.</p>
            <p class="client__title_design">Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
