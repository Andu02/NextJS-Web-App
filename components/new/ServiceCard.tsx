import Link from "next/link";

export default function ServiceCard({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="service-card">
      <img src="/card.png" alt="" className="service-card-bg" />
      <div className="service-card-content">
        <div className="service-card-icon">{icon}</div>
        <span className="service-card-title">{title}</span>
      </div>
    </Link>
  );
}
