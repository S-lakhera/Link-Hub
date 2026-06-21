
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram  } from "react-icons/fa";

const SocialLinks = ({ socials }) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {socials.github && (
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaGithub size={20} />
        </a>
      )}

      {socials.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaLinkedin size={20} />
        </a>
      )}

      {socials.youtube && (
        <a
          href={socials.youtube}
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaYoutube size={20} />
        </a>
      )}

      {socials.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={20} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;