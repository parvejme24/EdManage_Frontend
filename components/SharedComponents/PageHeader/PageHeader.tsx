import Link from "next/link";

interface PageHeaderProps {
  children: React.ReactNode;
}

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="px-5 lg:px-0">
      <div className="container mx-auto max-w-7xl p-5 bg-gray-100 my-6 rounded-md">
        <nav className="text-gray-700 text-sm md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{children}</span>
        </nav>
      </div>
    </div>
  );
}
