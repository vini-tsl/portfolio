import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contacts() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/seulinkedin",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/seurepositorio",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/seuinstagram",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:seuemail@example.com",
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
