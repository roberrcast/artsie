export interface Genre {
    id: string;
    label: string;
    query: string;
    description: string;
    coverId: string;
    extended_description: string;
}

export const genreData: Genre[] = [
    {
        id: "Impressionism",
        label: "Impresionismo",
        query: "impressionism",
        description: "Capturando los efectos fugaces de luz y color",
        coverId: "3c27b499-af56-f0d5-93b5-a7f2f1ad5813", // Monet's Water Lilies
        extended_description:
            "El impresionismo fue un movimiento artístico del siglo XIX caracterizado por pinceladas visibles, una composición abierta, el énfasis en la representación fiel de la luz en sus cualidades cambiantes (a menudo acentuando los efectos del paso del tiempo), temas cotidianos, ángulos visuales inusuales y la inclusión del movimiento como elemento crucial de la percepción y la experiencia humanas. El impresionismo tuvo su origen en un grupo de artistas afincados en París cuyas exposiciones independientes les dieron a conocer durante las décadas de 1870 y 1880.",
    },

    {
        id: "Neoclassicism",
        label: "Neoclasicismo",
        query: "Neoclassicism",
        description:
            "El renacer de la razón y la armonía a través de la estética clásica",
        coverId: "83092988-7180-21d1-b8a3-cf39ddf39a68", // The Landing Place
        extended_description:
            "El neoclasicismo surgió como un movimiento cultural occidental en las artes decorativas y visuales, la literatura, el teatro, la música y la arquitectura, que se inspiró en el arte y la cultura de la Antigüedad clásica. El neoclasicismo nació en Roma, en gran parte gracias a los escritos de Johann Joachim Winckelmann durante el redescubrimiento de Pompeya y Herculano. ",
    },

    {
        id: "ancient",
        label: "Antigüedad",
        query: "ancient",
        description: "Civilizaciones perdidas y legados eternos",
        coverId: "9365a024-75ce-75e9-756f-1c2c96eadec9", // Wall Painting
        extended_description:
            "El arte antiguo hace referencia a los numerosos tipos de arte producidos por las culturas avanzadas de las sociedades antiguas que poseían diferentes formas de escritura, como las de China, la India, Mesopotamia, Persia, Egipto, Grecia y Roma. El arte de las sociedades prealfabetizadas se denomina normalmente «arte prehistórico» y no entra dentro del ámbito de la era antigua. Además, aunque algunas culturas precolombinas desarrollaron la escritura en los siglos anteriores al descubrimiento europeo de América, estos avances, por razones de datación, se tratan en gran medida en el tema específico del arte precolombino y en subtemas asociados, como el arte maya, el arte azteca y el arte olmeca.",
    },

    {
        id: "ink",
        label: "Tinta",
        query: "ink",
        description:
            "El dominio del trazo y el contraste a través de una técnica milenaria",
        coverId: "5a1ce126-9ffd-36d2-21f1-21c667c4241c", // Advance Guard
        extended_description:
            "La tinta, compuesta fundamentalmente por carbón y aglutinantes, representa una de las tradiciones gráficas más persistentes de la historia. Desde el uso de pigmentos orgánicos y ferrogálicos hasta la evolución de sus herramientas —desde el cálamo de caña y la pluma de ave hasta la precisión del plumín metálico del siglo XIX—, esta técnica ha permitido una versatilidad única. Ya sea mediante la precisión del trazo con pincel de marta o la profundidad atmosférica de los lavados, la tinta continúa siendo el medio predilecto para fusionar la caligrafía, el dibujo técnico y la expresión artística pura.",
    },

    {
        id: "portraits",
        label: "Retratos",
        query: "portraits",
        description:
            "La esencia de la identidad y el prestigio capturada a través de los siglos",
        coverId: "fd991fea-0c13-8444-7879-aba467f1d9db", // Woman Reading
        extended_description:
            "Con una herencia que se remonta a cinco milenios de historia desde el antiguo Egipto, el retrato ha trascendido su función primaria como mero registro fisionómico. Antes del advenimiento de la fotografía, este género constituía el único medio para perpetuar la imagen humana, evolucionando rápidamente hacia un sofisticado instrumento de comunicación social. A través de la pintura, la escultura y el dibujo, el retrato ha servido para codificar el poder, la virtud, la opulencia y la erudición del individuo. Si bien la tradición académica tendió históricamente hacia la idealización y el halago del modelo, maestros como Francisco de Goya desafiaron estas convenciones, introduciendo una veracidad psicológica y una franqueza visual que marcaron un hito en la representación de la identidad.",
    },

    {
        id: "watercolor",
        label: "Acuarela",
        query: "watercolor",
        description:
            "Transparencia y fluidez en la técnica pictórica más antigua del mundo",
        coverId: "0fb01e26-1dcd-bba2-a146-d0adf183a2b1", // Fountains
        extended_description:
            "Considerada una de las expresiones pictóricas más antiguas de la humanidad, la acuarela ha definido la identidad visual de civilizaciones enteras. En Asia Oriental, esta técnica —conocida tradicionalmente como pintura con pincel o en rollo— ha sido el medio predominante, alcanzando una sofisticación inigualable a través del uso de tintas monocromáticas y pigmentos naturales. Desde las tradiciones milenarias de China, Corea y Japón hasta el vibrante legado artístico de la India y Etiopía, la acuarela trasciende fronteras, consolidándose como una disciplina que equilibra la transparencia, la fluidez y una profunda conexión con el soporte de papel o seda.",
    },
];
