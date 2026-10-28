import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

function Contact() {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2 className="font-bold text-sm text-center flex-1 text-gray-700">Contact Me</h2>
            <div className="w-12" />
        </div>

        <div className="p-6 space-y-5 flex-1 min-h-0 overflow-y-auto">
            <div className="flex items-center gap-4">
                <img src="/images/adrian.jpg" alt="Ashish" className="w-16 h-16 rounded-full object-cover shadow-sm"/>
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Let's Connect</h3>
                    <p className="text-sm text-gray-500">Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                </div>
            </div>

            <ul className="grid grid-cols-2 gap-3.5 pt-2">
                { socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{backgroundColor: bg}} className="rounded-lg p-3 hover:-translate-y-0.5 hover:scale-105 origin-center transition-all duration-300 shadow-sm">
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text} className="flex items-center gap-3">
                            <img src={icon} alt={text} className="size-5 filter brightness-0 invert" />
                            <p className="font-semibold text-sm text-white">{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
