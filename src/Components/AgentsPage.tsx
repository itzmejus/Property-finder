import { useState } from "react";

const agentsData = [
    {
        name: "Sarah Johnson",
        title: "Real Estate Agent",
        image: "https://justinjohnson.netlify.app/assets/JustinTeamOut-BVVczrOv.JPEG",
        phone: "+1 (555) 234-****",
        email: "***.johnson@example.com",
    },
    {
        name: "David Brown",
        title: "Senior Property Consultant",
        image: "https://justinjohnson.netlify.app/assets/JustinTeamOut-BVVczrOv.JPEG",
        phone: "+1 (555) 123-****",
        email: "david.***wn@example.com",
    },
    {
        name: "Jessica Miller",
        title: "Sales & Leasing Agent",
        image: "https://justinjohnson.netlify.app/assets/JustinTeamOut-BVVczrOv.JPEG",
        phone: "+1 (555) 456-****",
        email: "jessica.***@example.com",
    },
    {
        name: "Robert Smith",
        title: "Luxury Property Specialist",
        image: "https://justinjohnson.netlify.app/assets/JustinTeamOut-BVVczrOv.JPEG",
        phone: "+1 (555) 987-****",
        email: "robert.****@example.com",
    },
];

const AgentsPage = () => {
    const [search, setSearch] = useState("");

    const filteredAgents = agentsData.filter((agent) =>
        agent.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Page Heading */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Agents</h1>
                <p className="text-gray-600 mb-10">
                    Our experienced team of agents is here to help you find your dream property.
                </p>

                {/* Search Bar */}
                <div className="mb-12 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search agents..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {filteredAgents.map((agent, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
                        >
                            <img
                                src={agent.image}
                                alt={agent.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {agent.name}
                                </h2>
                                <p className="text-indigo-600 mb-3">{agent.title}</p>

                                <div className="text-sm text-gray-600 space-y-1">
                                    <p>📞 {agent.phone}</p>
                                    <p>✉️ {agent.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredAgents.length === 0 && (
                    <p className="text-gray-500 mt-12">No agents found.</p>
                )}
            </div>
        </div>
    );
};

export default AgentsPage;
