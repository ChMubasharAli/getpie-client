import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Star,
  Filter,
  Search,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const allProjects = [
    {
      id: 1,
      title: "Local Restaurant Chain",
      description:
        "Increased customer base by 300% through targeted local marketing campaigns and social media engagement.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+300% customers",
      category: "Food & Beverage",
    },
    {
      id: 2,
      title: "Fitness Studio Network",
      description:
        "Generated 500+ leads per month for fitness centers through strategic digital marketing.",
      image:
        "https://images.unsplash.com/photo-1717500251997-80b234166d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "500+ leads/month",
      category: "Health & Fitness",
    },
    {
      id: 3,
      title: "Home Services Business",
      description:
        "Boosted revenue by 250% with comprehensive local SEO and targeted marketing strategies.",
      image:
        "https://images.unsplash.com/photo-1732605549144-caff6e4ecf95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+250% revenue",
      category: "Services",
    },
    {
      id: 4,
      title: "Retail Store Success",
      description:
        "Doubled foot traffic with strategic local campaigns and community engagement initiatives.",
      image:
        "https://images.unsplash.com/photo-1753161618037-e6a8f740fd47?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+200% traffic",
      category: "Retail",
    },
    {
      id: 5,
      title: "Tech Startup Launch",
      description:
        "Launched a tech startup with 1000+ early adopters through innovative digital marketing strategies.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "1000+ users",
      category: "Technology",
    },
    {
      id: 6,
      title: "Medical Practice Growth",
      description:
        "Expanded patient base by 180% through targeted healthcare marketing and reputation management.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+180% patients",
      category: "Healthcare",
    },
    {
      id: 7,
      title: "E-commerce Fashion Brand",
      description:
        "Achieved 400% increase in online sales through comprehensive e-commerce marketing strategy.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+400% sales",
      category: "E-commerce",
    },
    {
      id: 8,
      title: "Real Estate Agency",
      description:
        "Generated 300+ qualified leads monthly for real estate professionals through local marketing.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "300+ leads/month",
      category: "Real Estate",
    },
    {
      id: 9,
      title: "Educational Institute",
      description:
        "Increased student enrollment by 220% through targeted educational marketing campaigns.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+220% enrollment",
      category: "Education",
    },
    {
      id: 10,
      title: "Automotive Dealership",
      description:
        "Boosted car sales by 160% through innovative automotive marketing and customer engagement.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+160% sales",
      category: "Automotive",
    },
    {
      id: 11,
      title: "Beauty Salon Chain",
      description:
        "Expanded customer base by 280% through beauty-focused marketing and social media campaigns.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+280% customers",
      category: "Beauty & Wellness",
    },
    {
      id: 12,
      title: "Legal Firm Expansion",
      description:
        "Increased client acquisitions by 190% through professional legal marketing strategies.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      results: "+190% clients",
      category: "Legal Services",
    },
  ];

  const categories = [
    "All",
    "Food & Beverage",
    "Health & Fitness",
    "Services",
    "Technology",
    "Healthcare",
    "E-commerce",
    "Real Estate",
    "Education",
    "Automotive",
    "Beauty & Wellness",
    "Legal Services",
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Header Section - Matching hero style */}
      <section className="bg-gray-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('/market/heroBackgroundImage.jpg')`,
          }}
        />

        <div className="relative container  mx-auto px-6">
          <div className="max-w-7xl w-full mx-auto">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Star
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="currentColor"
                />
                All Success Stories
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Our
                <span className="text-green-500 text-shadow-md"> Success</span>
                <br />
                Stories
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl">
                Discover how we've helped businesses like yours achieve
                remarkable growth through our proven marketing strategies. Join
                the success story today!
              </p>
              <button
                onClick={() => navigate("/stepForm")}
                className="bg-white cursor-pointer text-black px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:text-white border border-white/30  transform  transition-all duration-300"
              >
                Your Project Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview - Matching features style */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: "Average ROI", value: "425%" },
              { icon: Users, label: "Businesses Helped", value: "50+" },
              { icon: DollarSign, label: "Revenue Generated", value: "$2.5M+" },
              { icon: CheckCircle2, label: "Success Rate", value: "98%" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#49A944] rounded-2xl mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & Search - Matching contact form style */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/market/contactUsBackgroundImage.jpg')`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="bg-[#49A944] bg-clip-text text-transparent text-sm lg:text-base tracking-widest uppercase mb-4">
                FILTER & SEARCH
              </p>
              <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                Find Your Industry Success
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-4 pl-10 pr-4 focus:border-green-400 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-600 text-white py-4 pl-10 pr-4 focus:border-green-400 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="bg-gray-900 text-white"
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Exact same style as Available Businesses */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our complete portfolio of successful marketing
              campaigns and business transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-[#49A944] text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section - Matching marketing programme style */}

      <section className="container mx-auto rounded-e-2xl  relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/market/heroBackgroundImage.jpg')`,
          }}
        />
        <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the businesses that have transformed their growth with our
            proven marketing strategies. It's quick, easy, and absolutely no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-8 py-4 hover:bg-white/30 transition-all duration-300 font-semibold">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer - Same as landing page */}
      <div className="py-6 mt-6 bg-gray-900 text-center">
        <p className="text-sm text-gray-400 max-w-4xl mx-auto px-6">
          <strong>DISCLAIMER:</strong> Estimates are for informational purposes
          only. Actual cash back and savings may vary based on business volume,
          card type, and other factors. PiePay does not guarantee any minimum
          savings or cash back amounts.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
