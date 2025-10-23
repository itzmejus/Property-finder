const teamMembers = [
    {
        name: "Justin Johnson",
        position: "Lead Web Developer",
        image: "https://justinjohnson.netlify.app/assets/JustinTeamOut-BVVczrOv.JPEG",
    },
    {
        name: "Justin Johnson",
        position: "UI/UX Designer",
        image: "https://justinjohnson.netlify.app/assets/justin-C4umzM8n.JPEG",
    },
    {
        name: "David Lee",
        position: "Backend Engineer",
        image: "https://justinjohnson.netlify.app/assets/justinFormal-Dm9AI-f6.JPEG",
    },
    {
        name: "Justin Johnson",
        position: "SEO Specialist",
        image: "https://justinjohnson.netlify.app/assets/justin-C4umzM8n.JPEG",
    },
    {
        name: "Justin Johnson",
        position: "Lead Web Developer",
        image: "https://justinjohnson.netlify.app/assets/JustinTeamOut-BVVczrOv.JPEG",
    },
    {
        name: "Justin Johnson",
        position: "UI/UX Designer",
        image: "https://justinjohnson.netlify.app/assets/justin-C4umzM8n.JPEG",
    },
    {
        name: "David Lee",
        position: "Backend Engineer",
        image: "https://justinjohnson.netlify.app/assets/justinFormal-Dm9AI-f6.JPEG",
    },
    {
        name: "Justin Johnson",
        position: "SEO Specialist",
        image: "https://justinjohnson.netlify.app/assets/justin-C4umzM8n.JPEG",
    },
];

const About = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            At Rose Island Real Estate, we strive to redefine the real estate experience by transforming houses into homes. Guided by innovation, integrity, and an unwavering commitment, we create communities that thrive and foster enduring relationships. Our mission is to make the journey to homeownership seamless, inspiring, and memorable.
                        </p>
                    </div>

                    {/* Section 1: Our Story */}
                    <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vison</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our vision is to be a trusted leader in real estate, helping every individual find their ideal home—a sanctuary where dreams come true. We strive to foster thriving communities and create lasting connections.
                        </p>
                    </div>

                    {/* Section 2: Our Mission */}
                    <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are committed to building not just houses, but homes that inspire. Our mission is to provide a smooth, memorable homeownership experience, setting new standards of trust and excellence.
                        </p>
                    </div>

                    {/* Section 3: Our Values */}
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h2>
                        <ul className="grid sm:grid-cols-2 gap-6 text-gray-600">
                            <li className="bg-gray-100 p-4 rounded-xl">
                                <span className="font-semibold text-gray-800">Innovation:</span> We
                                constantly explore new technologies to stay ahead of the curve.
                            </li>
                            <li className="bg-gray-100 p-4 rounded-xl">
                                <span className="font-semibold text-gray-800">Integrity:</span> We
                                believe in honesty, transparency, and accountability in all that we do.
                            </li>
                            <li className="bg-gray-100 p-4 rounded-xl">
                                <span className="font-semibold text-gray-800">Collaboration:</span> Great
                                things happen when creative minds work together.
                            </li>
                            <li className="bg-gray-100 p-4 rounded-xl">
                                <span className="font-semibold text-gray-800">Excellence:</span> We
                                aim for perfection in every project we deliver.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-10">Meet Our Team</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        Our Experienced Real Estate Agents
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-42 h-42 mx-auto  object-cover mb-4"
                                />
                                <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                                <p className="text-gray-500">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
