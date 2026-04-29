export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Subash Joshi. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="/privacy-policy.html" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service.html" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
