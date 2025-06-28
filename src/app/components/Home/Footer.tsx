import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center sm:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-clip bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent ">
              NewsHub
            </h3>
            <p className="text-muted-foreground text-sm font-bold">
              Your trusted source for breaking news, trending stories, and
              in-depth analysis from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ">
            <h4 className="text-lg font-bold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/trending"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="/bookmark"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-lg font-bold text-primary">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/business"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/category/technology"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/category/sports"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/category/health"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-5 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NewsHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
