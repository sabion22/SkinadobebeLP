// ============================================================
//  SKINA DO BEBÊ — Arquivo Central de Configuração
//  Edite aqui para alterar textos, imagens, cores e tokens.
//
//  IMAGENS: Prefira /public/images/ e use "/images/nome.jpg"
//  VÍDEO: Coloque em /public/videos/skina-vsl.mp4
// ============================================================

export const config = {

    // ----------------------------------------------------------
    // GERAL
    // ----------------------------------------------------------
    general: {
        whatsappNumber: "5519994799620",
        whatsappDefaultMessage: "Olá! Gostaria de tirar uma dúvida.",
        brandName: "Skina",
        brandHighlight: "do Bebê",
        brandSubtitle: "Tradição & Carinho",
        logoSrc: "https://i.postimg.cc/MTqBM3BB/logo-skina-do-bebe-(1).png",
        logoAlt: "Logo Skina do Bebê",
        logoWidth: "w-12 md:w-16",
        faviconSrc: "/favicon.svg",
    },

    // ----------------------------------------------------------
    // DESIGN TOKENS
    // ----------------------------------------------------------
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
            ctaGreen: "#25D366",
            ctaGreenDark: "#128C7E",
        },
        fonts: {
            display: "'Outfit', sans-serif",
            body: "'Inter', sans-serif",
        },
        breakpoints: {
            sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px",
        },
        animation: {
            fast: "200ms", base: "300ms", slow: "500ms",
            verySlow: "800ms", pulseGlow: "2s", breathe: "3s", soundWave: "0.8s",
        },
        spacing: {
            sectionY: "py-16 md:py-24",
            containerX: "px-6 md:px-12",
        },
        borderRadius: { card: "2.5rem", pill: "9999px", button: "9999px" },
        shadows: {
            card: "0 20px 50px rgba(0,0,0,0.04)",
            cardHover: "0 40px 80px rgba(0,0,0,0.08)",
            whatsapp: "0 10px 30px rgba(37,211,102,0.35)",
            whatsappHover: "0 15px 40px rgba(37,211,102,0.5)",
            primary: "0 10px 30px rgba(217,20,121,0.3)",
        },
    },

    // ----------------------------------------------------------
    // HEADER
    // ----------------------------------------------------------
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

    // ----------------------------------------------------------
    // HERO
    // ----------------------------------------------------------
    hero: {
        backgroundImage: "https://i.postimg.cc/02FSv08J/Gestao-e-Aceleracao-de-Marketplace-Primeiro-passo-para-construir-um-negocio-digital-real.png",
        backgroundImageLocal: "/images/hero-bg.jpg",

        // Imagem decorativa lado direito (desktop).
        // Deixe "" para usar a foto da primeira loja automaticamente.
        featureImage: "",

        pillText: "A MAIOR LOJA DE BEBÊS DE PIRACICABA",
        headlineLine1: "Transformando",
        headlineLine2: "sonhos em",
        headlineHighlight: "realidade",
        headlineLine3: "há 24 anos em Piracicaba.",
        subheadline: "Mais que uma loja, um espaço de carinho e tradição onde cada detalhe do enxoval do seu bebê é cuidadosamente escolhido.",

        cta1Text: "FALE COM UMA CONSULTORA",
        cta1Message: "Olá! Gostaria de montar o enxoval dos sonhos do meu bebê.",
    },

    // ----------------------------------------------------------
    // VSL — Vídeo de Vendas
    // Quando usePosterFallback = true, exibe imagem poster enquanto
    // o vídeo não estiver disponível. Mude para false quando inserir
    // o arquivo de vídeo em /public/videos/skina-vsl.mp4
    // ----------------------------------------------------------
    vsl: {
        videoSrc: "https://youtu.be/gMhxgR11Vtg",
        videoAspectRatio: "aspect-[16/9]",
        videoMaxHeightDesktop: "max-h-[80vh]",
        // true = mostra placeholder de imagem (sem tentar carregar o vídeo)
        // false = exibe o player de vídeo normalmente
        usePosterFallback: false,
        // Para usar poster local: "/images/vsl-poster.jpg"
        posterSrc: "https://i.postimg.cc/FR7zK7cL/740aa04e-5341-4fb2-aa82-c27cb0563102.webp",
        pillText: "CONHEÇA POR DENTRO",
        headlineLine1: "Viva a experiência",
        headlineLine2: "Única",
        subheadline: "Qualidade, conforto e atendimento que você merece. Nossos especialistas estão prontos para guiar você.",
        overlayTextClick: "🔊 CLIQUE PARA ATIVAR O SOM",
        overlaySubtext: "Seu vídeo já começou • Toque aqui",
    },

    // ----------------------------------------------------------
    // DESTAQUES
    // images[]: array de fotos por produto (até 4).
    // Deixe com 1 item enquanto não tiver fotos extras.
    // ----------------------------------------------------------
    destaques: {
        pillText: "🔥 NOVIDADES DE INVERNO",
        headlineStart: "Mês do",
        headlineHighlight: "Enxoval",
        subheadlineStart: "Explore nossa",
        subheadlineBold1: "coleção de inverno",
        subheadlineMiddle: "com condições",
        subheadlineBold2: "especiais",
        subheadlineEnd: "!",
        ctaText: "VER CATÁLOGO COMPLETO NO WHATSAPP",
        ctaMessage: "Olá! Gostaria de ver o catálogo completo da Skina do Bebê.",
        showTimer: true,
        timerEndDate: "2026-06-30T23:59:59",
        timerText: "TEMPO RESTANTE DAS OFERTAS",
        products: [
            {
                id: 1,
                name: "Berço Evolutivo 3 em 1",
                price: "Consulte o preço",
                badge: "MAIS VENDIDO",
                badgeClass: "badge-hot",
                description: "De mini berço a mini cama. Acompanha o crescimento do seu bebê com segurança e estilo.",
                // images: array de fotos. Adicione mais quando tiver os arquivos.
                images: [
                    "/images/produtos/berco-1.jpg",   // foto 1 (já aparece)
                    "/images/produtos/berco-2.jpg",   // foto 2
                    "/images/produtos/berco-3.jpg",   // foto 3
                    "/images/produtos/berco-4.jpg",   // foto 4
                ],
                whatsappMessage: "Olá! Gostaria de mais informações sobre o *Berço Evolutivo 3 em 1*.",
                whatsappCtaText: "QUERO ESSE!",
            },
            {
                id: 2,
                name: "Carrinho de Bebê Premium",
                price: "Melhor preço garantido",
                badge: "O MAIS DESEJADO",
                badgeClass: "badge-popular",
                description: "Conforto e segurança para os passeios do bebê. Chegou novo na loja!",
                images: [
                    "/images/produtos/carrinho-1.jpeg",   // foto 1 (já aparece)
                    "/images/produtos/carrinho-2.jpeg",   // foto 2
                    "/images/produtos/carrinho-3.jpeg",   // foto 3
                    "/images/produtos/carrinho-4.jpeg",
                ],
                whatsappMessage: "Olá! Gostaria de mais informações sobre o *Carrinho Premium*.",
                whatsappCtaText: "QUERO ESSE!",
            },
            {
                id: 3,
                name: "Kit Enxoval Algodão",
                price: "Peça seu orçamento",
                badge: "ENXOVAL PREMIUM",
                badgeClass: "badge-exclusive",
                isHighlighted: true, // Adicionado destaque especial
                description: "Toque macio para a pele delicada do recém-nascido. Qualidade premium.",
                images: [
                    "/images/produtos/enxoval-1.jpg",   // foto 1 (já aparece)
                    "/images/produtos/enxoval-2.jpg",   // foto 2
                    "/images/produtos/enxoval-3.jpg",   // foto 3
                    "/images/produtos/enxoval-4.jpg",
                ],
                whatsappMessage: "Olá! Gostaria de saber mais sobre o *Kit Enxoval*.",
                whatsappCtaText: "QUERO ESSE!",
            },
            {
                id: 4,
                name: "Quartinho Completo",
                price: "Projeto sob medida",
                badge: "PROJETO 3D",
                badgeClass: "badge-hot",
                description: "Montamos o quartinho dos sonhos com móveis premium sob medida.",
                images: [
                    "/images/produtos/quartinho-1.jpg",   // foto 1 (já aparece)
                    "/images/produtos/quartinho-2.jpg",   // foto 2
                    "/images/produtos/quartinho-3.jpeg",   // foto 3
                    "/images/produtos/quartinho-4.jpeg",
                ],
                whatsappMessage: "Olá! Quero montar um *Quartinho Completo*.",
                whatsappCtaText: "QUERO ESSE!",
            }
        ]
    },

    // ----------------------------------------------------------
    // HISTÓRIA
    // ----------------------------------------------------------
    history: {
        pillText: "Quem Somos",
        headlineStart: "24 Anos de História escrita com",
        headlineHighlight: "carinho",
        headlineHighlight1: "carinho",
        headlineMiddle: "e",
        headlineHighlight2: "dedicação",
        headlineEnd: ".",
        paragraphs: [
            "Desde 2002, a Skina do Bebê abre suas portas com um propósito inabalável: <strong>fazer parte do momento mais especial da sua vida</strong>. Não somos apenas uma loja; somos um legado de cuidado, confiança e amor, construído ao longo de mais de duas décadas em Piracicaba.",
            "Nossa equipe é formada por pessoas que entendem a importância de cada escolha para o seu bebê. Estamos aqui para ouvir, aconselhar e garantir que você encontre exatamente o que precisa, com a qualidade e o carinho que só a Skina do Bebê oferece."
        ],
        ownerImage: "/images/baby-skina.png",
        statsBadge: "+24 Anos de Tradição",
        stats: [
            { number: "24+", labelLines: ["Anos de", "Experiência"], highlightColor: "text-brand-primary" },
            { number: "2", labelLines: ["Lojas em", "Piracicaba"], highlightColor: "text-brand-primary" },
            { number: "5mil+", labelLines: ["Famílias", "Atendidas"], highlightColor: "text-brand-accent" }
        ],
    },

    // ----------------------------------------------------------
    // LOJAS
    // whatsappNumber: número da unidade para o botão WhatsApp do card.
    // Placeholder "551900000000" = substituir pelo número real da Vila Industrial.
    // ----------------------------------------------------------
    storesInfo: {
        pillText: "Nossas Lojas",
        headlineStart: "Visite-nos em",
        headlineHighlight: "Piracicaba",
        subheadline: "Duas unidades preparadas para receber você e sua família.",
        stores: [
            {
                name: "Vila Sônia",
                address: "Av. Peixoto Gomide, nº 383",
                city: "Piracicaba/SP",
                phone: "(19) 3425-2453",
                whatsappNumber: "5519994799620",   // número principal da Vila Sônia
                whatsappDisplay: "(19) 99479-9620", // exibido no card como texto
                map: "https://www.google.com/maps/dir/?api=1&destination=-22.67230742029101,-47.69646412265463",
                image: "/images/local/sonia.jpeg"
            },
            {
                name: "Vila Industrial",
                address: "Av. Luiz Ralph Benatti, nº 386",
                city: "Piracicaba/SP",
                phone: "(19) 3413-5321",
                whatsappNumber: "5519996893195",   // ← SUBSTITUIR pelo número real da Vila Industrial
                whatsappDisplay: "(19) 99689-3195", // ← SUBSTITUIR pelo número real formatado
                map: "https://www.google.com/maps/dir/?api=1&destination=-22.6841235,-47.6521364",
                image: "/images/local/industrial.webp"
            }
        ]
    },

    // ----------------------------------------------------------
    // FOOTER
    // developerLogo: caminho para o arquivo de logo ANZOL.
    // Deixe "" para exibir o texto como fallback.
    // Ex: "/images/anzol-logo.png"
    // ----------------------------------------------------------
    footer: {
        about: "A maior e melhor loja de bebês de Piracicaba. Qualidade, carinho e tudo o que você precisa para o seu filho.",
        contactEmail: "contato@skinadobebe.com.br",
        hoursPill: "Horário Loja Física",
        hoursLine1: "Segunda a Sexta: 09h às 18h",
        hoursLine2: "Sábado: 09h às 14h",
        copyright: "Skina do Bebê. Piracicaba/SP.",
        developer: "ANZOL",
        developerLogo: "",  // ← coloque "/images/anzol-logo.png" quando tiver o arquivo
        socialLinks: [
            { icon: "instagram", href: "#", label: "Instagram" },
            { icon: "facebook", href: "#", label: "Facebook" }
        ]
    }
};
