export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {currentYear} Jessica Wang
        </p>
      </div>
    </footer>
  );
}
