

import Image from 'next/image';
import search from '../app/assests/Screenshot_10.png';
import appointment from '../app/assests/Screenshot_11.png';
import Consultation from '../app/assests/Screenshot_12.png';

function About() {
  return (
    <div className="pt-20 pb-20 px-6 bg-orange-200 bg-opacity-20  flex justify-center items-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-aos="zoom-in"  data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1200">
        {/* Card 1 */}
        <div className="text-center border border-green-800 w-64 h-64 bg-transparent shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <Image
            src={search}
            alt="Find Best Doctors"
            className="rounded-full h-24 w-24 mx-auto mt-6 mb-4"
          />
          <h2 className="text-gray-700 text-lg font-semibold mb-2">
            Find Best Doctors
          </h2>
          <p className="text-gray-500 text-sm px-4">
            Your health, our priority. Book your appointment today!
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center border border-green-800 w-64 h-64  shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <Image
            src={appointment}
            alt="Get Appointment"
            className="rounded-full h-24 w-24 mx-auto mt-6 mb-4"
          />
          <h2 className="text-gray-700 text-lg font-semibold mb-2">
            Get Appointment
          </h2>
          <p className="text-gray-500 text-sm px-4">
            Your health, our priority. Book your appointment today!
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center border border-green-800 w-64 h-64  shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <Image
            src={Consultation}
            alt="Happy Consultation"
            className="rounded-full h-24 w-24 mx-auto mt-6 mb-4"
          />
          <h2 className="text-gray-700 text-lg font-semibold mb-2">
            Happy Consultation
          </h2>
          <p className="text-gray-500 text-sm px-4">
            Your health, our priority. Book your appointment today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
