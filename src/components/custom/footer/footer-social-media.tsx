export const FooterSocialMedia = ({
  icon,
  link,
  label,
}: {
  icon: React.ReactNode;
  link: string;
  label: string;
}) => {
  return (
    <a
      href={link}
      className="transition-all duration-300 transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
};
