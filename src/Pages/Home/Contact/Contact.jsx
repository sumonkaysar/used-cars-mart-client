import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneVolume } from "react-icons/fa";
import ContactCard from "./ContactCard/ContactCard";

const Contact = () => {

  return (
    <div className="mt-10 sm:mt-20 rounded-2xl mx-5">
      <h3 className="text-3xl text-center font-bold mb-5 sm:mb-10">Contact Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        <ContactCard
          Icon={FaPhoneVolume}
          title='By Phone'
          info={
            <>
              <p>Phone Number: <a className="underline" href="tel: +8801828008748">+8801828008748</a></p>
            </>
          }
          bgColor='bg-blue-600'
        />
        <ContactCard
          Icon={FaEnvelope}
          title='By Email'
          info={
            <>
              <p>Email: <a className="underline" href="mail: hemon.hasan123@gmail.com">hemon.hasan123@gmail.com</a></p>
            </>
          }
          bgColor='bg-emerald-600'
        />
        <ContactCard
          Icon={FaMapMarkerAlt}
          title='By Location'
          info={
            <>
              <p>Address: Panchdona, Narsingdi, Bangladesh</p>
            </>
          }
          bgColor='bg-violet-600'
        />
      </div>
    </div>
  );
}

export default Contact;
