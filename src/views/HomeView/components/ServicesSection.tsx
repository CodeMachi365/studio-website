import {
  FaMobileAlt,
  FaComments,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaPlug,
  FaChartLine,
} from "react-icons/fa";

export const SERVICES_SECTION_ID = "home-view-services-section";

export default function ServicesSection() {
  return (
    <section id={SERVICES_SECTION_ID} className="home-view-section py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
      <span className="text-xl text-center block mb-8">What We Offer</span>
      <div className="services__container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceContent
          icon={<FaMobileAlt className="text-4xl text-blue-500" />}
          title="Mobile Applications"
          description="Building efficient apps for multiple platforms using Swift, React Native, Flutter, or other cross-platform frameworks."
        />
        <ServiceContent
          icon={<FaComments className="text-4xl text-green-500" />}
          title="Consultation"
          description="A dedicated session to provide expert advice on optimizing mobile strategy and technology choices."
        />
        <ServiceContent
          icon={<FaChalkboardTeacher className="text-4xl text-yellow-500" />}
          title="Training and Workshops"
          description="Providing training sessions and hands-on workshops to upskill teams in mobile development, design, or technology best practices."
        />
        <ServiceContent
          icon={<FaPaintBrush className="text-4xl text-red-500" />}
          title="UI/UX Design"
          description="Crafting intuitive and engaging user interfaces for exceptional mobile experiences."
        />
        <ServiceContent
          icon={<FaPlug className="text-4xl text-purple-500" />}
          title="Integrations"
          description="Seamlessly connecting mobile apps with third-party services, APIs, and backend systems."
        />
        <ServiceContent
          icon={<FaChartLine className="text-4xl text-indigo-500" />}
          title="Analytics"
          description="Implementing robust analytics to track user behavior and improve app performance."
        />
      </div>
    </section>
  );
}

function ServiceContent({ icon, title, description }) {
  return (
    <div className="services__content p-4 border rounded-lg shadow-lg">
      <div className="icon__box flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="services__title text-xl font-semibold mb-2">{title}</h3>
      <p className="services__description text-secondary dark:text-secondary-dark">
        {description}
      </p>
    </div>
  );
}
