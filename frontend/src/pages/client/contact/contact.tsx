import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

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
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="text" placeholder="Subject" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2896306285287!2d-0.18657908573439813!3d5.6568129339724615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0x5e315c3e2d91c53d!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1625689362101!5m2!1sen!2sgh"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="space-y-2">
            <p className="flex items-center">
              <MapPin className="mr-2" /> 123 Food Street, Accra, Ghana
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" /> +233 123 456 7890
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" /> info@avenfoods.com
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
