interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}
export function SectionHeading({
  title,
  subtitle
}: SectionHeadingProps) {
  return <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">{subtitle}</p>}
      <div className="mt-4 flex justify-center">
        <div className="w-16 h-1 bg-emerald-600 dark:bg-emerald-400 rounded-full transition-colors duration-300"></div>
      </div>
    </div>;
}