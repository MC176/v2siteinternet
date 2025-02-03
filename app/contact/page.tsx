'use client'
import React from 'react';
import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/presentation/pont.jpg")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-light text-white tracking-wider">CONTACTEZ-NOUS</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-light text-gray-800 mb-6">Informations</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#9B8579] mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Notre Adresse à Saint Montant</p>
                    <p className="text-gray-600">15 Rue des Lavandes<br />13100 Aix-en-Provence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#9B8579] mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contact@provence-luxe.fr</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#9B8579] mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <p className="text-gray-600">+33 4 42 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-[#9B8579] mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Horaires</p>
                    <p className="text-gray-600">Lundi - Vendredi: 9h - 19h<br />Samedi: 10h - 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 shadow-sm rounded-lg">
            <h2 className="text-2xl font-light text-gray-800 mb-8">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#9B8579] focus:ring-[#9B8579] transition-colors"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#9B8579] focus:ring-[#9B8579] transition-colors"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#9B8579] focus:ring-[#9B8579] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#9B8579] focus:ring-[#9B8579] transition-colors"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#9B8579] focus:ring-[#9B8579] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg bg-[#9B8579] hover:bg-[#8A7468] text-white font-medium transition-colors"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <Contact />;
}

export default App;