import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["191/380, Near Janki Devi Public School", "Sector 19, Pratap Nagar, Jaipur – 302033"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["6378072531"],
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
    const fileNote = attachedFile ? `%0A%0A*Attachment:* ${encodeURIComponent(attachedFile.name)} (Please request via email)` : '';
    const whatsappMessage = `*New Contact Form Message*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}${fileNote}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919313547809?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: attachedFile 
        ? "Complete sending your message on WhatsApp. Please email the attachment separately." 
        : "Complete sending your message on WhatsApp.",
    });
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-gold/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    {item.details.map((detail, index) => (
                      item.title === "Phone" ? (
                        <a key={index} href={`tel:${detail.replace(/\s/g, '')}`} className="text-muted-foreground text-sm hover:text-gold transition-colors block">
                          {detail}
                        </a>
                      ) : item.title === "Email" ? (
                        <a key={index} href={`mailto:${detail}`} className="text-muted-foreground text-sm hover:text-gold transition-colors block">
                          {detail}
                        </a>
                      ) : (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
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
                  Note: File will be mentioned in WhatsApp. Please email the file to info@agrohainfra.com
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
