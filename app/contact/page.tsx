'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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

      toast.success('Message envoyé avec succès !');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Pour toute question sur nos gîtes en Ardèche méridionale, n'hésitez pas à nous contacter
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-light text-gray-800 mb-8">Informations</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6DFD8] p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Notre Adresse</p>
                    <p className="text-gray-600 mt-1">Le Mas d'Eylieux<br />07220 Saint Montant</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6DFD8] p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600 mt-1">lemasdeylieux@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6DFD8] p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <p className="text-gray-600 mt-1">+33 4 75 52 XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6DFD8] p-3 rounded-full">
                    <Clock className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Disponibilités</p>
                    <p className="text-gray-600 mt-1">
                      Tous les jours<br />
                      9h - 20h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-light text-gray-800 mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-[#8B7355] transition-colors"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-[#8B7355] transition-colors"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-[#8B7355] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-[#8B7355] transition-colors"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-[#8B7355] transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-[#8B7355] hover:bg-[#7A6347] text-white font-medium transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}