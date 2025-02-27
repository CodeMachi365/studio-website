import {
  FaMobileAlt,
  FaComments,
  FaPaintBrush,
  FaPlug,
  FaChartLine,
  FaCode,
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
          title="Mobile App Development"
          description="Creating responsive apps across platforms using Flutter for seamless user experiences."
        />
        <ServiceContent
          icon={<FaComments className="text-4xl text-green-500" />}
          title="Expert Consultation"
          description="Guiding you to the right tech solutions and planning your digital product path."
        />
        <ServiceContent
          icon={<FaCode className="text-4xl text-yellow-500" />}
          title="Website Development"
          description="Building modern websites for all devices, from simple pages to complex web apps."
        />
        <ServiceContent
          icon={<FaPaintBrush className="text-4xl text-red-500" />}
          title="UI/UX Design"
          description="Designing intuitive interfaces that combine looks with usability to keep users engaged."
        />
        <ServiceContent
          icon={<FaPlug className="text-4xl text-purple-500" />}
          title="System Integrations"
          description="Connecting your apps with essential services and systems for a complete solution."
        />
        <ServiceContent
          icon={<FaChartLine className="text-4xl text-indigo-500" />}
          title="Data Analytics"
          description="Using user insights to make better decisions and improve your product performance."
        />
      </div>
    </section>
  );
}

function ServiceContent({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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
