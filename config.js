// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Lila mi hermosa preciosa",

    // The title that appears in the browser tab
    // You can use emojis! 🩵 💖 💙 🩵  💕
    pageTitle: "Quieres ser mi San Valentinnn? 🩵",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🩵', '💙', '🚁'],  // Heart emojis
        bears: ['🧸', '🐻','🐕','🐶']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Tu me amas?",                                    // First interaction
            yesBtn: "Siiiii",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Te AMO mas de lo que piensas 💙"           // Secret hover message
        },
        second: {
            text: "Cuánto me amas?",                          // For the love meter
            startText: "mutisimoooooo",                                   // Text before the percentage
            nextBtn: "siguienteee 🩵"                                         // Text for the next button
        },
        third: {
            text: "Quieres ser mi San Valentin este 2026 y toda la vida? 🌻", // The big question!
            yesBtn: "Siuuuu",                                             // Text for "Yes" button
            noBtn: "Ni picha"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AAAAAAAAAAAAAAAAAAAAAAA TE ADORO",  // Shows when they go past 5000%
        high: "MUTISIMOOOOO",              // Shows when they go past 1000%
        normal: "poquitoooo"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Me haces la persona más feliz del universo",
        message: "PONTE READY QUE MANANA TENEMOS UN DATE",
        emojis: "💙 🩵🎁🤗💙 🩵"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
      backgroundStart: "#E0F2FE",   // very light ice blue
      backgroundEnd:   "#BAE6FD",   // soft blue
      buttonBackground:"#2563EB",   // strong royal blue
      buttonHover:     "#3B82F6",   // lighter hover
      textColor:       "#0F172A"    // almost-black navy
    },


    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
