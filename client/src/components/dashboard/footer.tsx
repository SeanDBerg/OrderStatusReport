const Footer = () => {
  return (
    <footer className="bg-card border-t border-border px-6 py-4 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground">
          &copy; 2023 AnalyticsPro. All rights reserved. <span className="text-xs font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded">Demo Version</span>
        </div>
        <div className="mt-3 md:mt-0 text-sm text-muted-foreground">
          This is a static demonstration. All data shown is fictional.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
