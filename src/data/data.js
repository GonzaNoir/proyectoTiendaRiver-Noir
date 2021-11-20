import remeraLocal from '../img/remeraLocal.jpg';
import remeraVisitante from '../img/remeraVisitante.jpg';
import remeraAlternativa from '../img/remeraAlternativa.jpg';
import camperaClasica from '../img/campera-river-plate-clasica.jpg';
import buzoRiver from '../img/buzo-River.jpg';
import camperaLluvia from '../img/campera_de_Lluvia_River_Plate.jpg';
import shortsLocal from '../img/shorts-local-river-plate-20-21.jpg';
import shortsVisitante from '../img/shorts-visitante-river-plate-20-21.jpg';
import shortsAlternativo from '../img/shorts-alternativo-river-plate-20-21.jpg';

const Item = [
    {
        id: 1,
        tittle: "Camiseta Local River Plate 21/22",
        stock: 10,
        cost: 8999,
        imagen: remeraLocal,
        desc: "Con la banda roja ahora mas ancha que nunca. El nuevo manto sagrado inspirado en los valores, la esencia, la identidad y la grandeza del club mientras rinde homenaje a la cultura y a la historia riverplatense. Su tejido suave con tecnología transpirable AEROREADY te ofrece una gran comodidad. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño",
        categoryId: "Camisetas"
    },
    {
        id: 2,
        tittle: "Camiseta Visitante River Plate 21/22",
        stock: 10,
        cost: 12.999,
        imagen: remeraVisitante,
        desc: 'De local. De visitante. Unidos. La famosa banda roja de River Plate no podia faltar en la camiseta alternativa oficial de adidas. La misma que visten los jugadores cuando salen a la cancha. Tiene un diseño ligero con tecnología de ventilación HEAT.RDY, mientras luce " El Más Grande" en la espalda para destacar tu pasión por el fútbol. • Garantía: 60 días.',
        categoryId: "Camisetas"
    },
    {
        id: 3,
        tittle: "Camiseta Alternativa River Plate 21/22",
        stock: 10,
        cost: 8999,
        imagen: remeraAlternativa,
        desc: 'Un kit clásico con un toque moderno. adidas se inspiró en la historia de éxito del River Plate para diseñar esta camiseta de fútbol. Las rayas verticales y el diseño tricolor resaltan el look clásico del equipo en la cancha. El escudo tejido con el lema "El Más Grande" deja muy claro a quién apoyas ante el rival. El tejido transpirable AEROREADY mantiene la piel fresca y seca. - Corte clásico - Cuello alto acanalado - Tejido entrelazado 100 % poliéster reciclado - Puños acanalados - Escudo del River Plate tejido • Garantía: 60 días.',
        categoryId: "Camisetas"
    },
    {
        id: 4,
        tittle: "CAMPERA RIVER PLATE CLÁSICA",
        stock: 10,
        cost: 14.999,
        imagen: camperaClasica,
        desc: "UNA CAMPERA DE RIVER PLATE ALUSIVA A LA TEMPORADA 85/86. En homenaje a uno de los clubes de fútbol más icónicos del mundo, esta campera celebra la gloriosa temporada de River Plate del 85/86 con un diseño inspirado en la camiseta local del equipo. Los colores y el escudo se combinan para crear un look retro.",
        categoryId: "Abrigos"
    },
    {
        id: 5,
        tittle: "BUZO ENTRENAMIENTO RIVER PLATE",
        stock: 10,
        cost: 13.999,
        imagen: buzoRiver,
        desc: "UN BUZO LIVIANO CON AISLAMIENTO TÉRMICO PARA ENTRENAR EN CLIMAS FRÍOS. Cuando hace calor, es fácil. Pero cuando la cancha está blanca de nieve, ni tus mejores habilidades futbolísticas te hacen entrar en calor. Por suerte, este buzo de entrenamiento River Plate de adidas cuenta con un montón de características que proporcionan mayor cobertura y te mantienen abrigado. Por ejemplo, el cuello alto, el dobladillo trasero más largo y las aberturas para los pulgares en los puños. Además, el tejido suave te mantiene seco.",
        categoryId: "Abrigos"
    },
    {
        id: 6,
        tittle: "CAMPERA DE LLUVIA RIVER PLATE",
        stock: 10,
        cost: 12.999,
        imagen: camperaLluvia,
        desc: "UNA CAMPERA IMPERMEABLE PARA ENTRENAR Y PERFECCIONAR TUS HABILIDADES. La lluvia no representa una amenaza cuando River Plate entrena para los partidos. Apenas caen las primeras gotas, los jugadores se ponen esta campera impermeable de adidas que repele el agua, absorbe el sudor y te mantiene seco y enfocado en el juego.",
        categoryId: "Abrigos"
    },
    {
        id: 7,
        tittle: "SHORTS UNIFORME TITULAR RIVER PLATE 21/22",
        stock: 10,
        cost: 5.999,
        imagen: shortsLocal,
        desc: "SHORTS DEL UNIFORME TITULAR QUE ABSORBEN EL SUDOR PARA LOS HINCHAS DEL RIVER PLATE. Estos shorts adidas para jóvenes forman parte del uniforme titular del River Plate, inspirado en los uniformes clásicos del club y diseñados para mantener a todos los hinchas cómodos dentro y fuera del Monumental. El tejido suave y la tecnología transpirable AEROREADY se encarga de mantener la piel seca y el escudo tejido del club le da el toque final. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
        categoryId: "Shorts"
    },
    {
        id: 8,
        tittle: "SHORTS VISITANTE RIVER PLATE 20/21",
        stock: 10,
        cost: 5.999,
        imagen: shortsVisitante,
        desc: "SHORTS ROJOS DEL KIT VISITANTE DE RIVER PLATE PARA JUGADORES E HINCHAS. Unidos por la pasión del fútbol. Usa estos shorts adidas River Plate con la camiseta de visitante del club para verse como los jugadores en la cancha. El escudo del club tejido le pone el toque final al look. El tejido suave con tecnología de absorción AEROREADY brinda seguridad y confianza en los momentos más intensos. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.",
        categoryId: "Shorts"
    },
    {
        id: 9,
        tittle: "SHORTS ALTERNATIVOS RIVER PLATE 20/21",
        stock: 10,
        cost: 5.999,
        imagen: shortsAlternativo,
        desc: "SHORTS QUE ABSORBEN EL SUDOR PARA LOS HINCHAS DEL RIVER PLATE. El regreso de un estilo clásico. Demostrá tu pasión por el River Plate con estos shorts de fútbol adidas. Gracias a la tecnología de absorción de humedad AEROREADY, te envuelven en comodidad para disfrutar del partido. La insignia tejida resalta sobre el tejido suave del diseño para que apoyes a tu equipo con orgullo. Este producto está hecho con material reciclado como parte de nuestro anhelo de ponerle fin a la contaminación por plástico",
        categoryId: "Shorts"
    },
]

export default Item;