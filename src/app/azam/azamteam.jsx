import Link from "next/link"

const Azamteam = () => {
  return (
    <div className="py-5 team-content">
      <div className="container py-4">
        <div className="align-items-end row g-4 mb-5">
          <div className="col">
            {/* Start Section Header Title */}
            <div className="section-header text-center text-xl-start">
              {/* Start Subtitle */}
              <div className="bg-gray-900 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-white">
                Proud Realtors
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="text-gray-900 text-4xl font-bold mb-3 text-capitalize">
                Meet My Team
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16 w-[60%]">
                It is a privilege for me to guide a team of dedicated
                developers, as I firmly believe that teamwork is essential for
                achieving goals. Currently serving as the Team Lead at Cresco
                Real Estate, I am delighted to introduce you to my esteemed team
                members.
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
          <div className="col-12 col-xl-auto text-center text-xl-end"></div>
        </div>
        <div className="row justify-content-center g-3 g-sm-4">
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="d-block w-full h-[50vh] overflow-hidden position-relative team-avatar-container">
                  <img
                    src="assets/img/avatar/2.jpg"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                  Property Advisor
                </div>
              </div>
              {/* Start Avatar Info */}
              <div className="member-info text-center mt-3">
                <h4 className="mb-2 member-name text-truncate">Sabrine Touti</h4>
                <div>
                  She stands out as most committed and enthusiastic advisor.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="d-block w-full h-[50vh] overflow-hidden position-relative team-avatar-container">
                  <img
                    src="assets/img/avatar/5.jpg"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                  Sales Manager
                </div>
              </div>
              {/* Start Avatar Info */}
              <div className="member-info text-center mt-3">
                <h4 className="mb-2 member-name text-truncate">
                  Waleed Khan
                </h4>
                <div>
                  He serves as an enthusiastic and competitive Sales Head.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="d-block w-full h-[50vh] overflow-hidden position-relative team-avatar-container">
                  <img
                    src="assets/img/avatar/6.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                  Creative Head
                </div>
              </div>
              {/* Start Avatar Info */}
              <div className="member-info text-center mt-3">
                <h4 className="mb-2 member-name text-truncate">Doua Reina</h4>
                <div>
                  Our Creative Head responsible for crafting compelling content.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="d-block w-full h-[50vh] overflow-hidden position-relative team-avatar-container">
                  <img
                    src="assets/img/avatar/7.jpg"
                    className="img-fluid w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                  Sales Consultant
                </div>
              </div>
              {/* Start Avatar Info */}
              <div className="member-info text-center mt-3">
                <h4 className="mb-2 member-name text-truncate">Osama Khalifa</h4>
                <div>
                  She oversees HR activities and ensures smooth
                  operations.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Azamteam