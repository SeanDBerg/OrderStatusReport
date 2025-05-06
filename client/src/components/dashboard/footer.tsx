const Footer = () => {
  return (
    <footer className="bg-card border-t border-border px-3 py-2 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-xs text-muted-foreground">
          &copy; 2023 AnalyticsPro. <span className="text-xs font-medium bg-muted text-muted-foreground px-1 py-0.5 rounded">Demo</span>
        </div>
        <div className="mt-1 md:mt-0 text-xs text-muted-foreground">
          Static demonstration. All data is fictional.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
