export const config = {
    general: {
        whatsappNumber: "551934252453",
        whatsappDefaultMessage: "Olá! Gostaria de tirar uma dúvida.",
        brandName: "Skina",
        brandHighlight: "do Bebê",
        brandSubtitle: "Tradição & Carinho",
        logoSrc: "https://i.postimg.cc/MTqBM3BB/logo-skina-do-bebe-(1).png",
        logoWidth: "w-12 md:w-16",
        faviconSrc: "/favicon.svg",
    },
    theme: {
        colors: {
            primary: "#d91479",
            secondary: "#7dc6ee",
            accent: "#F4D35E",
            beige: "#F9F7F2",
            warm: "#FFF8F0",
            promoRed: "#E53935",
            promoYellow: "#FFB300",
            promoOrange: "#FF6D00",
            ctaGreen: "#25D366"
        }
    },
    header: {
        links: [
            { label: "A LOJA", href: "#hero" },
            { label: "VÍDEO", href: "#vsl" },
            { label: "DESTAQUES", href: "#destaques" },
            { label: "NOSSA HISTÓRIA", href: "#historia" },
            { label: "CONTATO", href: "#contato" },
        ],
        ctaText: "WHATSAPP",
    },
    hero: {
        backgroundImage: "https://i.postimg.cc/02FSv08J/Gestao-e-Aceleracao-de-Marketplace-Primeiro-passo-para-construir-um-negocio-digital-real.png",
        pillText: "A MAIOR LOJA DE BEBÊS DE PIRACICABA",
        headlineLine1: "Onde o enxoval",
        headlineLine2: "dos seus",
        headlineHighlight: "sonhos",
        headlineLine3: "se torna realidade.",
        subheadline: "Mais que uma loja, um espaço de carinho e tradição há mais de 10 anos em Piracicaba. Venha conhecer.",
        cta1Text: "FALE CONOSCO",
        cta1Message: "Olá! Gostaria de conhecer os produtos da Skina do Bebê.",
    },
    vsl: {
        videoSrc: "/videos/skina-vsl.mp4",
        videoAspectRatio: "aspect-[9/16]", // vertical format for mobile preference
        videoMaxHeightDesktop: "max-h-[80vh]",
        posterSrc: "https://images.unsplash.com/photo-1555624466-0713cc48a8ef?q=80&w=2070&auto=format&fit=crop",
        pillText: "CONHEÇA POR DENTRO",
        headlineLine1: "Viva a experiência",
        headlineLine2: "Skina do Bebê",
        subheadline: "Conheça nossa loja, nossos produtos e sinta a qualidade do atendimento que só a Skina oferece.",
        overlayTextClick: "🔊 CLIQUE PARA ATIVAR O SOM",
        overlaySubtext: "Seu vídeo já começou • Toque aqui",
    },
    destaques: {
        pillText: "🔥 OFERTAS IMPERDÍVEIS",
        headlineStart: "Destaques da",
        headlineHighlight: "Semana",
        subheadlineStart: "Selecionamos os itens",
        subheadlineBold1: "mais amados",
        subheadlineMiddle: "pelas mamães de Piracicaba. Preço e qualidade",
        subheadlineBold2: "imbatíveis",
        subheadlineEnd: "!",
        ctaText: "VER CATÁLOGO COMPLETO",
        ctaMessage: "Olá! Gostaria de ver o catálogo completo da Skina do Bebê.",
        showTimer: true,
        timerEndDate: "2026-12-31T23:59:59", // Any valid Date string
        timerText: "TEMPO RESTANTE DESSAS OFERTAS:",
        products: [
            {
                id: 1,
                name: "Berço Evolutivo 3 em 1",
                price: "Consulte Oferta",
                oldPrice: "A partir de R$ 1.899",
                image: "https://i.postimg.cc/qvFj93Yv/berco.webp",
                category: "Móveis",
                badge: "🔥 MAIS VENDIDO",
                badgeClass: "badge-hot",
                description: "De mini berço a mini cama. Acompanha o crescimento do seu bebê com segurança e estilo.",
                whatsappMessage: "Olá! Gostaria de mais informações sobre o *Berço Evolutivo 3 em 1*.",
                whatsappCtaText: "QUERO ESSE!",
                whatsappLinkText: "CONSULTAR WHATSAPP"
            },
            {
                id: 2,
                name: "Carrinho de Bebê Premium",
                price: "Melhor Preço",
                oldPrice: "Economia garantida",
                image: "https://i.postimg.cc/MHzDybcp/carrinho.webp",
                category: "Passeio",
                badge: "🤩 QUERIDINHO",
                badgeClass: "badge-popular",
                description: "Conforto e segurança para os passeios do bebê. Chegou novo na loja!",
                whatsappMessage: "Olá! Gostaria de mais informações sobre o *Carrinho Premium*.",
                whatsappCtaText: "QUERO ESSE!",
                whatsappLinkText: "CONSULTAR WHATSAPP"
            },
            {
                id: 3,
                name: "Kit Enxoval Algodão",
                price: "Exclusivo",
                oldPrice: "Peça orçamento",
                image: "https://i.postimg.cc/pVBkP774/kit-enxoval.jpg",
                category: "Enxoval",
                badge: "✨ 100% ALGODÃO",
                badgeClass: "badge-exclusive",
                description: "Toque macio para a pele delicada do recém-nascido. Qualidade premium.",
                whatsappMessage: "Olá! Gostaria de saber mais sobre o *Kit Enxoval*.",
                whatsappCtaText: "QUERO ESSE!",
                whatsappLinkText: "CONSULTAR WHATSAPP"
            },
            {
                id: 4,
                name: "Quartinho Completo",
                price: "Sob Medida",
                oldPrice: "Projeto especial",
                image: "https://i.postimg.cc/8PKH6vTt/quartinho.webp",
                category: "Móveis",
                badge: "🚚 ENTREGA GRÁTIS",
                badgeClass: "badge-hot",
                description: "Montamos o quartinho dos sonhos com móveis premium sob medida.",
                whatsappMessage: "Olá! Quero montar um *Quartinho Completo*.",
                whatsappCtaText: "QUERO ESSE!",
                whatsappLinkText: "CONSULTAR WHATSAPP"
            }
        ]
    },
    history: {
        pillText: "Quem Somos",
        headlineStart: "Uma história escrita com",
        headlineHighlight1: "carinho",
        headlineMiddle: "e",
        headlineHighlight2: "dedicação",
        headlineEnd: ".",
        paragraphs: [
            "A <strong>Skina do Bebê</strong> nasceu da paixão de realizar sonhos. Ao longo de mais de uma década, nos tornamos a <strong>maior referência em enxovais e móveis infantis de Piracicaba e região</strong>.",
            "Nossa missão é simples: oferecer o que há de melhor para o seu pequeno, com o <strong>atendimento humano e acolhedor</strong> que só uma loja física pode proporcionar. Aqui, você toca nos tecidos, experimenta os berços e sente a segurança de cada carrinho.",
            "Cada família que entra aqui, sai com mais do que produtos — sai com a <strong class='text-brand-primary'>confiança</strong> de ter feito a melhor escolha para o seu filho."
        ],
        ownerImage: "https://i.postimg.cc/HnFqYhvn/Design-sem-nome-2026-02-26T175511-321.png",
        statsBadge: "+10 Anos de Tradição",
        stats: [
            { number: "10+", labelLines: ["Anos de", "Experiência"], highlightColor: "text-brand-primary" },
            { number: "2", labelLines: ["Lojas em", "Piracicaba"], highlightColor: "text-brand-primary" },
            { number: "5mil+", labelLines: ["Famílias", "Atendidas"], highlightColor: "text-brand-accent" }
        ],
        ctaText: "AGENDAR VISITA",
        ctaMessage: "Olá! Gostaria de agendar uma visita na Skina do Bebê."
    },
    storesInfo: {
        pillText: "Nossas Lojas",
        headlineStart: "Visite-nos em",
        headlineHighlight: "Piracicaba",
        subheadline: "Duas unidades preparadas para receber você e sua família.",
        stores: [
            {
                name: "Vila Sônia",
                address: "Av Peixoto Gomide, nº 383",
                city: "Piracicaba/SP",
                phone: "(19) 3425-2453",
                map: "https://www.google.com/maps/dir/?api=1&destination=-22.67230742029101,-47.69646412265463",
                image: "https://i.postimg.cc/bwknLSQs/vila-sonia.webp"
            },
            {
                name: "Vila Industrial",
                address: "Av. Luiz Ralph Benatti, nº 386",
                city: "Piracicaba/SP",
                phone: "(19) 3413-5321",
                map: "https://www.google.com/maps/dir/?api=1&destination=-22.6841235,-47.6521364",
                image: "https://i.postimg.cc/sXDZVnbf/industrial.png"
            }
        ]
    },
    footer: {
        about: "A maior e melhor loja de bebês de Piracicaba. Qualidade, carinho e tudo o que você precisa para o seu filho.",
        contactEmail: "contato@skinadobebe.com.br",
        hoursPill: "Horário Loja Física",
        hoursLine1: "Segunda a Sexta: 09h às 18h",
        hoursLine2: "Sábado: 09h às 14h",
        copyright: "Skina do Bebê. Piracicaba/SP.",
        developer: "ANZOL",
        socialLinks: [
            { icon: "instagram", href: "#", label: "Instagram" },
            { icon: "facebook", href: "#", label: "Facebook" }
        ]
    }
};
