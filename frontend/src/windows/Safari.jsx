import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { MoveRight, Copy, Plus, Share, Search, PanelLeft, ChevronRight, ChevronLeft, ShieldHalf } from "lucide-react";

function Safari() {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />

                <div className="flex items-center gap-1 ml-4 text-gray-500">
                    <PanelLeft className="icon" size={16} />
                    <div className="flex items-center gap-0.5 ml-2">
                        <ChevronLeft className="icon" size={16} />
                        <ChevronRight className="icon" size={16} />
                    </div>
                </div>

                <div className="flex-1 flex justify-center px-4">
                    <div className="search max-w-md w-full">
                        <ShieldHalf className="text-gray-400 shrink-0" size={14} />
                        <Search className="text-gray-400 shrink-0" size={14} />
                        <input
                            type="text"
                            defaultValue="ashish.dev/blog"
                            readOnly
                            className="w-full text-xs text-gray-700 bg-transparent outline-none cursor-default"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <Share className="icon" size={15} />
                    <Plus className="icon" size={15} />
                    <Copy className="icon" size={15} />
                </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto bg-white">
                <div className="blog">
                    <h2>My Developer Blog</h2>

                    <div className="space-y-8">
                        {blogPosts.map(({ id, image, title, date, link }) => (
                            <div key={id} className="blog-post">
                                <div className="col-span-2">
                                    <img src={image} alt={title} className="rounded-md object-cover" />
                                </div>

                                <div className="content">
                                    <p>{date}</p>
                                    <h3>{title}</h3>
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        Check out the full post <MoveRight className="icon-hover inline ml-1" size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
