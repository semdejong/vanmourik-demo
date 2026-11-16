export default function PageFrame({
  section,
  children,
}: {
  section: string;
  children: React.ReactNode;
}) {
  return (
    <article data-section={section} className="page rise">
      {children}
    </article>
  );
}
