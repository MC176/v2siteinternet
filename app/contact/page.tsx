'use client'
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Calendar, MessageCircle, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState<'reservation' | 'inquiry'>('reservation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    message: ''
  });

  const handleOpenForm = (type: 'reservation' | 'inquiry') => {
    setFormType(type);
    setShowContactForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const animateProgress = async () => {
        for (let i = 0; i <= 100; i += 2) {
          setProgress(i);
          await new Promise(resolve => setTimeout(resolve, 20));
        }
      };
      animateProgress();

      await emailjs.send(
        'service_a2euq6h',
        'template_v867cbf',
        {
          to_email: 'lemasdeylieux@gmail.com',
          from_name: `${formData.prenom} ${formData.nom}`,
          from_email: formData.email,
          phone: formData.telephone,
          address: formData.adresse,
          message: formData.message,
        },
        'HDCS6Ji9RafDN5joV'
      );

      toast.success('Message envoyé avec succès !');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowContactForm(false);
        setProgress(0);
      }, 1500);
      
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-[70vh] bg-cover bg-center bg-fixed transform-gpu"
        style={{ 
          backgroundImage: 'url("images/gites/notused/chat4.avif")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90 max-w-2xl font-light">
            
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 group">
              <div className="bg-black/90 p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Notre Adresse</p>
                <p className="text-gray-600 mt-1">Le Mas d&apos;Eylieux<br />07220 Saint Montant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="bg-black/90 p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600 mt-1">contact@lemasdeylieux.fr</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="bg-black/90 p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Téléphone</p>
                <p className="text-gray-600 mt-1">+33 6 83 06 02 26</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Call-to-Action Buttons */}
      <div className="max-w-4xl mx-auto px-4 mt-32 mb-20">
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button
            onClick={() => handleOpenForm('reservation')}
            className="group relative flex-1 inline-flex items-center justify-center px-8 py-6 bg-white text-lg border-2 border-black text-black rounded-2xl transition-all duration-500 hover:bg-black hover:text-white hover:scale-105 hover:shadow-2xl"
          >
            <span className="absolute inset-0 bg-black/5 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-right"></span>
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6" />
              <span className="font-medium">Réserver votre séjour</span>
              <ArrowRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </button>
          
          <button
            onClick={() => handleOpenForm('inquiry')}
            className="group relative flex-1 inline-flex items-center justify-center px-8 py-6 bg-black text-lg border-2 border-black text-white rounded-2xl transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl"
          >
            <span className="absolute inset-0 bg-white/5 rounded-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">Demander des informations</span>
              <ArrowRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </button>
        </div>
      </div>

      {/* Contact Form Modal with Enhanced Design */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-[500px] w-full shadow-2xl transform transition-all duration-300">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              {formType === 'reservation' ? 'Réserver votre séjour' : 'Demande de renseignements'}
            </h2>
            
            {isSubmitting ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                {progress < 100 ? (
                  <>
                    <div className="relative w-20 h-20">
                      <Loader2 className="w-20 h-20 animate-spin text-black" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-medium">{progress}%</span>
                      </div>
                    </div>
                    <p className="text-center font-medium text-gray-700 mt-4">
                      Envoi en cours...
                    </p>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-20 h-20 text-green-500 animate-bounce" />
                    <p className="text-center font-medium text-gray-700 mt-4">
                      Message envoyé avec succès !
                    </p>
                  </>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Adresse"
                      value={formData.adresse}
                      onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <textarea
                      placeholder="Votre message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 px-6 bg-black text-white rounded-xl transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02] transform"
                >
                  Envoyer
                </button>
              </form>
            )}
            
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;