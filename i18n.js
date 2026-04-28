/**
 * cora — i18n translations
 * Default language: French (fr)
 * Supported: fr, en, es, de, it, ru, pl, ko, ja, zh
 */

const CORA_I18N = {

  /* ─── FRENCH (default) ─────────────────────────────────────── */
  fr: {
    lang: 'fr',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'fonctions',
      story: 'notre histoire',
      design: 'design',
      order: 'commander',
      contact: 'contact',
    },
    footer: {
      tagline: 'des écouteurs pensés pour ta vie — pas contre elle. montréal, 2025.',
      nav: 'navigation',
      legal: 'légal',
      privacy: 'politique de confidentialité',
      cgv: 'conditions générales de vente',
      mentions: 'mentions légales',
      cookies: 'cookies',
      copy: '© 2025 cora, fait par ash',
      privacyShort: 'confidentialité',
      cgvShort: 'CGV',
      mentionsShort: 'mentions légales',
    },
    contact: {
      pageTitle: 'cora — contact',
      heroKicker: 'on est à l\'écoute',
      heroTitle: 'parle-nous.',
      heroSub: 'une question sur ta commande, une idée à partager, ou juste envie de dire bonjour — on lit tout.',
      navLabel: 'contact',
      infoTitle: 'comment nous joindre',
      emailLabel: 'email général',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'support produit',
      legalLabel: 'questions légales',
      privacyLabel: 'données personnelles',
      addressLabel: 'siège social',
      addressLine: 'montréal, québec, canada',
      hoursLabel: 'disponibilité',
      hoursLine: 'lun–ven, 9h–18h (est)',
      responseLabel: 'délai de réponse',
      responseLine: 'sous 48h en semaine',
      formTitle: 'envoyer un message',
      fieldName: 'votre nom',
      fieldEmail: 'votre adresse courriel',
      fieldSubject: 'sujet',
      subjectOptions: [
        { value: '', label: 'choisir un sujet' },
        { value: 'order', label: 'ma commande' },
        { value: 'product', label: 'question produit' },
        { value: 'press', label: 'presse & partenariats' },
        { value: 'feedback', label: 'retour d\'expérience' },
        { value: 'other', label: 'autre' },
      ],
      fieldMessage: 'votre message',
      fieldMessagePlaceholder: 'raconte-nous ce dont tu as besoin…',
      submitBtn: 'envoyer le message',
      successTitle: 'message envoyé.',
      successMsg: 'on a bien reçu ton message et on te répond sous 48h. merci.',
      faqTitle: 'questions fréquentes',
      faqItems: [
        { q: 'quand sera livrée mon édition signature ?', a: 'l\'édition signature est produite en série limitée avec un délai de fabrication d\'environ 6 semaines. tu reçois un email de suivi dès l\'expédition.' },
        { q: 'puis-je modifier ma commande après confirmation ?', a: 'oui, dans les 24h suivant la confirmation de commande. passé ce délai, contacte-nous le plus vite possible — on fait de notre mieux.' },
        { q: 'comment fonctionne la garantie 2 ans ?', a: 'tout défaut de conformité est pris en charge sans frais. contacte support@cora-audio.com avec la preuve d\'achat et une description du problème.' },
        { q: 'livrez-vous en dehors du Canada ?', a: 'pour l\'instant, les livraisons sont limitées au Canada. une expansion internationale est prévue pour la deuxième série.' },
      ],
    },
  },

  /* ─── ENGLISH ───────────────────────────────────────────────── */
  en: {
    lang: 'en',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'features',
      story: 'our story',
      design: 'design',
      order: 'order',
      contact: 'contact',
    },
    footer: {
      tagline: 'earbuds made for your life — not against it. montréal, 2025.',
      nav: 'navigation',
      legal: 'legal',
      privacy: 'privacy policy',
      cgv: 'terms & conditions',
      mentions: 'legal notices',
      cookies: 'cookies',
      copy: '© 2025 cora, made by ash',
      privacyShort: 'privacy',
      cgvShort: 'T&C',
      mentionsShort: 'legal notices',
    },
    contact: {
      pageTitle: 'cora — contact',
      heroKicker: 'we\'re listening',
      heroTitle: 'let\'s talk.',
      heroSub: 'A question about your order, an idea to share, or just saying hi — we read everything.',
      navLabel: 'contact',
      infoTitle: 'how to reach us',
      emailLabel: 'general email',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'product support',
      legalLabel: 'legal questions',
      privacyLabel: 'personal data',
      addressLabel: 'headquarters',
      addressLine: 'montréal, québec, canada',
      hoursLabel: 'availability',
      hoursLine: 'mon–fri, 9am–6pm (est)',
      responseLabel: 'response time',
      responseLine: 'within 48h on weekdays',
      formTitle: 'send a message',
      fieldName: 'your name',
      fieldEmail: 'your email address',
      fieldSubject: 'subject',
      subjectOptions: [
        { value: '', label: 'choose a subject' },
        { value: 'order', label: 'my order' },
        { value: 'product', label: 'product question' },
        { value: 'press', label: 'press & partnerships' },
        { value: 'feedback', label: 'feedback' },
        { value: 'other', label: 'other' },
      ],
      fieldMessage: 'your message',
      fieldMessagePlaceholder: 'tell us what you need…',
      submitBtn: 'send message',
      successTitle: 'message sent.',
      successMsg: 'we\'ve received your message and will reply within 48h. thank you.',
      faqTitle: 'frequently asked questions',
      faqItems: [
        { q: 'when will my signature edition be delivered?', a: 'the signature edition is produced in limited batches with a manufacturing lead time of approximately 6 weeks. you\'ll receive a tracking email as soon as it ships.' },
        { q: 'can i modify my order after confirming?', a: 'yes, within 24 hours of order confirmation. after that, contact us as quickly as possible — we\'ll do our best.' },
        { q: 'how does the 2-year warranty work?', a: 'any conformity defect is covered at no cost. contact support@cora-audio.com with your proof of purchase and a description of the issue.' },
        { q: 'do you ship outside canada?', a: 'for now, shipping is limited to canada. international expansion is planned for the second production run.' },
      ],
    },
  },

  /* ─── SPANISH ───────────────────────────────────────────────── */
  es: {
    lang: 'es',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'funciones',
      story: 'nuestra historia',
      design: 'diseño',
      order: 'pedir',
      contact: 'contacto',
    },
    footer: {
      tagline: 'auriculares pensados para tu vida — no en tu contra. montréal, 2025.',
      nav: 'navegación',
      legal: 'legal',
      privacy: 'política de privacidad',
      cgv: 'términos y condiciones',
      mentions: 'avisos legales',
      cookies: 'cookies',
      copy: '© 2025 cora, hecho por ash',
      privacyShort: 'privacidad',
      cgvShort: 'T&C',
      mentionsShort: 'avisos legales',
    },
    contact: {
      pageTitle: 'cora — contacto',
      heroKicker: 'te escuchamos',
      heroTitle: 'hablemos.',
      heroSub: 'Una pregunta sobre tu pedido, una idea que compartir, o simplemente saludar — leemos todo.',
      navLabel: 'contacto',
      infoTitle: 'cómo contactarnos',
      emailLabel: 'email general',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'soporte del producto',
      legalLabel: 'preguntas legales',
      privacyLabel: 'datos personales',
      addressLabel: 'sede central',
      addressLine: 'montréal, québec, canadá',
      hoursLabel: 'disponibilidad',
      hoursLine: 'lun–vie, 9h–18h (est)',
      responseLabel: 'tiempo de respuesta',
      responseLine: 'en 48h en días laborables',
      formTitle: 'enviar un mensaje',
      fieldName: 'tu nombre',
      fieldEmail: 'tu dirección de email',
      fieldSubject: 'asunto',
      subjectOptions: [
        { value: '', label: 'elegir un asunto' },
        { value: 'order', label: 'mi pedido' },
        { value: 'product', label: 'pregunta sobre el producto' },
        { value: 'press', label: 'prensa y colaboraciones' },
        { value: 'feedback', label: 'comentarios' },
        { value: 'other', label: 'otro' },
      ],
      fieldMessage: 'tu mensaje',
      fieldMessagePlaceholder: 'cuéntanos lo que necesitas…',
      submitBtn: 'enviar mensaje',
      successTitle: 'mensaje enviado.',
      successMsg: 'hemos recibido tu mensaje y te responderemos en 48h. gracias.',
      faqTitle: 'preguntas frecuentes',
      faqItems: [
        { q: '¿cuándo recibiré mi edición firma?', a: 'la edición firma se produce en series limitadas con un tiempo de fabricación de aproximadamente 6 semanas. recibirás un email de seguimiento en cuanto se envíe.' },
        { q: '¿puedo modificar mi pedido después de confirmarlo?', a: 'sí, dentro de las 24 horas siguientes a la confirmación. después de eso, contáctanos lo antes posible — haremos todo lo posible.' },
        { q: '¿cómo funciona la garantía de 2 años?', a: 'cualquier defecto de conformidad está cubierto sin coste. contacta con support@cora-audio.com con tu justificante de compra y una descripción del problema.' },
        { q: '¿envían fuera de canadá?', a: 'por ahora, los envíos están limitados a canadá. la expansión internacional está prevista para la segunda producción.' },
      ],
    },
  },

  /* ─── GERMAN ────────────────────────────────────────────────── */
  de: {
    lang: 'de',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'funktionen',
      story: 'unsere Geschichte',
      design: 'design',
      order: 'bestellen',
      contact: 'kontakt',
    },
    footer: {
      tagline: 'Kopfhörer, die für dein Leben gemacht sind — nicht dagegen. montréal, 2025.',
      nav: 'navigation',
      legal: 'rechtliches',
      privacy: 'datenschutzerklärung',
      cgv: 'allgemeine Geschäftsbedingungen',
      mentions: 'impressum',
      cookies: 'cookies',
      copy: '© 2025 cora, gemacht von ash',
      privacyShort: 'datenschutz',
      cgvShort: 'AGB',
      mentionsShort: 'impressum',
    },
    contact: {
      pageTitle: 'cora — kontakt',
      heroKicker: 'wir hören zu',
      heroTitle: 'lass uns reden.',
      heroSub: 'Eine Frage zu deiner Bestellung, eine Idee zum Teilen oder einfach Hallo sagen — wir lesen alles.',
      navLabel: 'kontakt',
      infoTitle: 'so erreichst du uns',
      emailLabel: 'allgemeine Email',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'produktsupport',
      legalLabel: 'rechtliche Fragen',
      privacyLabel: 'personenbezogene Daten',
      addressLabel: 'hauptsitz',
      addressLine: 'montréal, québec, kanada',
      hoursLabel: 'verfügbarkeit',
      hoursLine: 'mo–fr, 9–18 Uhr (EST)',
      responseLabel: 'antwortzeit',
      responseLine: 'innerhalb von 48h an Werktagen',
      formTitle: 'nachricht senden',
      fieldName: 'dein Name',
      fieldEmail: 'deine E-Mail-Adresse',
      fieldSubject: 'betreff',
      subjectOptions: [
        { value: '', label: 'betreff auswählen' },
        { value: 'order', label: 'meine Bestellung' },
        { value: 'product', label: 'produktfrage' },
        { value: 'press', label: 'presse & Partnerschaften' },
        { value: 'feedback', label: 'feedback' },
        { value: 'other', label: 'sonstiges' },
      ],
      fieldMessage: 'deine Nachricht',
      fieldMessagePlaceholder: 'erzähl uns, was du brauchst…',
      submitBtn: 'nachricht senden',
      successTitle: 'nachricht gesendet.',
      successMsg: 'wir haben deine Nachricht erhalten und antworten innerhalb von 48h. danke.',
      faqTitle: 'häufig gestellte Fragen',
      faqItems: [
        { q: 'wann wird meine Signature Edition geliefert?', a: 'die Signature Edition wird in limitierter Auflage mit einer Fertigungszeit von ca. 6 Wochen produziert. du erhältst eine Tracking-E-Mail, sobald sie versendet wird.' },
        { q: 'kann ich meine Bestellung nach der Bestätigung ändern?', a: 'ja, innerhalb von 24 Stunden nach der Bestellbestätigung. danach kontaktiere uns so schnell wie möglich — wir tun unser Bestes.' },
        { q: 'wie funktioniert die 2-Jahres-Garantie?', a: 'jeder Konformitätsmangel wird kostenlos behoben. kontaktiere support@cora-audio.com mit deinem Kaufnachweis und einer Beschreibung des Problems.' },
        { q: 'liefert ihr außerhalb von Kanada?', a: 'derzeit ist der Versand auf Kanada beschränkt. eine internationale Expansion ist für die zweite Produktionsserie geplant.' },
      ],
    },
  },

  /* ─── ITALIAN ───────────────────────────────────────────────── */
  it: {
    lang: 'it',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'funzioni',
      story: 'la nostra storia',
      design: 'design',
      order: 'ordina',
      contact: 'contatto',
    },
    footer: {
      tagline: 'auricolari pensati per la tua vita — non contro di essa. montréal, 2025.',
      nav: 'navigazione',
      legal: 'legale',
      privacy: 'informativa sulla privacy',
      cgv: 'termini e condizioni',
      mentions: 'note legali',
      cookies: 'cookie',
      copy: '© 2025 cora, realizzato da ash',
      privacyShort: 'privacy',
      cgvShort: 'T&C',
      mentionsShort: 'note legali',
    },
    contact: {
      pageTitle: 'cora — contatto',
      heroKicker: 'ti ascoltiamo',
      heroTitle: 'parliamoci.',
      heroSub: 'Una domanda sul tuo ordine, un\'idea da condividere, o solo un saluto — leggiamo tutto.',
      navLabel: 'contatto',
      infoTitle: 'come contattarci',
      emailLabel: 'email generale',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'supporto prodotto',
      legalLabel: 'domande legali',
      privacyLabel: 'dati personali',
      addressLabel: 'sede centrale',
      addressLine: 'montréal, québec, canada',
      hoursLabel: 'disponibilità',
      hoursLine: 'lun–ven, 9–18 (est)',
      responseLabel: 'tempo di risposta',
      responseLine: 'entro 48h nei giorni feriali',
      formTitle: 'invia un messaggio',
      fieldName: 'il tuo nome',
      fieldEmail: 'il tuo indirizzo email',
      fieldSubject: 'oggetto',
      subjectOptions: [
        { value: '', label: 'scegli un oggetto' },
        { value: 'order', label: 'il mio ordine' },
        { value: 'product', label: 'domanda sul prodotto' },
        { value: 'press', label: 'stampa e partnership' },
        { value: 'feedback', label: 'feedback' },
        { value: 'other', label: 'altro' },
      ],
      fieldMessage: 'il tuo messaggio',
      fieldMessagePlaceholder: 'dicci di cosa hai bisogno…',
      submitBtn: 'invia messaggio',
      successTitle: 'messaggio inviato.',
      successMsg: 'abbiamo ricevuto il tuo messaggio e risponderemo entro 48h. grazie.',
      faqTitle: 'domande frequenti',
      faqItems: [
        { q: 'quando riceverò la mia edizione signature?', a: 'l\'edizione signature è prodotta in serie limitata con un tempo di produzione di circa 6 settimane. riceverai un\'email di tracciamento non appena viene spedita.' },
        { q: 'posso modificare il mio ordine dopo la conferma?', a: 'sì, entro 24 ore dalla conferma dell\'ordine. dopo, contattaci il prima possibile — faremo del nostro meglio.' },
        { q: 'come funziona la garanzia di 2 anni?', a: 'qualsiasi difetto di conformità è coperto senza costi. contatta support@cora-audio.com con la prova d\'acquisto e una descrizione del problema.' },
        { q: 'spedite fuori dal Canada?', a: 'per ora, le spedizioni sono limitate al Canada. l\'espansione internazionale è prevista per la seconda serie di produzione.' },
      ],
    },
  },

  /* ─── RUSSIAN ───────────────────────────────────────────────── */
  ru: {
    lang: 'ru',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'функции',
      story: 'наша история',
      design: 'дизайн',
      order: 'заказать',
      contact: 'контакт',
    },
    footer: {
      tagline: 'наушники, созданные для твоей жизни — не против неё. монреаль, 2025.',
      nav: 'навигация',
      legal: 'правовая информация',
      privacy: 'политика конфиденциальности',
      cgv: 'условия и положения',
      mentions: 'правовые уведомления',
      cookies: 'куки',
      copy: '© 2025 cora, сделано ash',
      privacyShort: 'конфиденциальность',
      cgvShort: 'условия',
      mentionsShort: 'правовые уведомления',
    },
    contact: {
      pageTitle: 'cora — контакт',
      heroKicker: 'мы слушаем',
      heroTitle: 'давай поговорим.',
      heroSub: 'Вопрос о заказе, идея для обмена или просто привет — мы читаем всё.',
      navLabel: 'контакт',
      infoTitle: 'как с нами связаться',
      emailLabel: 'общий email',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'поддержка продукта',
      legalLabel: 'правовые вопросы',
      privacyLabel: 'персональные данные',
      addressLabel: 'головной офис',
      addressLine: 'монреаль, квебек, канада',
      hoursLabel: 'доступность',
      hoursLine: 'пн–пт, 9:00–18:00 (по EST)',
      responseLabel: 'время ответа',
      responseLine: 'в течение 48ч в рабочие дни',
      formTitle: 'отправить сообщение',
      fieldName: 'ваше имя',
      fieldEmail: 'ваш email',
      fieldSubject: 'тема',
      subjectOptions: [
        { value: '', label: 'выбрать тему' },
        { value: 'order', label: 'мой заказ' },
        { value: 'product', label: 'вопрос о продукте' },
        { value: 'press', label: 'пресса и партнёрство' },
        { value: 'feedback', label: 'отзыв' },
        { value: 'other', label: 'другое' },
      ],
      fieldMessage: 'ваше сообщение',
      fieldMessagePlaceholder: 'расскажите, что вам нужно…',
      submitBtn: 'отправить сообщение',
      successTitle: 'сообщение отправлено.',
      successMsg: 'мы получили ваше сообщение и ответим в течение 48ч. спасибо.',
      faqTitle: 'часто задаваемые вопросы',
      faqItems: [
        { q: 'когда придёт мой выпуск signature?', a: 'выпуск signature производится ограниченной серией со сроком изготовления около 6 недель. вы получите email с трекингом сразу после отправки.' },
        { q: 'можно ли изменить заказ после подтверждения?', a: 'да, в течение 24 часов после подтверждения заказа. после этого свяжитесь с нами как можно скорее — мы постараемся помочь.' },
        { q: 'как работает гарантия 2 года?', a: 'любой дефект соответствия покрывается бесплатно. напишите на support@cora-audio.com с подтверждением покупки и описанием проблемы.' },
        { q: 'вы доставляете за пределы Канады?', a: 'на данный момент доставка ограничена Канадой. международное расширение запланировано на вторую серию производства.' },
      ],
    },
  },

  /* ─── POLISH ────────────────────────────────────────────────── */
  pl: {
    lang: 'pl',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: 'funkcje',
      story: 'nasza historia',
      design: 'design',
      order: 'zamów',
      contact: 'kontakt',
    },
    footer: {
      tagline: 'słuchawki stworzone dla twojego życia — nie przeciwko niemu. montreal, 2025.',
      nav: 'nawigacja',
      legal: 'informacje prawne',
      privacy: 'polityka prywatności',
      cgv: 'warunki sprzedaży',
      mentions: 'informacje prawne',
      cookies: 'ciasteczka',
      copy: '© 2025 cora, zrobione przez ash',
      privacyShort: 'prywatność',
      cgvShort: 'warunki',
      mentionsShort: 'inf. prawne',
    },
    contact: {
      pageTitle: 'cora — kontakt',
      heroKicker: 'słuchamy',
      heroTitle: 'porozmawiajmy.',
      heroSub: 'Pytanie o zamówienie, pomysł do podzielenia się lub po prostu przywitanie — czytamy wszystko.',
      navLabel: 'kontakt',
      infoTitle: 'jak się z nami skontaktować',
      emailLabel: 'ogólny email',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: 'wsparcie produktu',
      legalLabel: 'pytania prawne',
      privacyLabel: 'dane osobowe',
      addressLabel: 'siedziba główna',
      addressLine: 'montreal, québec, kanada',
      hoursLabel: 'dostępność',
      hoursLine: 'pon–pt, 9:00–18:00 (EST)',
      responseLabel: 'czas odpowiedzi',
      responseLine: 'w ciągu 48h w dni robocze',
      formTitle: 'wyślij wiadomość',
      fieldName: 'twoje imię',
      fieldEmail: 'twój adres email',
      fieldSubject: 'temat',
      subjectOptions: [
        { value: '', label: 'wybierz temat' },
        { value: 'order', label: 'moje zamówienie' },
        { value: 'product', label: 'pytanie o produkt' },
        { value: 'press', label: 'prasa i partnerstwa' },
        { value: 'feedback', label: 'opinia' },
        { value: 'other', label: 'inne' },
      ],
      fieldMessage: 'twoja wiadomość',
      fieldMessagePlaceholder: 'powiedz nam, czego potrzebujesz…',
      submitBtn: 'wyślij wiadomość',
      successTitle: 'wiadomość wysłana.',
      successMsg: 'otrzymaliśmy twoją wiadomość i odpowiemy w ciągu 48h. dziękujemy.',
      faqTitle: 'często zadawane pytania',
      faqItems: [
        { q: 'kiedy zostanie dostarczona moja edycja signature?', a: 'edycja signature jest produkowana w limitowanych seriach z czasem produkcji około 6 tygodni. otrzymasz email z śledzeniem przesyłki po wysyłce.' },
        { q: 'czy mogę zmodyfikować zamówienie po potwierdzeniu?', a: 'tak, w ciągu 24 godzin od potwierdzenia zamówienia. po tym czasie skontaktuj się z nami jak najszybciej — zrobimy wszystko, co możemy.' },
        { q: 'jak działa gwarancja 2-letnia?', a: 'każda wada zgodności jest usuwana bezpłatnie. skontaktuj się z support@cora-audio.com z dowodem zakupu i opisem problemu.' },
        { q: 'czy dostarczacie poza Kanadę?', a: 'na razie dostawy są ograniczone do Kanady. ekspansja międzynarodowa planowana jest na drugą serię produkcyjną.' },
      ],
    },
  },

  /* ─── KOREAN ────────────────────────────────────────────────── */
  ko: {
    lang: 'ko',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: '기능',
      story: '우리의 이야기',
      design: '디자인',
      order: '주문하기',
      contact: '문의',
    },
    footer: {
      tagline: '당신의 삶을 위해 설계된 이어폰 — 삶에 맞서는 것이 아니라. 몬트리올, 2025.',
      nav: '내비게이션',
      legal: '법적 정보',
      privacy: '개인정보처리방침',
      cgv: '이용약관',
      mentions: '법적 고지',
      cookies: '쿠키',
      copy: '© 2025 cora, ash 제작',
      privacyShort: '개인정보',
      cgvShort: '약관',
      mentionsShort: '법적 고지',
    },
    contact: {
      pageTitle: 'cora — 문의',
      heroKicker: '우리는 듣고 있습니다',
      heroTitle: '이야기해봐요.',
      heroSub: '주문에 관한 질문, 공유하고 싶은 아이디어, 또는 그냥 인사 — 모두 읽습니다.',
      navLabel: '문의',
      infoTitle: '연락처',
      emailLabel: '일반 이메일',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: '제품 지원',
      legalLabel: '법적 문의',
      privacyLabel: '개인정보',
      addressLabel: '본사',
      addressLine: '캐나다 퀘벡 몬트리올',
      hoursLabel: '이용 가능 시간',
      hoursLine: '월–금, 오전 9시–오후 6시 (EST)',
      responseLabel: '응답 시간',
      responseLine: '평일 48시간 이내',
      formTitle: '메시지 보내기',
      fieldName: '성함',
      fieldEmail: '이메일 주소',
      fieldSubject: '제목',
      subjectOptions: [
        { value: '', label: '제목 선택' },
        { value: 'order', label: '내 주문' },
        { value: 'product', label: '제품 문의' },
        { value: 'press', label: '언론 및 파트너십' },
        { value: 'feedback', label: '피드백' },
        { value: 'other', label: '기타' },
      ],
      fieldMessage: '메시지',
      fieldMessagePlaceholder: '필요하신 것을 알려주세요…',
      submitBtn: '메시지 전송',
      successTitle: '메시지가 전송되었습니다.',
      successMsg: '메시지를 받았으며 48시간 내에 답변드리겠습니다. 감사합니다.',
      faqTitle: '자주 묻는 질문',
      faqItems: [
        { q: '시그니처 에디션은 언제 배송되나요?', a: '시그니처 에디션은 한정 생산으로 제조 기간이 약 6주 소요됩니다. 발송 즉시 배송 추적 이메일을 받게 됩니다.' },
        { q: '주문 확인 후 변경이 가능한가요?', a: '네, 주문 확인 후 24시간 이내에 가능합니다. 이후에는 최대한 빨리 연락주세요 — 최선을 다하겠습니다.' },
        { q: '2년 보증은 어떻게 작동하나요?', a: '모든 적합성 결함은 무상으로 처리됩니다. 구매 증명서와 문제 설명을 support@cora-audio.com으로 보내주세요.' },
        { q: '캐나다 외 지역 배송이 가능한가요?', a: '현재는 캐나다 배송만 가능합니다. 두 번째 생산 시리즈에서 국제 배송 확대가 예정되어 있습니다.' },
      ],
    },
  },

  /* ─── JAPANESE ──────────────────────────────────────────────── */
  ja: {
    lang: 'ja',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: '機能',
      story: '私たちの物語',
      design: 'デザイン',
      order: '注文する',
      contact: 'お問い合わせ',
    },
    footer: {
      tagline: 'あなたの生活のために設計されたイヤフォン — 生活に逆らうのではなく。モントリオール、2025年。',
      nav: 'ナビゲーション',
      legal: '法的情報',
      privacy: 'プライバシーポリシー',
      cgv: '利用規約',
      mentions: '法的通知',
      cookies: 'クッキー',
      copy: '© 2025 cora, ash制作',
      privacyShort: 'プライバシー',
      cgvShort: '規約',
      mentionsShort: '法的通知',
    },
    contact: {
      pageTitle: 'cora — お問い合わせ',
      heroKicker: '私たちは聴いています',
      heroTitle: '話しましょう。',
      heroSub: 'ご注文に関する質問、共有したいアイデア、またはただのご挨拶 — すべて読んでいます。',
      navLabel: 'お問い合わせ',
      infoTitle: 'ご連絡方法',
      emailLabel: '一般メール',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: '製品サポート',
      legalLabel: '法的な質問',
      privacyLabel: '個人データ',
      addressLabel: '本社',
      addressLine: 'カナダ、ケベック州モントリオール',
      hoursLabel: '対応時間',
      hoursLine: '月〜金、9:00〜18:00（EST）',
      responseLabel: '返信時間',
      responseLine: '平日48時間以内',
      formTitle: 'メッセージを送る',
      fieldName: 'お名前',
      fieldEmail: 'メールアドレス',
      fieldSubject: '件名',
      subjectOptions: [
        { value: '', label: '件名を選択' },
        { value: 'order', label: '注文について' },
        { value: 'product', label: '製品に関する質問' },
        { value: 'press', label: '報道・パートナーシップ' },
        { value: 'feedback', label: 'フィードバック' },
        { value: 'other', label: 'その他' },
      ],
      fieldMessage: 'メッセージ',
      fieldMessagePlaceholder: '必要なことをお知らせください…',
      submitBtn: 'メッセージを送信',
      successTitle: 'メッセージが送信されました。',
      successMsg: 'メッセージを受け取りました。48時間以内にご返信いたします。ありがとうございます。',
      faqTitle: 'よくある質問',
      faqItems: [
        { q: 'シグネチャーエディションはいつ届きますか？', a: 'シグネチャーエディションは限定生産で、製造期間は約6週間です。発送次第、追跡メールをお送りします。' },
        { q: '注文確認後に変更できますか？', a: 'はい、注文確認から24時間以内であれば可能です。それ以降はできるだけ早くご連絡ください — 最善を尽くします。' },
        { q: '2年保証はどのように機能しますか？', a: '適合性の欠陥はすべて無償で対応します。購入証明と問題の説明をsupport@cora-audio.comまでお送りください。' },
        { q: 'カナダ以外にも配送しますか？', a: '現在、配送はカナダ国内のみです。第2シリーズでの国際展開を予定しています。' },
      ],
    },
  },

  /* ─── CHINESE (simplified) ─────────────────────────────────── */
  zh: {
    lang: 'zh',
    dir: 'ltr',
    nav: {
      logo: 'cora',
      functions: '功能',
      story: '我们的故事',
      design: '设计',
      order: '立即购买',
      contact: '联系我们',
    },
    footer: {
      tagline: '为你的生活而设计的耳机——而非与之对抗。蒙特利尔，2025年。',
      nav: '导航',
      legal: '法律信息',
      privacy: '隐私政策',
      cgv: '销售条款',
      mentions: '法律声明',
      cookies: 'Cookie政策',
      copy: '© 2025 cora，由ash制作',
      privacyShort: '隐私',
      cgvShort: '条款',
      mentionsShort: '法律声明',
    },
    contact: {
      pageTitle: 'cora — 联系我们',
      heroKicker: '我们在倾听',
      heroTitle: '来聊聊吧。',
      heroSub: '关于订单的问题、想分享的想法，或只是打个招呼——我们会读每一条消息。',
      navLabel: '联系',
      infoTitle: '如何联系我们',
      emailLabel: '通用邮箱',
      emailGeneral: 'bonjour@cora-audio.com',
      emailSupport: 'support@cora-audio.com',
      emailLegal: 'legal@cora-audio.com',
      emailPrivacy: 'privacy@cora-audio.com',
      supportLabel: '产品支持',
      legalLabel: '法律问题',
      privacyLabel: '个人数据',
      addressLabel: '总部',
      addressLine: '加拿大魁北克蒙特利尔',
      hoursLabel: '可用时间',
      hoursLine: '周一至周五，上午9点至下午6点（EST）',
      responseLabel: '响应时间',
      responseLine: '工作日48小时内',
      formTitle: '发送消息',
      fieldName: '您的姓名',
      fieldEmail: '您的邮箱地址',
      fieldSubject: '主题',
      subjectOptions: [
        { value: '', label: '选择主题' },
        { value: 'order', label: '我的订单' },
        { value: 'product', label: '产品问题' },
        { value: 'press', label: '媒体与合作' },
        { value: 'feedback', label: '反馈' },
        { value: 'other', label: '其他' },
      ],
      fieldMessage: '您的留言',
      fieldMessagePlaceholder: '告诉我们您需要什么…',
      submitBtn: '发送消息',
      successTitle: '消息已发送。',
      successMsg: '我们已收到您的消息，将在48小时内回复。谢谢。',
      faqTitle: '常见问题',
      faqItems: [
        { q: '签名版什么时候会送达？', a: '签名版为限量生产，制造周期约为6周。发货后您会立即收到追踪邮件。' },
        { q: '确认订单后可以修改吗？', a: '是的，在订单确认后24小时内可以修改。超过此时间后，请尽快联系我们——我们会尽力帮助您。' },
        { q: '两年保修如何运作？', a: '任何合规性缺陷均免费处理。请将购买凭证和问题描述发送至support@cora-audio.com。' },
        { q: '是否可以向加拿大以外的地区发货？', a: '目前，送货仅限于加拿大。国际扩展计划在第二批次生产时推出。' },
      ],
    },
  },
};

