
import TwitterIcon from '../assets/twitter'; // Update with the correct path
import LinkedInIcon from '../assets/LinkedIn'; // Update with the correct path
import GithubIcon from '../assets/Github'; // Update with the correct path
import InstagramIcon from '../assets/Instagram'; // Update with the correct path

const socialMediaLinks = [
  {
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/kesraoui-mohamed-298a6a147/',
    label: 'LinkedIn',
  },
  {
    icon: <GithubIcon />,
    link: 'https://github.com/KesraouiMohamed1991',
    label: 'Github',
  },
  {
    icon: <TwitterIcon />,
    link: 'https://twitter.com/KesraouiMohame1',
    label: 'Twitter',
  },
  {
    icon: <InstagramIcon />,
    link: 'https://www.instagram.com/massiliapixx',
    label: 'Instagram',
  },
];

// eslint-disable-next-line react/prop-types
function SocialMediaLink({ icon, link, label }) {
  return (
    <li className="text-xs flex items-center justify-center flex-col text-primary  cursor-pointer">
      <div className="py-4">{icon}</div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </li>
  );
}

function Footer() {
  return (
    <div id='Footer' className="h-[450px] mt-16 flex flex-col items-center justify-around  mx-auto sm:w-5/6 w-screen">
      <p className="px-4 text-3xl w-full selection:bg-purple-500 selection:text-white text-center py-8 sm:text-5xl bg-gradient-to-t from-purple-900 via-purple-400 to-stone-200 text-transparent bg-clip-text">
        GET IN TOUCH
      </p>

      <div className="w-full">
        <ul className="flex flex-row justify-center items-center text-white gap-10 ">
          {socialMediaLinks.map((socialMedia) => (
            <SocialMediaLink key={socialMedia.label} {...socialMedia} />
          ))}
        </ul>
      </div>

      <p className="text-center w-full selection:bg-secondary selection:text-white text-primary dark:text-background "><a href="#">Kesraoui.dev@gmail.com</a></p>
      <p className="text-center w-full text-xs text-primary dark:text-background  ">©{new Date().getFullYear()} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
