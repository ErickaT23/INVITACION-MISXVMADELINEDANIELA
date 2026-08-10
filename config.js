const config = {
    event: {
        defaultEventId: "misxv-madeline-daniela-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },
    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },
    seo: {
        titulo: "Madeline Daniela | Mis XV 2026",
        descripcion: "Mis Quince Años de Madeline Daniela - 19 de septiembre, 2026",
        autor: "Two Design"
    },
    pareja: {
        nombres: "Madeline Daniela",
        fecha: "19-09-2026",
        fechaVisible: "19 · 09 · 2026"
    },
    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },
    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Salón Mario Mena",
            hora: "6:00 PM",
            direccion: "Morales, Izabal",
            ubicacionUrl: "https://maps.app.goo.gl/s29KauZ6VDFqJCVj8"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Salón Mario Mena",
            hora: "6:00 PM",
            direccion: "Morales, Izabal",
            ubicacionUrl: "https://maps.app.goo.gl/s29KauZ6VDFqJCVj8"
        }
    },
    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },
    footer: {
        hashtag: "#misxvmadelinedaniela",
        instagramUrl: "https://instagram.com/thetwodesign",
        facebookUrl: "https://facebook.com/thetwodesign",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://thetwodesign.com"
    }
};
window.config = config;
