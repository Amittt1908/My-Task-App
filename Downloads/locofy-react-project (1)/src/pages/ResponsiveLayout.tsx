import { FunctionComponent } from "react";

const ResponsiveLayout: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[4500px] text-center text-5xl text-gray-100 font-inter">
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white overflow-hidden">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-azure box-border overflow-hidden border-[8px] border-solid border-powderblue">
              <div className="absolute w-[calc(100%_-_20px)] top-[calc(50%_-_25.5px)] left-[10px] leading-[24px] inline-block">
                <p className="m-0">
                  <b>Horiz. 320 - 599</b>
                </p>
                <p className="m-0 text-base">
                  There is no layout selected for current diapasons
                </p>
              </div>
            </div>
          </div>
          <div className="absolute h-full w-[calc(100%_-_599px)] top-[0px] right-[0px] bottom-[0px] left-[599px] bg-white">
            <div className="absolute h-full w-[calc(100%_+_599px)] top-[0px] right-[0px] bottom-[0px] left-[-599px] bg-honeydew box-border overflow-hidden border-[8px] border-solid border-lightgreen">
              <div className="absolute w-[calc(100%_-_20px)] top-[calc(50%_-_25.5px)] left-[10px] leading-[24px] inline-block">
                <p className="m-0">
                  <b>Horiz. 600 - 959</b>
                </p>
                <p className="m-0 text-base">
                  There is no layout selected for current diapasons
                </p>
              </div>
            </div>
          </div>
          <div className="absolute h-full w-[calc(100%_-_959px)] top-[0px] right-[0px] bottom-[0px] left-[959px] bg-white text-xl text-black">
            <div className="absolute h-full w-[calc(100%_+_959px)] top-[0px] right-[0px] bottom-[0px] left-[-959px]">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white overflow-hidden">
                <div className="absolute top-[0px] left-[0px] w-[1388px] h-[836px] overflow-hidden text-left">
                  <div className="absolute top-[27px] left-[120px] w-[1139.43px] h-[82px] text-3xl text-deepskyblue">
                    <img
                      className="absolute top-[0px] left-[0px] w-[97.43px] h-[82px] object-cover"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <div className="absolute top-[0px] left-[248.43px] rounded-3xs bg-white shadow-[-10px_-5px_20px_rgba(61,_162,_255,_0.25),_20px_4px_20px_rgba(61,_162,_255,_0.22)] w-[598px] h-20">
                      <b className="absolute top-[22px] left-[55px] text-11xl">
                        Home
                      </b>
                      <div className="absolute top-[27px] left-[238px] font-medium">
                        About us
                      </div>
                      <div className="absolute top-[26.5px] left-[402px] font-medium">
                        Contact Us
                      </div>
                      <img
                        className="absolute top-[55.5px] left-[59.07px] w-20 h-[5px]"
                        alt=""
                        src="/line-4.svg"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[997.43px] rounded-6xs [background:linear-gradient(180deg,_#e2a5ff,_#c2d3ff)] shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[142px] h-[54px] text-6xl text-white">
                      <div className="absolute top-[12px] left-[15px] font-semibold">
                        Visit now
                      </div>
                    </div>
                  </div>
                  <b className="absolute top-[256px] left-[130px] text-31xl [background:linear-gradient(180deg,_#0896ff,_#58b8ff_50.53%,_#004170)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:5px_4px_5px_rgba(0,_0,_0,_0.25)]">
                    CareChainAI
                  </b>
                  <div className="absolute top-[317px] left-[140px] font-medium">{`Connect to experts with `}</div>
                  <b className="absolute top-[366px] left-[130px] text-21xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    <p className="m-0">{`We follow a `}</p>
                    <p className="m-0">{`holistic approach `}</p>
                    <p className="m-0">to health care</p>
                  </b>
                  <div className="absolute top-[559px] left-[130px] text-lg inline-block w-[586px]">
                    CareChainAI transforms healthcare access in India,
                    seamlessly connecting patients with specialized clinics,
                    AI-guided appointments, and secure health records on the
                    blockchain. Our commitment to convenience and personalized
                    care enhances the healthcare journey for all. Welcome to a
                    new era of empowered well-being with CareChainAI.
                  </div>
                  <div className="absolute top-[443px] left-[793px] rounded-181xl [background:linear-gradient(180deg,_rgba(4,_110,_207,_0.82),_rgba(4,_115,_218,_0.02))] w-[200px] h-[200px] overflow-hidden" />
                  <div className="absolute top-[740px] left-[130px] w-[228px] h-[55px] text-lg text-white">
                    <div className="absolute top-[18px] left-[10px] bg-dodgerblue-100 [filter:blur(50px)] w-[198px] h-[37px]" />
                    <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(192.94deg,_#0473da,_rgba(4,_115,_218,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[228px] h-[52px]">
                      <div className="absolute top-[15px] left-[20px] font-semibold">
                        Book an Appointment
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[278px] left-[610px] rounded-[211.89px] bg-white shadow-[17.160493850708008px_3.432098627090454px_25.74px_rgba(0,_0,_0,_0.25)] w-[278px] h-[278px] overflow-hidden text-center">
                    <div className="absolute top-[91px] left-[30px] font-semibold [background:linear-gradient(180deg,_#ff0000,_#0667c1_0.01%,_#00c1fe)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      <p className="m-0">{`Get Your Personalized `}</p>
                      <p className="m-0">{`doctor consulation `}</p>
                      <p className="m-0">done on your Mobile</p>
                      <p className="m-0">Phones !</p>
                    </div>
                  </div>
                  <div className="absolute top-[278px] left-[754px] w-[618.71px] h-[558px]">
                    <img
                      className="absolute top-[241.54px] left-[0px] w-[634px] h-[316.46px] object-cover"
                      alt=""
                      src="/956716smallremovebgpreview-1@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[116px] w-[388.95px] h-[544.28px] object-cover"
                      alt=""
                      src="/pngclipartdoctorsandnursesdoctorsandnursesremovebgpreview-1@2x.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[1628px] left-[463px] flex flex-row items-center justify-start gap-[25px] text-left text-36xl text-dodgerblue-100">
                  <img
                    className="relative w-[72px] h-4"
                    alt=""
                    src="/line-2.svg"
                  />
                  <b className="relative">Our Services</b>
                  <img
                    className="relative w-[72px] h-4"
                    alt=""
                    src="/line-3.svg"
                  />
                </div>
                <div className="absolute top-[1934px] left-[125px] rounded-8xs bg-dodgerblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
                <div className="absolute top-[1934px] left-[551px] rounded-8xs bg-darkslateblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
                <div className="absolute top-[1934px] left-[968px] rounded-8xs bg-darkslateblue-200 [filter:blur(50px)] w-[338px] h-[284px]" />
                <div className="absolute top-[2335.48px] left-[965px] rounded-[5.18px] bg-darkslateblue-200 [filter:blur(51.78px)] w-[350px] h-[294.08px]" />
                <div className="absolute top-[2335.48px] left-[545px] rounded-[5.18px] bg-darkslateblue-200 [filter:blur(51.78px)] w-[350px] h-[294.08px]" />
                <div className="absolute top-[2338px] left-[125px] rounded-[5.15px] bg-darkslateblue-200 [filter:blur(51.48px)] w-[348px] h-[292.4px]" />
                <b className="absolute top-[2726px] left-[225px] inline-block w-[1003px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam libero. Quisque nec sollicitudin sapien. Curabitur sit amet feugiat purus. Morbi ultrices nulla ut ex varius, vel lacinia ex ullamcorper. Sed eget justo non augue facilisis posuere. Vestibulum a mi eget ligula ultrices dictum. Praesent vestibulum, est ac elementum varius, `}</b>
                <div className="absolute top-[1868px] left-[125px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
                <div className="absolute top-[2272px] left-[125px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
                <div className="absolute top-[1868px] left-[545px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
                <div className="absolute top-[1868px] left-[965px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
                <div className="absolute top-[2272px] left-[965px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
                <div className="absolute top-[2280px] left-[551px] rounded-xl bg-white shadow-[20px_4px_30px_rgba(0,_0,_0,_0.25)] w-[350px] h-[350px]" />
                <img
                  className="absolute top-[2357.25px] left-[1047.25px] w-[197.5px] h-[70px]"
                  alt=""
                  src="/group-4.svg"
                />
                <div className="absolute top-[4370px] left-[0px] bg-gainsboro shadow-[0px_6px_4px_rgba(0,_0,_0,_0.25)_inset] w-[1388px] h-[130px] overflow-hidden text-left">
                  <a
                    className="absolute top-[63px] left-[150px] [text-decoration:underline] font-bold text-[inherit]"
                    href="https://www.carechainai.com/#"
                    target="_blank"
                  >
                    2023 © All Rights Reserved | Designed and Developed by
                    carechainai.com
                  </a>
                  <div className="absolute top-[50px] left-[1008px] w-[207px] flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
                      alt=""
                      src="/mdilinkedin.svg"
                    />
                    <img
                      className="relative w-[38.67px] h-[38.67px]"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="relative w-[38.77px] h-[38.77px]"
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className="relative w-[43.99px] h-[38.99px]"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                  <b className="absolute top-[10px] left-[985px] text-6xl">
                    Get in touch with us !
                  </b>
                </div>
                <div className="absolute top-[3434px] left-[0px] bg-lightcyan shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1388px] h-[580px] overflow-hidden text-left">
                  <b className="absolute top-[21px] left-[419px] text-31xl text-darkslategray">
                    Contact us Via an Email !
                  </b>
                  <div className="absolute top-[162px] left-[252px] bg-gray-300 [filter:blur(50px)] w-[370px] h-[72px]" />
                  <div className="absolute top-[152px] left-[644px] bg-gray-200 [filter:blur(50px)] w-[547px] h-[72px]" />
                  <div className="absolute top-[145px] left-[252px] w-[939px] h-[62px]">
                    <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[370px] h-[62px] overflow-hidden">
                      <div className="absolute top-[17px] left-[18px] font-medium opacity-[0.5]">
                        Enter your Name....
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[392px] rounded-mini bg-white w-[547px] h-[62px] overflow-hidden">
                      <div className="absolute top-[19px] left-[30px] font-medium opacity-[0.5]">
                        Enter your Email ....
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[332px] left-[1010px] bg-darkslategray [filter:blur(50px)] w-[172px] h-[65px]" />
                  <div className="absolute top-[315px] left-[996px] rounded-mini bg-green w-[195px] h-16 overflow-hidden text-11xl text-white">
                    <b className="absolute top-[14px] left-[47px]">Submit</b>
                  </div>
                  <div className="absolute top-[311px] left-[252px] bg-gray-300 [filter:blur(50px)] w-[677px] h-[205px]" />
                  <div className="absolute top-[270px] left-[252px] rounded-mini bg-white w-[677px] h-[218px] overflow-hidden">
                    <div className="absolute top-[22px] left-[24px] font-medium opacity-[0.5]">
                      Write your query here....
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-[228px] h-[408px]"
                    alt=""
                    src="/rectangle-21.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[1191px] w-[253.16px] h-[303px] object-cover opacity-[0.8] mix-blend-multiply"
                    alt=""
                    src="/images--1-removebgpreview-1-1@2x.png"
                  />
                </div>
                <img
                  className="absolute top-[1862px] left-[217px] w-[181px] h-[181px] object-cover"
                  alt=""
                  src="/doctor52196954370608removebgpreview-1@2x.png"
                />
                <div className="absolute top-[1926px] left-[658px] bg-black w-[120px] h-[91px]" />
                <img
                  className="absolute top-[1857px] left-[620px] w-[211px] h-[224.87px] object-cover"
                  alt=""
                  src="/calendarandclockiconconceptofscheduleappointmentvectorillustration2dmyhnkremovebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[1865px] left-[1050px] w-[185px] h-[189px] object-cover"
                  alt=""
                  src="/downloadremovebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[2247px] left-[183px] w-[232px] h-[232px] object-cover"
                  alt=""
                  src="/3ddoctorprescriptioniconorpatientreportpapericonfreepng-1@2x.png"
                />
                <img
                  className="absolute top-[883px] left-[118px] w-[413px] h-[696px] object-cover"
                  alt=""
                  src="/image-3removebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[1387.81px] left-[62.81px] w-[398.38px] h-[249.54px] opacity-[0.8]"
                  alt=""
                  src="/ellipse-8.svg"
                />
                <div className="absolute top-[836px] left-[470.18px] shadow-[9.290780067443848px_4.645390033721924px_18.58px_rgba(0,_0,_0,_0.25)] w-[432.18px] h-[786px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <div className="absolute top-[958px] left-[460px] font-medium text-left inline-block w-[441px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className="absolute top-[1367px] left-[486px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[116px] h-[116px]" />
                <div className="absolute top-[1367px] left-[632px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[116px] h-[116px]" />
                <div className="absolute top-[1367px] left-[778px] rounded-[50%] [background:linear-gradient(180deg,_#daefff,_rgba(255,_183,_226,_0))] shadow-[5px_10px_8px_rgba(0,_193,_254,_0.2)] w-[116px] h-[116px]" />
                <div className="absolute top-[1401px] left-[511px] font-semibold text-dodgerblue-100 [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
                  <p className="m-0">300k+</p>
                  <p className="m-0">users</p>
                </div>
                <div className="absolute top-[1401px] left-[644px] font-semibold text-dodgerblue-100 [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
                  <p className="m-0">300+</p>
                  <p className="m-0">Hospitals</p>
                </div>
                <img
                  className="absolute top-[2258.53px] left-[599.74px] rounded-[16.51px] w-[285.54px] h-[218.54px] object-cover"
                  alt=""
                  src="/rectangle-10@2x.png"
                />
                <div className="absolute top-[1389px] left-[797px] font-semibold text-dodgerblue-100 [text-shadow:5px_10px_8px_rgba(0,_193,_254,_0.2)]">
                  <p className="m-0">1M +</p>
                  <p className="m-0">patients</p>
                  <p className="m-0"> treated</p>
                </div>
                <img
                  className="absolute top-[929px] left-[996px] w-[329.91px] h-[600px] object-cover"
                  alt=""
                  src="/screen-1-1@2x.png"
                />
                <b className="absolute top-[1730px] left-[276px] text-6xl text-left">
                  Discover our range of services that prioritize your health and
                  well-being.
                </b>
                <div className="absolute top-[2084px] left-[186px] text-6xl font-semibold">
                  Doctor Directory
                </div>
                <div className="absolute top-[2084px] left-[595px] text-6xl font-semibold">
                  Appointment Booking
                </div>
                <div className="absolute top-[2084px] left-[1018px] text-6xl font-semibold inline-block w-[247px]">
                  <p className="m-0">Health Records</p>
                  <p className="m-0"> Management</p>
                </div>
                <div className="absolute top-[2462px] left-[141px] text-3xl font-semibold inline-block w-[318px]">
                  Prescription Storage and Medication Reminders
                </div>
                <div className="absolute top-[2462px] left-[575px] text-3xl font-semibold">
                  <p className="m-0">Anonymous Patient-Doctor</p>
                  <p className="m-0"> Communication</p>
                </div>
                <div className="absolute top-[2469px] left-[1068px] text-6xl font-semibold">
                  Many More
                </div>
                <div className="absolute top-[2880px] left-[-3px] w-[1391px] h-[507px] overflow-hidden text-6xl">
                  <div className="absolute top-[132px] left-[276px] w-[969px] h-[259px]">
                    <img
                      className="absolute top-[-124px] left-[-273px] w-[1391px] h-[499px]"
                      alt=""
                      src="/rectangle-24.svg"
                    />
                    <div className="absolute top-[145px] left-[0px] font-semibold [background:linear-gradient(180deg,_#0047ff,_rgba(255,_0,_0,_0.9))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[969px]">
                      <p className="m-0">
                        We're excited to bring you a revolutionary healthcare
                        experience. Our platform is under development and will
                        be launching soon to transform the way you access
                        healthcare.
                      </p>
                      <p className="m-0">
                        Stay tuned for updates and be the first to experience
                        CareChainAI's innovative services.
                      </p>
                    </div>
                    <div className="absolute top-[0px] left-[90px] rounded-mini bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset,_26.842103958129883px_5.368420600891113px_40.26px_rgba(0,_0,_0,_0.25)] w-[787.82px] h-[102px]" />
                    <div className="absolute top-[14px] left-[205px] text-41xl font-semibold [background:linear-gradient(180deg,_#0047ff,_rgba(255,_0,_0,_0.9))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                      Launching Soon .....
                    </div>
                  </div>
                </div>
                <div className="absolute top-[4014px] left-[0px] bg-cornflowerblue w-[1388px] h-[356px] overflow-hidden text-left text-lg text-white">
                  <b className="absolute top-[13px] left-[536px] text-16xl">
                    Know more about us !
                  </b>
                  <div className="absolute top-[92px] left-[150px] text-6xl font-semibold">
                    About CareChainAi:
                  </div>
                  <div className="absolute top-[92px] left-[536px] text-6xl font-semibold">
                    Latest Updates:
                  </div>
                  <div className="absolute top-[137px] left-[152px] font-semibold text-black inline-block w-[348px]">
                    CareChainAI is a revolutionary healthcare platform that
                    connects patients with specialized doctors, offers secure
                    health record management, virtual consultations, and more.
                  </div>
                  <div className="absolute top-[137px] left-[536px] font-semibold text-black inline-block w-[348px]">
                    <p className="m-0">
                      We are working on Developing our fully
                    </p>
                    <p className="m-0">functional Website of CareChainAi .</p>
                  </div>
                  <div className="absolute h-[38.2%] w-[19.74%] top-[34.27%] right-[8.72%] bottom-[27.53%] left-[71.54%] text-black">
                    <img
                      className="absolute h-[17.78%] w-[6.3%] top-[2.94%] right-[89.32%] bottom-[79.28%] left-[4.38%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <img
                      className="absolute h-[13.24%] w-[6.57%] top-[60.29%] right-[89.05%] bottom-[26.47%] left-[4.38%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector4.svg"
                    />
                    <img
                      className="absolute h-[13.24%] w-[6.57%] top-[86.76%] right-[89.05%] bottom-[0%] left-[4.38%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector4.svg"
                    />
                    <img
                      className="absolute top-[33px] left-[0px] w-[34px] h-[34px] overflow-hidden"
                      alt=""
                      src="/typcnmail.svg"
                    />
                    <b className="absolute top-[0px] left-[61px]">
                      <p className="[margin-block-start:0] [margin-block-end:15px]">
                        Mumbai, India
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:15px]">
                        carechainai@gmail.com
                      </p>
                      <p className="[margin-block-start:0] [margin-block-end:15px]">
                        +91 8291988205
                      </p>
                      <p className="m-0">+91 9049685048</p>
                    </b>
                  </div>
                </div>
                <div className="absolute top-[1779px] left-[1431px] rounded-181xl bg-white shadow-[23.42592430114746px_4.685184955596924px_35.14px_rgba(0,_0,_0,_0.25)] w-[250px] h-[250px] overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0] text-6xl text-darkslateblue-100">
                  <div className="absolute top-[179px] left-[200px] font-semibold inline-block w-[150px] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]">
                    <p className="m-0">{`Explore Our `}</p>
                    <p className="m-0">Best services !</p>
                  </div>
                </div>
                <b className="absolute top-[861px] left-[338px] text-31xl text-left [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                  Why do we need CareChainAi ?
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[100px] h-[100px] text-left text-sm text-darkgray-200">
        <div className="absolute top-[-60px] left-[0px] bg-darkgray-100 w-[1440px] h-px" />
        <div className="absolute top-[-62px] left-[-2px] rounded-[50%] bg-darkgray-100 w-[5px] h-[5px]" />
        <img
          className="absolute top-[-68px] left-[312px] w-[17px] h-[17px] overflow-hidden"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[-68px] left-[592px] w-[17px] h-[17px] overflow-hidden"
          alt=""
          src="/frame1.svg"
        />
        <img
          className="absolute top-[-68px] left-[952px] w-[17px] h-[17px] overflow-hidden"
          alt=""
          src="/frame1.svg"
        />
        <img
          className="absolute top-[-68px] left-[1432px] w-[17px] h-[17px] overflow-hidden"
          alt=""
          src="/frame2.svg"
        />
        <div className="absolute top-[-89px] left-[306.5px]">320</div>
        <b className="absolute top-[-89px] left-[585.5px]">600</b>
        <b className="absolute top-[-89px] left-[945.5px]">960</b>
        <div className="absolute top-[-89px] left-[1423px]">1440</div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
