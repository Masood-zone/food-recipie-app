import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Jane Smith",
    role: "Head Chef",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Mike Johnson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1636041263374-dff82464f619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const achievements = [
  "Best Local Restaurant 2022",
  "5-Star Food Safety Rating",
  "1 Million Customers Served",
  "Sustainable Business Award 2023",
];

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-14 py-8"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Aven Foods
      </motion.h1>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg">
          Aven Foods started as a small family-owned restaurant in 2010. With
          our commitment to quality ingredients and exceptional taste, we've
          grown into a beloved chain across the country. Our mission is to bring
          joy through delicious, wholesome meals to every customer we serve.
        </p>
      </motion.section>

      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
        <ul className="list-disc list-inside text-lg">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-blue-800 hover:text-blue-900">
            <Linkedin size={24} />
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}
