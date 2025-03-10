

// ServicePage.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeartbeat, faTooth, faFlask, faUser } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    name: 'Eye Care',
    description: 'We understand the importance of clear vision and its impact on your life.',
    icon: faEye,
  },
  {
    name: 'Medical Checkup',
    description: 'During your medical checkup, our skilled healthcare professionals.',
    icon: faHeartbeat,
  },
  {
    name: 'Dental Care',
    description: 'We are passionate about providing top-notch dental care to help you.',
    icon: faTooth,
  },
  {
    name: 'Laboratory Service',
    description: 'We understand the critical role that accurate diagnostics play in guiding.',
    icon: faFlask,
  },
  {
    name: 'Patient-Centered',
    description: 'Hospitals, or clinics with positive reviews and ratings from patients.',
    icon: faUser,
  },
];

const ServicePage = () => {
  return (
    <div className="px-4 lg:py-16 bg-orange-200 bg-opacity-15 pb-28">
<div className="relative">
  {/* <!-- Other Content --> */}
  <div 
    className="hidden sm:block h-72 mt-4 w-full lg:w-96 border-t-0 border-l-0 border-b-0 bg-orange-300 bg-opacity-10 rounded-r-full absolute -left-3" >
    {/* // data-aos="fade-up" */}
  </div>
</div>

      <div className="grid grid-cols-1 gap-4 lg:pl-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl lg:mx-auto space-y-4 lg:px-3">
        
        <div className="mt-24 px-3 w-full md:w-96 ">
          <h1 className="text-orange-300 font-serif text-xl lg:text-3xl">Medical Services</h1>
          <h2 className="textg font-serif text-2xl lg:text-5xl">We&apos;re Providing Best Services.</h2>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border border-green-900 shadow-md lg:pt-6 h-52 lg:h-72 lg:py-8 w-full md:w-96 group overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="700"
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-opacity-90 bg-orange-300 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col">
              <div> <FontAwesomeIcon
                icon={service.icon}
                className="text-orange-300 mt-3 px-8 lg:mt-6 text-5xl lg:text-6xl lg:mb-4 group-hover:text-white  transition duration-300 ease-in-out"
              /> </div>
              <div className="ml-5 textg lg:ml-0 mt-3  lg:mt-0 px-1 lg:px-8"> <h2 className="lg:text-3xl text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600 text-base lg:text-lg mb-4 lg:mb-8">{service.description}</p> </div>
              <div className="lg:h-12 h-10 bg-orange-300 bg-opacity-85 text-white text-xl lg:pt-2 font-sans font-medium group-hover:text-green-950  text-center">    Read More         </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;