/* ─── Language detector & applier ───────────────────────────────
 * Call CoraI18n.init() at page load.
 * Call CoraI18n.setLang('en') to switch language.
 * ──────────────────────────────────────────────────────────────── */
const CoraI18n = (() => {
  const STORAGE_KEY = 'cora_lang';
  const DEFAULT_LANG = 'fr';
  const SUPPORTED = Object.keys(CORA_I18N);

  let currentLang = DEFAULT_LANG;

  function detect() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(browser)) return browser;
    return DEFAULT_LANG;
  }

  function t(path) {
    const keys = path.split('.');
    let val = CORA_I18N[currentLang];
    for (const k of keys) {
      val = val?.[k];
      if (val === undefined) break;
    }
    if (val === undefined) {
      let fallback = CORA_I18N[DEFAULT_LANG];
      for (const k of keys) fallback = fallback?.[k];
      return fallback ?? path;
    }
    return val;
  }

  function applyToDOM() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = CORA_I18N[currentLang].dir || 'ltr';

    // Apply all data-i18n text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (typeof val === 'string') el.textContent = val;
    });

    // Apply placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const val = t(el.dataset.i18nPlaceholder);
      if (typeof val === 'string') el.placeholder = val;
    });

    // Apply aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const val = t(el.dataset.i18nAria);
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    });

    // Rebuild select options for subject selectors
    document.querySelectorAll('[data-i18n-options="contact.subjectOptions"]').forEach(sel => {
      const opts = t('contact.subjectOptions');
      if (!Array.isArray(opts)) return;
      sel.innerHTML = opts
        .map(o => `<option value="${o.value}">${o.label}</option>`)
        .join('');
    });

    // FAQ blocks
    const faqContainer = document.querySelector('[data-i18n-faq]');
    if (faqContainer) {
      const items = t('contact.faqItems');
      if (Array.isArray(items)) {
        faqContainer.innerHTML = items.map((item, i) => `
          <div class="faq-item" data-index="${i}">
            <button class="faq-q" aria-expanded="false">
              <span>${item.q}</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-a" aria-hidden="true"><p>${item.a}</p></div>
          </div>
        `).join('');
        initFaq(faqContainer);
      }
    }

    // Update page title if data-i18n-title present
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) document.title = t(titleEl.dataset.i18nTitle);

    // Update lang switcher active state
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.langBtn === currentLang);
      btn.setAttribute('aria-pressed', btn.dataset.langBtn === currentLang);
    });
  }

  function initFaq(container) {
    container.addEventListener('click', e => {
      const btn = e.target.closest('.faq-q');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      container.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
      }
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyToDOM();
  }

  function init() {
    currentLang = detect();
    applyToDOM();
  }

  return { init, setLang, t, detect, SUPPORTED };
})();

// Auto-init on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CoraI18n.init());
} else {
  CoraI18n.init();
}
