
// ServicePage.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeartbeat, faTooth, faFlask, faUser  } from "@fortawesome/free-solid-svg-icons";

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
    icon: faUser ,
  },
];

const ServicePage = () => {
  return (
    <div className="px-4 py-16 bg-orange-50 pb-28">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <div className="mt-16 px-3 w-full md:w-80">
          <h1 className="text-orange-300 font-serif text-2xl">Medical Services</h1>
          <h2 className="text-gray-800 font-serif text-4xl">We&apos;re Providing Best Services.</h2>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border border-green-900 shadow-md px-8 pt-6 h-56 w-full md:w-80 group overflow-hidden"
            data-aos="fade-up" 
            data-aos-delay="500" 
            data-aos-easing="ease-in-out" 
            data-aos-duration="700"
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-orange-300 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"></div>

            {/* Content */}
            <div className="relative z-10">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-orange-300 text-5xl mb-4 group-hover:text-white transition duration-300 ease-in-out"
              />
              <h2 className="text-lg font-bold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;