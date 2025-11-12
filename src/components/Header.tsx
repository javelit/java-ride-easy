import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link to={"/"}>
                            <span className="text-2xl transform scale-x-[-1]">🚡</span>
                            <span className="text-xl font-bold text-foreground">Javelit</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/playground"
                            className="hover:text-muted-foreground transition-colors"
                        >
                            Playground
                        </Link>
                        <a
                            href="https://docs.javelit.io/#latest-news-from-the-dev-diary"
                            target="_blank"
                            className="hover:text-muted-foreground transition-colors"
                        >
                            News
                        </a>
                        <a
                            href="https://docs.javelit.io"
                            className="hover:text-muted-foreground transition-colors"
                        >
                            Documentation
                        </a>
                        <a
                            href="https://github.com/javelit/javelit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-muted-foreground transition-colors"
                        >
                            GitHub
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <Button
                        asChild
                        className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
                    >
                        <a href="https://docs.javelit.io/get-started" target={"_blank"}>
                            Get Started
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
