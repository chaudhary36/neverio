// components/FeatureCard.js
export default function FeatureCard({ title, description, icon }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-4">{icon}</div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  