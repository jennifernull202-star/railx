export default function SEOTextBlock({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="text-2xl font-bold text-primary mb-4">{heading}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
