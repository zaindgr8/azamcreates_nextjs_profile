"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



const Carousel = () => {
    const options = {
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    return (
      <OwlCarousel className=" owl-theme blog-carousel" {...options}>
        {/* Start Grid Post */}
        <div className=" post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href=""
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s2.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Family Event
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Daughter's Birthday
                </div>
                <span className="vr" />
                <div>jun 23, 2022</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  Joyously marked my daughter's birthday in the company of our
                  family.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}

        {/* Start Grid Post */}
        <div className=" post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s4.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Corporate Meeting
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">Met Maj Gen Abid</div>
                <span className="vr" />
                <div>Jul 21, 2023</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="/">
                  It is an honor to serve clients of esteemed positions from
                  prestigious organizations.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}

        {/* Start Grid Post */}
        <div className=" post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/ofce.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Corporate Meeting
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">CRESCO Sales Seminar</div>
                <span className="vr" />
                <div>May 18, 2024</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="/">
                  speaker at the seminar on sales with the Cresco official team
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post">
          <div
            className="grid-post__thumb position-relative"
            data-aos="fade"
            data-aos-delay={400}
          >
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s5.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Corporate Event
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">Meet My Team</div>
                <span className="vr" />
                <div>March 10, 2021</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  Led a team of accomplished realtors, successfully achieving
                  our goals.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post">
          <div
            className="grid-post__thumb position-relative"
            data-aos="fade"
            data-aos-delay={400}
          >
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s3.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Family Event
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Daughter's Birthday
                </div>
                <span className="vr" />
                <div>jun 23, 2022</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  She is the essence of my existence, and celebrating her birth
                  brought immense happiness.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={500}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s6.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Corporate Event
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">Award Ceremony</div>
                <span className="vr" />
                <div>Aug 13, 2018</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  top real estate consultant of the year, bestowed by the
                  esteemed Shafiq Akbar, Chairman of Agency 21.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={500}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s10.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Corporate Meeting
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Appreciation by President Pakistan
                </div>
                <span className="vr" />
                <div>Feb 16, 2020</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  President Arif Alvi, who commended our endeavors in real
                  estate sector.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={600}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="alixgn-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s12.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Corporate Meeting
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Collaboration with One Eleven
                </div>
                <span className="vr" />
                <div>March 17, 2022</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  Explored potential business ventures with the Chairman of One
                  Eleven Group.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={600}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="alixgn-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s16.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Hobbies and Interests
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Personal car fleet
                </div>
                <span className="vr" />
                <div>April 01, 2022</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  Have a deep appreciation for the sophistication and thrill of
                  driving luxury cars
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={600}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="alixgn-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/s8.JPG"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Hobbies & Interests
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Literary treasures
                </div>
                <span className="vr" />
                <div>Sep 07, 2023</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  I dedicate a significant portion of my time to the pursuit of
                  wisdom through reading books.
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
      </OwlCarousel>
    );
};
export default Carousel;
