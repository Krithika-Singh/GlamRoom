import { aboutUs, helpingLinks, ourCategories } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4"> About Us</h3>
          <ul className="space-y-2">
            {aboutUs.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-900 hover:text-neutral-500"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Help ?</h3>
          <ul className="space-y-2">
            {helpingLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-900 hover:text-neutral-500"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Our Tops</h3>
          <ul className="space-y-2">
            {ourCategories.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-900 hover:text-neutral-500"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
