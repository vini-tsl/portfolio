import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contacts() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/vin%C3%ADcius-teixeira-6231a4352/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/vini-tsl",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/vini_tsl/",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:viniciusteixeira022@gmail.com",
    },
  ];

  return (
    <div className="contacts-container"
    id="contacts">
      <h2>Contato</h2>

      <div className="contacts-grid">
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">{item.icon}</div>
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
