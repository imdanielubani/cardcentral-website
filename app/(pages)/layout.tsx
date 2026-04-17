// This layout wraps all inner pages (/about, /rates, /blog, etc.)
// You can add page-level providers, banners, or transitions here later.
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
