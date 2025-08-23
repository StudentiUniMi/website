import { Service } from "@/types"

export const services: Array<Service> = [
  // === GUIDES ===
  {
    id: "scaricare-videolezioni",
    category: "guide",
    image: "video.png",
    name: { it: "Scaricare videolezioni", en: "Download videolectures" },
    link: "https://wiki.studentiunimi.it/guida:scaricare_videolezioni_ariel",
    description: {
      it: "Guida semplice e veloce per scaricare le videolezioni da Ariel.",
      en: "Step-by-step tutorial to download video lessons from Ariel.",
    },
  },
  {
    id: "disiscrizione-mailing-list",
    category: "guide",
    image: "mail.png",
    name: { it: "Disiscriversi dalle mailing list", en: "Unsubscribe from mailing list" },
    link: "https://wiki.studentiunimi.it/guida:disiscrizione_mailing_list",
    description: {
      it: "Guida per disiscriversi dalle mailing list.",
      en: "How to unsubscribe from mailing list.",
    },
  },
  // === REDIRECTS ===
  {
    id: "unimia",
    category: "redirect",
    name: { it: "Unimia", en: "Unimia" },
    link: "http://unimia.unimi.it/portal/server.pt",
    description: {
      it: "Portale d'accesso ai servizi d'ateneo.",
      en: "Hub to access all UniMi Services.",
    },
  },
  {
    id: "iscrizione-esami",
    category: "redirect",
    name: { it: "Iscrizione esami", en: "Registration to exams" },
    link: "http://studente.unimi.it/foIscrizioneEsami/",
    description: {
      it: "Iscriviti agli appelli d'esame o controlla le iscrizioni effettuate.",
      en: "Manage your registrations to your exams.",
    },
  },
  {
    id: "verbalizzazione-esami",
    category: "redirect",
    name: { it: "Verbalizzazione esami", en: "Exams results" },
    link: "http://studente.unimi.it/foVerbalizzazione/",
    description: {
      it: "Controlla gli esiti finali o parziali dei tuoi esami.",
      en: "Check the final or partial results of your exams.",
    },
  },
  {
    id: "servizi-sifa",
    category: "redirect",
    name: { it: "Servizi SIFA", en: "Sifa" },
    link: "http://unimia.unimi.it/portal/server.pt/community/unimia/207/servizi_sifa/",
    description: {
      it: "Accedi a tutti i servizi online SIFA.",
      en: "Access all the SIFA online services.",
    },
  },
  {
    id: "gestione-pagamenti",
    category: "redirect",
    name: { it: "Gestione pagamenti", en: "Payments" },
    link: "https://studente.unimi.it/fo_pagamenti/checkLogin.jsp",
    description: {
      it: "Sezione del SIFA riguardante i pagamenti.",
      en: "Enrolment renewal, tuition fees and other payments.",
    },
  },
  {
    id: "piano-di-studi",
    category: "redirect",
    name: { it: "Presentazione piano di studi", en: "Plan of study" },
    link: "https://studente.unimi.it/pianiDiStudio/client/checkLogin.asp",
    description: {
      it: "Sezione apposita per presentare il piano di studi.",
      en: "Submission page of study plans.",
    },
  },
  {
    id: "diritto-allo-studio",
    category: "redirect",
    name: { it: "Portale diritto allo studio", en: "Education Grants Helpdesk" },
    link: "http://studente.unimi.it/dirittoallostudio",
    description: {
      it: "Portale per il diritto allo studio.",
      en: "Education Grants Helpdesk",
    },
  },
  {
    id: "ariel",
    category: "redirect",
    name: { it: "Ariel", en: "Ariel" },
    link: "https://ariel.unimi.it/",
    description: {
      it: "Siti dei corsi didattici.",
      en: "Courses websites.",
    },
  },
  {
    id: "portale-studenti",
    category: "redirect",
    name: { it: "Portale studenti", en: "Students’ hub" },
    link: "https://easystaff.divsi.unimi.it/PortaleStudenti/",
    description: {
      it: "Orari delle lezioni, occupazione delle aule, appelli d'esame.",
      en: "Lessons schedule, rooms and exam sessions.",
    },
  },
  {
    id: "servizio-bibliotecario",
    category: "redirect",
    name: { it: "Servizio bibliotecario", en: "Library services" },
    link: "https://www.sba.unimi.it/",
    description: {
      it: "Tutte le informazioni sulle biblioteche.",
      en: "All the informations about UniMi libraries.",
    },
  },
  {
    id: "minerva",
    category: "redirect",
    name: { it: "Minerva @ UniMi", en: "Minerva @ UniMi" },
    link: "https://unimi.primo.exlibrisgroup.com/",
    description: {
      it: "Risorse bibliografiche.",
      en: "Access point to the bibliographic resources.",
    },
  },
  {
    id: "informastudenti",
    category: "redirect",
    name: { it: "Informastudenti", en: "InformaStudenti" },
    link: "https://informastudenti.unimi.it/",
    description: {
      it: "Accedi al portale InformaStudenti.",
      en: "Online Student Desk.",
    },
  },
  // === TOOLS ===
  {
    id: "university-map",
    category: "tool",
    image: "map.png",
    name: { it: "Mappa degli spazi universitari", en: "Map of university spaces" },
    link: "https://www.google.com/maps/d/viewer?mid=1601q0wxFe22mtgotqZ7AJzrrWEOYfhs&ll=45.57712672502888%2C9.425802988620111&z=10",
    description: {
      it: "Mappa interattiva con aule, biblioteche, mense e principali spazi dell’Università di Milano.",
      en: "Interactive map with classrooms, libraries, cafeterias and main university spaces in Milan.",
    },
  },
  {
    id: "admission-rankings",
    category: "tool",
    image: "rankings.png",
    name: { it: "Graduatorie delle ammissioni", en: "Admission rankings" },
    link: "https://t.me/graduatorieUniMi",
    description: {
      it: "Canale Telegram con le graduatorie di ammissione ai corsi di laurea UniMi.",
      en: "Telegram channel with admission rankings for UniMi degree programs.",
    },
  },
  {
    id: "overleaf",
    category: "tool",
    name: { it: "Overleaf", en: "Overleaf" },
    link: "https://overleaf.studentiunimi.it/",
    description: {
      it: "Editor LaTeX collaborativo basato su cloud per manipolare documenti scientifici.",
      en: "Cloud-based collaborative LaTeX editor used for manipulating scientific papers.",
    },
  },
  {
    id: "hedgedoc",
    category: "tool",
    name: { it: "Hedgedoc", en: "Hedgedoc" },
    link: "https://hedgedoc.studentiunimi.it/",
    description: {
      it: "Servizio che permette di prendere appunti in collaborazione tra più studenti.",
      en: "Service that allows you to take notes in collaboration between multiple students.",
    },
  },
  {
    id: "paste",
    category: "tool",
    name: { it: "Paste", en: "Paste" },
    link: "https://paste.studentiunimi.it/",
    description: {
      it: "Servizio pensato per i programmatori, che permette di condividere codice in maniera semplice e sicura.",
      en: "Service designed for programmers, which allows you to share code in a simple and secure way.",
    },
  },
]
