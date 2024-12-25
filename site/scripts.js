const translations = {
    de: {
        title: "Willkommen beim Privaten Nachhilfeinstitut",
        aboutLink: "Über Uns",
        servicesLink: "Unsere Dienste",
        contactLink: "Kontaktinformationen",
        aboutTitle: "Über Uns",
        aboutText: "Wir bieten qualitativ hochwertige Nachhilfe in verschiedenen Schulfächern für Schüler aller Altersgruppen in Deutschland.",
        servicesTitle: "Unsere Dienste",
        service1Title: "Mathematik Nachhilfe",
        service1Text: "Verbessern Sie Ihre Mathekenntnisse mit unseren erfahrenen Lehrern.",
        service2Title: "Deutsch Nachhilfe",
        service2Text: "Meistern Sie die deutsche Sprache mit unserem gezielten Unterricht.",
        service3Title: "Englisch Nachhilfe",
        service3Text: "Verbessern Sie Ihr Englisch für Schule und Alltag.",
        contactTitle: "Kontaktinformationen",
        contactPhone: "Telefon: +49 123 456 789",
        contactEmail: "Email: info@nachhilfeinstitut.de",
        contactAddress: "Adresse: Musterstraße 1, 12345 Berlin, Deutschland",
        footerText: "&copy; 2024 Privates Nachhilfeinstitut. Alle Rechte vorbehalten."
    },
    en: {
        title: "Welcome to the Private Tutoring Institute",
        aboutLink: "About Us",
        servicesLink: "Our Services",
        contactLink: "Contact Information",
        aboutTitle: "About Us",
        aboutText: "We offer high-quality tutoring in various school subjects for students of all ages in Germany.",
        servicesTitle: "Our Services",
        service1Title: "Math Tutoring",
        service1Text: "Improve your math skills with our experienced teachers.",
        service2Title: "German Tutoring",
        service2Text: "Master the German language with our targeted lessons.",
        service3Title: "English Tutoring",
        service3Text: "Enhance your English for school and everyday life.",
        contactTitle: "Contact Information",
        contactPhone: "Phone: +49 123 456 789",
        contactEmail: "Email: info@nachhilfeinstitut.de",
        contactAddress: "Address: Musterstraße 1, 12345 Berlin, Germany",
        footerText: "&copy; 2024 Private Tutoring Institute. All rights reserved."
    },
    ar: {
        title: "مرحبًا بكم في معهد التدريس الخاص",
        aboutLink: "من نحن",
        servicesLink: "خدماتنا",
        contactLink: "معلومات الاتصال",
        aboutTitle: "من نحن",
        aboutText: "نحن نقدم دروسًا خصوصية عالية الجودة في مختلف المواد الدراسية للطلاب من جميع الأعمار في ألمانيا.",
        servicesTitle: "خدماتنا",
        service1Title: "دروس الرياضيات",
        service1Text: "حسن مهاراتك في الرياضيات مع معلمينا ذوي الخبرة.",
        service2Title: "دروس اللغة الألمانية",
        service2Text: "أتقن اللغة الألمانية مع دروسنا الموجهة.",
        service3Title: "دروس اللغة الإنجليزية",
        service3Text: "حسن لغتك الإنجليزية للمدرسة والحياة اليومية.",
        contactTitle: "معلومات الاتصال",
        contactPhone: "الهاتف: +49 123 456 789",
        contactEmail: "البريد الإلكتروني: info@nachhilfeinstitut.de",
        contactAddress: "العنوان: Musterstraße 1, 12345 برلين، ألمانيا",
        footerText: "&copy; 2024 معهد التدريس الخاص. جميع الحقوق محفوظة."
    }
};

function switchLanguage(lang) {
    const elements = {
        title: "title",
        aboutLink: "about-link",
        servicesLink: "services-link",
        contactLink: "contact-link",
        aboutTitle: "about-title",
        aboutText: "about-text",
        servicesTitle: "services-title",
        service1Title: "service-1-title",
        service1Text: "service-1-text",
        service2Title: "service-2-title",
        service2Text: "service-2-text",
        service3Title: "service-3-title",
        service3Text: "service-3-text",
        contactTitle: "contact-title",
        contactPhone: "contact-phone",
        contactEmail: "contact-email",
        contactAddress: "contact-address",
        footerText: "footer-text"
    };

    for (let key in elements) {
        document.getElementById(elements[key]).innerHTML = translations[lang][key];
    }
}

document.getElementById("lang-de").addEventListener("click", () => switchLanguage("de"));
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-ar").addEventListener("click", () => switchLanguage("ar"));
