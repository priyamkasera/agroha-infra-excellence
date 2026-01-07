import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Paperclip, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import agrohaLogo from "@/assets/agroha-logo.jpg";
import receptionDesk from "@/assets/reception-desk.png";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["191/380, Near Janki Devi Public School", "Sector 19, Pratap Nagar, Jaipur – 302033"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["0141-3162093"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@agrohainfra.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday to Saturday: 10:00 AM – 6:00 PM", "Sunday: Holiday"],
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setAttachedFile(file);
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const fileNote = attachedFile 
      ? `%0A%0A📎 *File to attach:* ${encodeURIComponent(attachedFile.name)}%0A(Please use the attachment button in WhatsApp to send this file)` 
      : '';
    const whatsappMessage = `*New Contact Form Message*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}${fileNote}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919313547809?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    if (attachedFile) {
      toast({
        title: "WhatsApp Opened",
        description: "Send the text message first, then tap the 📎 button in WhatsApp to attach your file manually.",
        duration: 8000,
      });
    } else {
      toast({
        title: "Opening WhatsApp",
        description: "Complete sending your message on WhatsApp.",
      });
    }
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted geometric-pattern">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Contact us for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Reception & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* AI Reception Card */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <div className="flex items-center gap-6 mb-4">
                <img 
                  src={agrohaLogo} 
                  alt="Agroha Infra Logo" 
                  className="w-20 h-20 rounded-xl object-contain bg-background p-2 border border-border"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Welcome to Agroha Infra</h3>
                  <p className="text-muted-foreground text-sm">Virtual Reception Desk</p>
                </div>
              </div>

              {/* Reception Photo */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={receptionDesk} 
                  alt="Agroha Infra Reception" 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="bg-gradient-hero rounded-xl p-6 border border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">How can we assist you today?</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Thank you for visiting Agroha Infra Consultant Pvt. Ltd. We're here to help with your infrastructure consulting needs. Feel free to reach out via the contact form or use our details below.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Horizontal Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                  </div>
                  <div className="pl-13">
                    {item.details.map((detail, index) => (
                      item.title === "Phone" ? (
                        <a key={index} href={`tel:${detail.replace(/\s/g, '')}`} className="text-muted-foreground text-xs hover:text-gold transition-colors block">
                          {detail}
                        </a>
                      ) : item.title === "Email" ? (
                        <a key={index} href={`mailto:${detail}`} className="text-muted-foreground text-xs hover:text-gold transition-colors block">
                          {detail}
                        </a>
                      ) : (
                        <p key={index} className="text-muted-foreground text-xs">
                          {detail}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* File Attachment */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Attach File (Optional)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls"
                />
                {!attachedFile ? (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dashed border-border bg-background text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                  >
                    <Paperclip className="h-5 w-5" />
                    <span>Click to attach a file (PDF, DOC, Images - Max 10MB)</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gold/50 bg-gold/5">
                    <Paperclip className="h-5 w-5 text-gold" />
                    <span className="text-foreground flex-1 truncate">{attachedFile.name}</span>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
                    >
                      <X className="h-4 w-4 text-destructive" />
                    </button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  Note: WhatsApp doesn't support auto-attach. After sending the message, use the 📎 button in WhatsApp to attach your file.
                </p>
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
