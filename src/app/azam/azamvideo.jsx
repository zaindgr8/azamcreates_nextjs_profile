import { GrInstagram } from "react-icons/gr";
import ReusableCountUp from "@/components/counter";
import { FaYoutube } from "react-icons/fa";
import { BsHouseCheck } from "react-icons/bs";
import { FaPeopleRoof } from "react-icons/fa6";
import VideoContainer from "@/components/video-container";
import Link from "next/link"


const azamvideo = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div
          className="col-xl-4 d-xl-flex align-items-xl-center bg-gray-900 px-3 py-5 px-sm-5 px-md-3 px-xxl-5 counter-content__two background-image"
          data-image-src="assets/img/png-img/section-bg.png"
        >
          <div className="row g-0 text-center position-relative counter-content__dot">
            <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
              <Link
                target="_blank"
                href="https://www.instagram.com/azamcreates/"
              >
                <GrInstagram className="fa fa-igloo fa-solid display-4 mb-3 text-white fw-black" />
              </Link>
              <p className="fs-1 text-white mb-0 flex flex-col">
                <strong className="counter">
                  <ReusableCountUp
                    separator=""
                    decimals={""}
                    decimal=""
                    start={0}
                    end={50}
                  />
                  M+
                </strong>
                <span className="text-lg">Views</span>
              </p>
            </div>
            <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
              <Link target="_blank" href="https://www.youtube.com/@azamcreates">
                <FaYoutube className="fa-solid fa-user-group display-4 mb-3 text-white fw-black" />
              </Link>
              <p className="fs-1 text-white mb-0 flex flex-col">
                <strong className="counter">
                  <ReusableCountUp
                    separator=""
                    decimals={""}
                    decimal=""
                    start={0}
                    end={70}
                  />
                  M+
                </strong>
                <span className="text-lg">Views</span>
              </p>
            </div>
            <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
              <BsHouseCheck className="fa-solid fa-sack-dollar display-4 mb-3 text-white fw-black" />
              <p className="fs-1 text-white mb-0 flex flex-col">
                <strong>
                  <span className="counter">
                    <ReusableCountUp
                      separator=""
                      decimals={1}
                      decimal="."
                      start={0.0}
                      end={1}
                    />B+
                  </span>
                </strong>
                <span className="text-lg">Transactions</span>
              </p>
            </div>
            <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
              <FaPeopleRoof className="fa-solid fa-user-tie display-4 mb-3 text-white fw-black" />
              <p className="fs-1 text-white mb-0 flex flex-col">
                <strong className="counter">
                  <strong className="counter">
                    <ReusableCountUp
                      separator=""
                      decimals={""}
                      decimal=""
                      start={0}
                      end={593}
                    />+
                  </strong>
                </strong>
                <span className="text-lg">Clients</span>
              </p>
            </div>
          </div>
        </div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default azamvideo;
