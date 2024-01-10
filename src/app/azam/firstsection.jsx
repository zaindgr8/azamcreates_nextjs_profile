import { motion } from "framer-motion";

const Firstsection = () => {
  return (
    <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
      <img
        src="assets/img/png-img/section-bg.png"
        alt=""
        className="h-100 object-fit-cover position-absolute w-100 top-0"
      />
      {/* Start Oblique */}
      <div className="d-md-block d-none h-100 oblique overflow-hidden position-absolute top-0">
        <img
          src="assets/img/header/az.gif"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
        />
      </div>
      {/* /.End Oblique */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-10 col-xl-8">
            {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mb-5 gap-y-3 flex flex-col display-3"
            >
              <p className="text-gray-400">MUHAMMAD</p>
              <span className="ml-16 font-bold text-blue-900">AZAM TARIQ</span>
            </motion.div>
            {/* Start Main Search Content */}
            <div className="flex gap-x-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="border-l border-4 h-26 border-blue-900"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-xl font-thin text-gray-900"
              >
                A budding entrepreneur commenced his Real Estate journey a
                decade ago, achieving notable success not only in Pakistan but
                also in Dubai. Recognized as a prominent social media
                influencer, he boasts over 1 million views and has served more
                than 1,000 clients. With transactions exceeding AED 1 billion,
                he holds RERA certification, showcasing his expertise and
                credibility in the real estate industry.
              </motion.div>
            </div>
            {/* /.End Main Search Content */}
          </div>
        </div>
        <div className="align-items-center g-xl-5 gx-3 gy-3 row mt-3">
          <div className="col-auto">
            <div className="align-items-center d-flex justify-content-center justify-content-md-start">
              <div className="media-body flex gap-x-5">
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="hover:bg-blue-300 border-1 p-2 text-blue-900 rounded-sm border-gray-400"
                >
                  CONTACT NOW
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="hover:bg-blue-300 border-1 p-2 text-blue-900 rounded-sm border-gray-400"
                >
                  EXPLORE WORK
                </motion.button>

                {/* <div class="work-sub_title text-muted">Lorem Ipsum is simply</div> */}
              </div>
            </div>
          </div>

          {/*/.work-col*/}

          {/*/.work-col*/}

          {/*/.work-col*/}
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
