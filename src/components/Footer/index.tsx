function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
// This file is part of the My Portfolio project.