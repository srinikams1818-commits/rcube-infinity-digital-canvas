import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    initials: "RK",
    color: "brand-purple",
  },
  {
    name: "Priya Sharma",
    role: "Head of Marketing",
    initials: "PS",
    color: "brand-blue",
  },
  {
    name: "Arjun Menon",
    role: "Lead Developer",
    initials: "AM",
    color: "brand-orange",
  },
  {
    name: "Divya Ramesh",
    role: "Creative Director",
    initials: "DR",
    color: "brand-purple",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate professionals dedicated to driving your digital success with creativity and expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative glass-strong rounded-2xl p-6 text-center hover:shadow-elevated transition-all">
                {/* Avatar with Initials */}
                <div className={`w-24 h-24 rounded-full bg-${member.color}/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                  <span className={`text-2xl font-bold text-${member.color}`}>{member.initials}</span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                
                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-brand-purple hover:bg-brand-purple/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-brand-purple hover:bg-brand-purple/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
