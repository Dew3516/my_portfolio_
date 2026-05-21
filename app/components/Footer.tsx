export default function Footer() {
  return (
    <footer className="text-center p-8 mt-10 border-t border-gray-300 dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Shashini Dewmini — All Rights Reserved
      </p>
      <a href="#top" className="hover:text-fuchsia-500 hover:underline flex text-lg justify-end text-white mr-10">
            Back to top ↑
          </a>
    </footer>
  );
}
