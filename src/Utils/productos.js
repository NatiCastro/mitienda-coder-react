const productos = [
    {
        id: 1, 
        nombre: 'Aceite de Rosa Mosqueta', 
        precio: 1600,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png',
        descripcion: "Es un compuesto con ácidos grasos , como el oleico, linoleico, linolénico, transretinoico, contiene también flavonoides, vitamina C y betacaroteno. Se puede utilizar para manchas en la piel relacionadas con la despigmentación, para cicatrices , estrías y arrugas. Siendo un excelente hidratante, reafirmante y epitelizante", 
        peso: "10ml", 
        stock: 10,
        categoria: "aceites"
        
    },
    {
        id: 2, 
        nombre: 'Aceite de Jojoba', 
        precio: 1200,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png',
        descripcion: "Su alto contenido de ceramidas y su estructura química es muy similar a la grasa que segrega el foliculo de la piel humana. No deja la piel aceitosa , no es comedogénico, es antibacteriano y no es alérgico ni irritante. Aunque su función en la linea es limpiadora , también hidrata y nutre la piel debido a su contenido de los tocoferoles que componen la vitamina E así como vitamina B, Yodo y Zinc. La vitamina E previene el daño de los radicales libres causantes del envejecimiento de la piel. Brinda elasticidad y firmeza.", 
        peso: "10ml", 
        stock: 6,
        categoria: "aceites"
    },
    {
        id: 3, 
        nombre: 'Aceite de Argán',  
        precio: 1800,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png', 
        descripcion: "El aceite de argán posee niveles muy elevados de Vitamina E y de ácidos grasos esenciales como Omega 3, Omega 6 y Omega 9, antioxidantes de referencia para prevenir el desecamiento prematuro de la piel y combatir el envejecimiento cutáneo. Los fitoesteroles del aceite de argán también benefician a la reducción del colesterol.", 
        peso: "10ml", 
        stock: 7,
        categoria: "aceites"
    },
    {
        id: 4, 
        nombre: "Aceite de Palta ", 
        precio: 1100,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png',
        descripcion: "Contiene ácidos grasos insaturados, principalmente ácido oleico, aunque también linoleico y trazas de linolénico. Su alta presencia de vitamina E, y por tanto de efectos antioxidantes, previene el envejecimiento de la piel. Es altamente emoliente (alisa y suaviza la piel). Presenta una función de relipidación, es decir, de restauración de la función barrera de la piel.", 
        peso: "10ml", 
        stock: 10,
        categoria: "aceites"
    },
    {
        id: 5, 
        nombre: "Manteca de Karité", 
        precio: 1800,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png',
        descripcion: "La manteca de Karite es un potente aceite regenerador calular 100 % natural. Hidratante, nutritivo, suaviza el rostro y el cuerpo previniendo los signos de la edad y aportando vitalidad y luminosidad,tanto al cutis como al cabello.Ayuda a proteger la piel de los rayos UVA y UVB.Además previene el envejecimiento de la piel y es muy efectiva regenerando pieles envejecidas , resecas , deshidratadas e iiritadas.", 
        peso: "80gr", 
        stock: 8,
        categoria: "aceites"
    },
    {
        id: 6, 
        nombre: "Manteca de Mango", 
        precio: 2000,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png',
        descripcion: "Contiene ácidos grasos principales como eloleico y elesteárico.Tiene propiedades emolientes,suavizantes y nutrientes.Es asimismo,muy eficaz en tratamientos para el cabello,reforzando su cutícula y aprotando brillo.Recomendada para el tratamiento de arrugas,erupciones cutáneas,hidrata,suaviza y evita las estrías.Se utiliza en la elaboración de jabones, tratamientos y mascarillas capilares.", 
        peso: "80gr", 
        stock: 9,
        categoria: "aceites"
    },
    {
        id: 7, 
        nombre: "Manteca de Cacao", 
        precio: 1400,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/987/399/products/turmeric1-f19cc0c701377fad8015581018299718-480-0.png',
        descripcion: "La manteca de cacao previene el envejecimieto, repara las células , disminuye las cicatrices e hidrata. Tiene propiedades antioxidantes que aportan multitud de beneficios para la piel. Es rica en Vitamina E, la cual permite aumentar la produccion de colageno,sustancia que da elasticidad y vitalidad a la piel. Tiene propiedades antinflamatorias gracias a las cuales es posible curar la piel seca y agrietada,los eczemas y la psoriasis. Permite humectar el cabello manteniendolo hidratado y brillante despues de su aplicación.", 
        peso: "80gr", 
        stock: 10,
        categoria: "aceites"
    },
    {
        id: 8, 
        nombre: "Crema Facial Orgánica Hidratante Diurna", 
        precio: 3800,
        imagen: 'https://www.essentialoilsforhealth.com.au/wp-content/uploads/Hydrating-Cream.jpg',
        descripcion: "Humecta y combate los efectos deshidratantes del medio ambiente. La miel aporta un efecto calmante y energizante , es nutritiva y humectante , manteniendo asi una hidratación prolongada.", 
        peso: "60ml", 
        stock: 10,
        categoria: "cremas" 
    },
    {
        id: 9, 
        nombre: "Crema Facial Orgánica Reparadora", 
        precio: 3600,
        imagen: 'https://www.essentialoilsforhealth.com.au/wp-content/uploads/Hydrating-Cream.jpg',
        descripcion: " Hidrata y protege las células de los radicales libres y estimula la renovación celular , produciendo un efecto antioxidante.", 
        peso: "60ml", 
        stock: 5,
        categoria: "cremas" 
    },
    {
        id: 10, 
        nombre: "Emulsión Orgánica Corporal Reparadora", 
        precio: 3800,
        imagen: 'https://www.essentialoilsforhealth.com.au/wp-content/uploads/Hydrating-Cream.jpg',
        descripcion: " La Rosa Mosqueta tiene una alta concentración de vitaminas C, A , E B1, B2 , con excepcionales propiedades regenerativas y cicatrizantes.", 
        peso: "120ml", 
        stock: 8,
        categoria: "cremas"
    },
    {
        id: 11, 
        nombre: "Tónico Orgánico Hidratante", 
        precio: 2500,
        imagen: 'https://www.essentialoilsforhealth.com.au/wp-content/uploads/Hydrating-Cream.jpg',
        descripcion: "Ayuda a completar la limpieza equilibrando la hidratacion. Contiene Aloe Vera, que es un importante regenerador celular, cicatrizante y tonificador de la piel.", 
        peso: "120ml", 
        stock: 6,
        categoria: "cremas"
    },
    {
        id: 12, 
        nombre: "Elixir - Aceite Orgánico", 
        precio: 2800,
        imagen: 'https://www.essentialoilsforhealth.com.au/wp-content/uploads/Hydrating-Cream.jpg',
        descripcion: "Una concentración única de ingredientes orgánicos, incluido el aceite de rosa mosqueta, que nutre y protege contra la deshidratación de la piel y la pérdida de elasticidad al tiempo que revierte los signos del envejecimiento. El suero Elixir disminuye el efecto de las toxinas ambientales en su piel, promueve la absorción de nutrientes y deja su piel con una sensación de elasticidad y juventud.", 
        peso: "13ml", 
        stock: 5,
        categoria: "cremas"
    }
]

export default productos;