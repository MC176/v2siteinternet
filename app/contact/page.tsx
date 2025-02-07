'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Calendar, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState<'reservation' | 'inquiry'>('reservation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
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
          message: formData.message,
        },
        'HDCS6Ji9RafDN5joV'
      );

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message envoyé avec succès !');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
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
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("/images/gites/notused/chat4.png")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Pour toute question sur nos gîtes en Ardèche méridionale, n'hésitez pas à nous contacter
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        {/* Contact Buttons */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-lg py-8 px-6 rounded-2xl shadow-xl transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02]"
              onClick={() => handleOpenForm('reservation')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine" />
              <Calendar className="mr-3 h-6 w-6" />
              Réserver votre séjour
            </Button>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white text-lg py-8 px-6 rounded-2xl shadow-xl transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02]"
              onClick={() => handleOpenForm('inquiry')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine" />
              <MessageCircle className="mr-3 h-6 w-6" />
              Demander des informations
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 group">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Notre Adresse</p>
                <p className="text-gray-600 mt-1">Le Mas d'Eylieux<br />07220 Saint Montant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="bg-gradient-to-br from-fuchsia-500 to-pink-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600 mt-1">lemasdeylieux@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="bg-gradient-to-br from-violet-500 to-purple-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Téléphone</p>
                <p className="text-gray-600 mt-1">+33 4 75 52 XX XX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Disponibilités</p>
                <p className="text-gray-600 mt-1">Tous les jours, 9h - 20h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-gray-800">
              {formType === 'reservation' ? 'Réserver votre séjour' : 'Demande de renseignements'}
            </DialogTitle>
          </DialogHeader>
          {isSubmitting ? (
            <div className="py-8 flex flex-col items-center justify-center space-y-4">
              {progress < 100 ? (
                <>
                  <div className="relative w-16 h-16">
                    <Loader2 className="w-16 h-16 animate-spin text-indigo-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium">{progress}%</span>
                    </div>
                  </div>
                  <p className="text-center font-medium text-gray-700">
                    Envoi en cours...
                  </p>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-16 h-16 text-green-500 animate-scale" />
                  <p className="text-center font-medium text-gray-700">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <textarea
                    placeholder="Votre message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit"
                className="w-full py-6 text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white transition-all duration-300 rounded-xl"
              >
                Envoyer
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <Toaster position="top-center" />
    </div>
  );
}