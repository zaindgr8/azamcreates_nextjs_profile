import React from 'react'

const Azammessage = () => {
  return (
    <div className="about-text align-items-center g-4 justify-content-between row p-3">
      <div className="col-md-12 col-lg-7">
        <div className="row g-3 g-sm-4 align-items-center">
          {/* Image */}
          <div className="col-6">
            <div className="position-relative">
              <div className="line-shape" />
              <img
                src="assets/img/about/az3.jpeg"
                className="img-fluid rounded-3 position-relative"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="row g-3 g-sm-4">
              {/* Image */}
              <div className="col-12">
                <img
                  src="assets/img/about/az4.jpeg"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              {/* Image */}
              <div className="col-12">
                <img
                  src="assets/img/about/az5.jpeg"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-5 ps-xxl-5">
        <div className="text-block">
          <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-gray-900 text-uppercase">
            Connect With Me
          </h6>
          <h2 className="mb-4">
            I've supported countless individuals in the realm of real estate.
          </h2>
          <p className="mb-4">
            Over the past decade, I've transformed my life, starting from
            scratch in the real estate industry. This field has proven to be the
            perfect fit for me, allowing me to grow from the ground up. My
            achievements include facilitating over 1 billion worth of real
            estate transactions. As an active and respected presence on
            Instagram and YouTube, I serve as a mentor with over 1 million views
            on both platforms. My influence extends globally, reaching clients
            from various parts of the world, including India, Russia, the UK,
            and the West. I take pride in my ability to build trust with clients
            and my position as a leading entrepreneur in the real estate domain.
            From residential properties to expansive lands, my proven track
            record demonstrates my commitment to excellence.
          </p>
          <ul className="list-checked  mb-9 mb-md-10 ps-0">
            <li>
              Decade of Transformation: From Humble Beginnings to Real Estate
              Mastery
            </li>
            <li>
              Billion-Dollar Transactions: Facilitating Over 1 Billion in Real
              Estate Deals
            </li>
            <li>
              Global Influence and Entrepreneurial Leadership: Trusted by
              Clients Worldwide and Recognized on Social Media Platforms
            </li>
          </ul>
          <hr className="mt-5" />
          <blockquote className="blockquote quote-text">
            <p className="fst-italic mb-0 text-gray-900 ">
              “Decade of a real estate mastery, over a billion in transactions,
              leading the way in entrepreneurial success.”
            </p>
            <cite className="fs-14 fw-semibold quote-attribution text-dark">
              — Mohammad Azam Tariq
            </cite>
            {/* <div className="mt-3 signature ">
              <img src="assets/img/signature.png" width={150} height={150} alt="" />
            </div> */}
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Azammessage