/**
 * Taxonomy Timeline Data
 */

import { i18n } from './i18n.js';

// Helper to get translated string from an object with {en: '...', pt: '...'}
export const tData = (field) => {
    if (!field) return '';
    if (typeof field === 'string') return field; // Fallback for untranslated strings
    const lang = i18n.getLanguage();
    return field[lang] || field['en'] || '';
};

/**
 * @typedef {Object} SpeciesDef
 * @property {string} id
 * @property {Object} name
 * @property {string} fileName
 * @property {Object} reason
 * @property {Object} description
 */

/** @type {Object.<string, SpeciesDef>} */
const speciesDictionary = {
    "ecoli": {
        id: "ecoli",
        name: { en: "Escherichia coli", pt: "Escherichia coli" },
        fileName: "Escherichia coli.png",
        reason: { en: "Classic bacterium", pt: "Bactéria clássica" },
        description: { en: "A highly studied Gram-negative, facultative anaerobic, rod-shaped coliform bacterium of the genus Escherichia that is commonly found in the lower intestine of warm-blooded organisms.", pt: "Uma bactéria coliforme Gram-negativa, anaeróbia facultativa e em forma de bastonete do gênero Escherichia, altamente estudada, que é comumente encontrada no intestino inferior de organismos de sangue quente." }
    },
    "halo": {
        id: "halo",
        name: { en: "Halobacterium salinarum", pt: "Halobacterium salinarum" },
        fileName: "Halobacterium salinarum.png",
        reason: { en: "Archaeon", pt: "Archaea" },
        description: { en: "An extremely halophilic marine obligate aerobic archaeon. Despite its name, this is not a bacterium, but rather a member of the domain Archaea.", pt: "Uma arquea aeróbia marinha extremamente halofílica. Apesar do nome, não é uma bactéria, mas sim um membro do domínio Archaea." }
    },
    "paramecium": {
        id: "paramecium",
        name: { en: "Paramecium caudatum", pt: "Paramecium caudatum" },
        fileName: "Paramecium caudatum.png",
        reason: { en: "Classic protist", pt: "Protista clássico" },
        description: { en: "A species of unicellular organisms belonging to the genus Paramecium of the phylum Ciliophora. They are characterized by their slipper-like shape.", pt: "Uma espécie de organismo unicelular pertencente ao gênero Paramecium, do filo Ciliophora. Eles se caracterizam por sua forma semelhante a um chinelo." }
    },
    "euglena": {
        id: "euglena",
        name: { en: "Euglena gracilis", pt: "Euglena gracilis" },
        fileName: "Euglena gracilis.png",
        reason: { en: "Plant/animal ambiguity", pt: "Ambiguidade planta/animal" },
        description: { en: "A freshwater species of single-celled alga in the genus Euglena. It has chloroplasts for photosynthesis but can also feed heterotrophically, causing historical confusion.", pt: "Uma espécie de alga unicelular de água doce do gênero Euglena. Possui cloroplastos para fotossíntese, mas também pode se alimentar de forma heterotrófica, o que causou confusão histórica na classificação." }
    },
    "yeast": {
        id: "yeast",
        name: { en: "Saccharomyces cerevisiae", pt: "Saccharomyces cerevisiae" },
        fileName: "Saccharomyces cerevisiae.png",
        reason: { en: "Yeast (fungus)", pt: "Levedura (fungo)" },
        description: { en: "A species of yeast well-known for its role in baking and brewing. It is a single-celled fungus.", pt: "Uma espécie de levedura muito conhecida por seu papel na panificação e na fabricação de cerveja. É um fungo unicelular." }
    },
    "mushroom": {
        id: "mushroom",
        name: { en: "Agaricus bisporus", pt: "Agaricus bisporus" },
        fileName: "Agaricus bisporus.png",
        reason: { en: "Mushroom", pt: "Cogumelo" },
        description: { en: "An edible basidiomycete mushroom native to grasslands in Eurasia and North America. It illustrates a complex, multicellular fungus.", pt: "Um cogumelo basidiomiceto comestível nativo das pastagens da Eurásia e da América do Norte. Serve de exemplo para um fungo multicelular complexo." }
    },
    "chlamy": {
        id: "chlamy",
        name: { en: "Chlamydomonas reinhardtii", pt: "Chlamydomonas reinhardtii" },
        fileName: "Chlamydomonas reinhardtii.png",
        reason: { en: "Green alga", pt: "Alga verde" },
        description: { en: "A single-celled green alga about 10 micrometres in diameter that swims with two flagella. It is widely used as a model organism.", pt: "Uma alga verde unicelular com cerca de 10 micrômetros de diâmetro que nada usando dois flagelos. É amplamente utilizada como organismo modelo." }
    },
    "arabidopsis": {
        id: "arabidopsis",
        name: { en: "Arabidopsis thaliana", pt: "Arabidopsis thaliana" },
        fileName: "Arabidopsis thaliana.png",
        reason: { en: "Model plant", pt: "Planta modelo" },
        description: { en: "A small flowering plant that is widely used as a model organism in plant biology and genetics.", pt: "Uma pequena planta com flores amplamente utilizada como organismo modelo em biologia vegetal e genética." }
    },
    "oak": {
        id: "oak",
        name: { en: "Quercus robur", pt: "Quercus robur" },
        fileName: "Quercus robur.png",
        reason: { en: "Angiosperm (tree)", pt: "Angiosperma (árvore)" },
        description: { en: "The common oak is a species of flowering plant in the beech and oak family, Fagaceae.", pt: "O carvalho-roble é uma espécie de planta com flor da família Fagaceae (as faias e os carvalhos)." }
    },
    "corn": {
        id: "corn",
        name: { en: "Zea mays", pt: "Zea mays" },
        fileName: "Zea mays.png",
        reason: { en: "Angiosperm (crop)", pt: "Milho (cultura agrícola)" },
        description: { en: "Maize, or corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.", pt: "O milho é um grão de cereal domesticado por povos indígenas no sul do México há cerca de 10.000 anos." }
    },
    "pine": {
        id: "pine",
        name: { en: "Pinus sylvestris", pt: "Pinus sylvestris" },
        fileName: "Pinus sylvestris.png",
        reason: { en: "Gymnosperm", pt: "Gimnosperma" },
        description: { en: "Scots pine is a species of pine native to Eurasia. It represents a major lineage of seed-producing plants.", pt: "O pinheiro-de-casquinha é uma espécie de pinheiro nativo da Eurásia. Ele representa uma importante linhagem de plantas produtoras de sementes (gimnospermas)." }
    },
    "fern": {
        id: "fern",
        name: { en: "Pteridium aquilinum", pt: "Pteridium aquilinum" },
        fileName: "Pteridium aquilinum.png",
        reason: { en: "Fern", pt: "Feto" },
        description: { en: "Bracken is a species of fern occurring in temperate and subtropical regions in both hemispheres.", pt: "A samambaia-águia (feto-comum) é uma espécie de samambaia que ocorre em regiões temperadas e subtropicais em ambos os hemisférios." }
    },
    "fly": {
        id: "fly",
        name: { en: "Drosophila melanogaster", pt: "Drosophila melanogaster" },
        fileName: "Drosophila melanogaster.png",
        reason: { en: "Model insect", pt: "Inseto modelo" },
        description: { en: "The common fruit fly is a species of fly in the family Drosophilidae. It is one of the most studied organisms in biological research.", pt: "A mosca-da-fruta comum é uma espécie de mosca da família Drosophilidae. É um dos organismos mais estudados na pesquisa biológica." }
    },
    "human": {
        id: "human",
        name: { en: "Homo sapiens", pt: "Homo sapiens" },
        fileName: "Homo sapiens.png",
        reason: { en: "Humans", pt: "Ser humano" },
        description: { en: "The most abundant and widespread species of primate, characterized by bipedalism and large, complex brains.", pt: "A espécie de primata mais abundante e amplamente distribuída, caracterizada por bipedalismo e cérebros grandes e complexos." }
    },
    "worm": {
        id: "worm",
        name: { en: "Lumbricus terrestris", pt: "Lumbricus terrestris" },
        fileName: "Lumbricus terrestris.png",
        reason: { en: "Earthworm", pt: "Minhoca" },
        description: { en: "A large, reddish worm native to Europe, commonly known as the common earthworm.", pt: "Um grande verme de lombo avermelhado nativo da Europa, conhecido popularmente como minhoca-da-terra." }
    },
    "jelly": {
        id: "jelly",
        name: { en: "Aurelia aurita", pt: "Aurelia aurita" },
        fileName: "Aurelia aurita.png",
        reason: { en: "Jellyfish", pt: "Medusa" },
        description: { en: "The moon jelly is a widely studied species of the genus Aurelia, representing early diverging animals (Cnidarians).", pt: "A medusa-da-lua é uma espécie amplamente estudada do gênero Aurelia, representando um clado inicial de animais (Cnidários)." }
    },
    "dog": {
        id: "dog",
        name: { en: "Canis lupus familiaris", pt: "Canis lupus familiaris" },
        fileName: "Canis lupus familiaris.png",
        reason: { en: "Mammal", pt: "Mamífero" },
        description: { en: "The dog is a domesticated descendant of the wolf.", pt: "O cão é um descendente domesticado do lobo." }
    },
    "chicken": {
        id: "chicken",
        name: { en: "Gallus gallus", pt: "Gallus gallus" },
        fileName: "Gallus gallus.png",
        reason: { en: "Bird", pt: "Ave" },
        description: { en: "The red junglefowl is a tropical member of the pheasant family. It is the primary ancestor of the domestic chicken.", pt: "O galo-banquiva é um membro tropical da família dos faisões. É o principal ancestral da galinha doméstica." }
    },
    "salmon": {
        id: "salmon",
        name: { en: "Salmo salar", pt: "Salmo salar" },
        fileName: "Salmo salar.png",
        reason: { en: "Bony fish", pt: "Peixe ósseo" },
        description: { en: "The Atlantic salmon is a species of ray-finned fish in the family Salmonidae.", pt: "O salmão do Atlântico é uma espécie de peixe com nadadeiras raiadas da família Salmonidae." }
    },
    "octopus": {
        id: "octopus",
        name: { en: "Octopus vulgaris", pt: "Octopus vulgaris" },
        fileName: "Octopus vulgaris.png",
        reason: { en: "Mollusc", pt: "Molusco" },
        description: { en: "The common octopus is a highly intelligent, predatory cephalopod.", pt: "O polvo comum é um cefalópode predador e altamente inteligente." }
    },
    "eagle": {
        id: "eagle",
        name: { en: "Aquila sp.", pt: "Aquila sp." },
        fileName: "Aquila sp.png",
        reason: { en: "Bird", pt: "Ave" },
        description: { en: "Eagles are large, powerfully built birds of prey.", pt: "As águias são grandes aves de rapina, de constituição robusta." }
    },
    "starfish": {
        id: "starfish",
        name: { en: "Asterias rubens", pt: "Asterias rubens" },
        fileName: "Asterias rubens.png",
        reason: { en: "Echinoderm", pt: "Equinodermo" },
        description: { en: "The common starfish is the most common and familiar starfish in the north-east Atlantic.", pt: "A estrela-do-mar comum é a espécie de estrela-do-mar mais comum e conhecida no nordeste do Atlântico." }
    },
    "centipede": {
        id: "centipede",
        name: { en: "Scolopendra sp.", pt: "Scolopendra sp." },
        fileName: "Scolopendra sp.png",
        reason: { en: "Myriapod", pt: "Miriápode" },
        description: { en: "Centipedes are predatory arthropods belonging to the class Chilopoda.", pt: "Centopeias são artrópodes predadores da classe Chilopoda." }
    },
    "ladybug": {
        id: "ladybug",
        name: { en: "Coccinella septempunctata", pt: "Coccinella septempunctata" },
        fileName: "Coccinella septempunctata.png",
        reason: { en: "Insect", pt: "Inseto" },
        description: { en: "The seven-spot ladybird is the most common ladybird in Europe.", pt: "A joaninha-de-sete-pontos é a joaninha mais comum da Europa." }
    },
    "platypus": {
        id: "platypus",
        name: { en: "Ornithorhynchus anatinus", pt: "Ornithorhynchus anatinus" },
        fileName: "Ornithorhynchus anatinus.png",
        reason: { en: "Monotreme", pt: "Monotremado" },
        description: { en: "A semiaquatic, egg-laying mammal endemic to eastern Australia. Its unique traits historically confused taxonomists.", pt: "Um mamífero semiaquático e ovíparo (põe ovos) endêmico ao leste da Austrália. Suas características únicas confundiram os taxonomistas por muito tempo." }
    },
    "shark": {
        id: "shark",
        name: { en: "Carcharodon carcharias", pt: "Carcharodon carcharias" },
        fileName: "Carcharodon carcharias.png",
        reason: { en: "Cartilaginous fish", pt: "Peixe cartilaginoso" },
        description: { en: "The great white shark is a species of large mackerel shark, representing a major group of fish with skeletons made of cartilage.", pt: "O grande tubarão-branco é uma espécie de tubarão e representa um grande grupo de peixes cujos esqueletos são feitos de cartilagem." }
    },
    "cow": {
        id: "cow",
        name: { en: "Bos taurus", pt: "Bos taurus" },
        fileName: "Bos taurus.png",
        reason: { en: "Mammal", pt: "Mamífero" },
        description: { en: "Cattle are large, domesticated, cloven-hooved herbivores.", pt: "Os bovinos são grandes herbívoros domesticados providos de cascos fendidos." }
    },
    "frog": {
        id: "frog",
        name: { en: "Rana sp.", pt: "Rana sp." },
        fileName: "Rana sp.png",
        reason: { en: "Amphibian", pt: "Anfíbio" },
        description: { en: "True frogs are widespread amphibians, typified by long hind legs and a lack of a tail.", pt: "As rãs verdadeiras são anfíbios comuns e de ampla distribuição, caracterizados por pernas traseiras longas e falta de cauda na fase adulta." }
    },
    "croc": {
        id: "croc",
        name: { en: "Crocodylus niloticus", pt: "Crocodylus niloticus" },
        fileName: "Crocodylus niloticus.png",
        reason: { en: "Reptile", pt: "Réptil" },
        description: { en: "The Nile crocodile is a large crocodilian native to freshwater habitats in Africa.", pt: "O crocodilo-do-nilo é um grande crocodiliano nativo de habitats de água doce na África." }
    },
};

/**
 * @typedef {Object} TimelineItem
 * @property {string} id
 * @property {Object} title
 * @property {number} startYear
 * @property {number} endYear
 * @property {Object} description
 * @property {Object} [tree]
 */

/** @type {TimelineItem[]} */
const scientistsData = [
    {
        id: "aristotle",
        title: { en: "Aristotle", pt: "Aristóteles" },
        startYear: -384,
        endYear: -322,
        description: {
            en: "Developed one of the first biological classification systems, dividing animals into those with blood (vertebrates) and those without (invertebrates). Known as the first to systematically classify all living things.",
            pt: "Desenvolveu um dos primeiros sistemas de classificação biológica, dividindo os animais em aqueles com sangue (vertebrados) e os sem sangue (invertebrados). Conhecido como o primeiro a classificar sistematicamente todos os seres vivos."
        }
    },
    {
        id: "theophrastus",
        title: { en: "Theophrastus", pt: "Teofrasto" },
        startYear: -370,
        endYear: -285,
        description: {
            en: "Student of Aristotle, wrote 'De Historia Plantarum', classifying 480 plant species based on their growth form. Placed early foundations for botanical taxonomy.",
            pt: "Aluno de Aristóteles, escreveu 'De Historia Plantarum', classificando 480 espécies de plantas com base em sua forma de crescimento. Lançou as bases iniciais da taxonomia botânica."
        }
    },
    {
        id: "pliny",
        title: { en: "Pliny the Elder", pt: "Plínio, o Velho" },
        startYear: 23,
        endYear: 79,
        description: {
            en: "Roman statesman who described numerous plants in his 160-volume 'Naturalis Historia', assigning them early Latin names. Titled the 'Father of Botanical Latin'.",
            pt: "Estadista romano que descreveu inúmeras plantas em sua obra de 160 volumes 'Naturalis Historia', atribuindo-lhes os primeiros nomes latinos. Conhecido como o 'Pai do Latim Botânico'."
        }
    },
    {
        id: "ray",
        title: { en: "John Ray", pt: "John Ray" },
        startYear: 1627,
        endYear: 1705,
        description: {
            en: "Established the 'species' as the ultimate, foundational unit of taxonomy in 1682, paving the way for systematic modern biology.",
            pt: "Estabeleceu a 'espécie' como a unidade fundamental e a essência da taxonomia em 1682, pavimentando o caminho para a biologia sistemática moderna."
        }
    },
    {
        id: "tournefort",
        title: { en: "Joseph Pitton de Tournefort", pt: "Joseph Pitton de Tournefort" },
        startYear: 1656,
        endYear: 1708,
        description: {
            en: "Stabilized the genus level, grouping 9,000 species into exactly 698 genera.",
            pt: "Estabilizou o conceito de gênero na classificação, agrupando 9.000 espécies em exatamente 698 gêneros."
        }
    },
    {
        id: "linnaeus",
        title: { en: "Carl Linnaeus", pt: "Carl Lineu" },
        startYear: 1707,
        endYear: 1778,
        description: {
            en: "Publishing 'Systema Naturae' (1735) and 'Species Plantarum' (1753), he introduced binomial nomenclature and the hierarchical system of taxonomy (Kingdom, Class, Order, Genus, Species).",
            pt: "Com a publicação de 'Systema Naturae' (1735) e 'Species Plantarum' (1753), ele introduziu a nomenclatura binomial e o sistema hierárquico de taxonomia (Reino, Classe, Ordem, Gênero, Espécie)."
        }
    },
    {
        id: "cuvier",
        title: { en: "Georges Cuvier", pt: "Georges Cuvier" },
        startYear: 1769,
        endYear: 1832,
        description: {
            en: "French anatomist who definitively proved the reality of animal extinction by analyzing anatomical differences between fossil mammoths and living elephants.",
            pt: "Anatomista francês que provou definitivamente a realidade da extinção natural de animais após analisar diferenças anatômicas entre mamutes fósseis e elefantes vivos."
        }
    },
    {
        id: "lyell",
        title: { en: "Charles Lyell", pt: "Charles Lyell" },
        startYear: 1797,
        endYear: 1875,
        description: {
            en: "Wrote 'The Principles of Geology', championing uniformitarianism and the concept of deep geological time—the canvas required for evolutionary theory.",
            pt: "Escreveu 'Os Princípios da Geologia', defendendo o uniformitarismo e o conceito de tempo geológico profundo — a tela necessária para a teoria evolutiva."
        }
    },
    {
        id: "darwin",
        title: { en: "Charles Darwin", pt: "Charles Darwin" },
        startYear: 1809,
        endYear: 1882,
        description: {
            en: "Published 'On the Origin of Species' in 1859, proposing evolution by natural selection and introducing the fundamental concept of a branching tree of life (genealogical descent).",
            pt: "Publicou 'A Origem das Espécies' em 1859, propondo a evolução por seleção natural e introduzindo o conceito fundamental de uma árvore ramificada da vida (descendência genealógica)."
        }
    },
    {
        id: "haeckel",
        title: { en: "Ernst Haeckel", pt: "Ernst Haeckel" },
        startYear: 1834,
        endYear: 1919,
        description: {
            en: "German biologist who constructed the first formal evolutionary trees. established the term 'phylogeny', and proposed the Kingdom Protista.",
            pt: "Biólogo alemão que construiu as primeiras árvores evolutivas formais. Estabeleceu o termo 'filogenia' e propôs o Reino Protista."
        }
    },
    {
        id: "hennig",
        title: { en: "Willi Hennig", pt: "Willi Hennig" },
        startYear: 1913,
        endYear: 1976,
        description: {
            en: "Founded Cladistics (Phylogenetic Systematics) in the 1950s/60s. Argued classification must reflect common ancestry using shared derived character states (synapomorphies).",
            pt: "Fundou a Cladística (Sistemática Filogenética) na década de 1950/60. Argumentou que a classificação deve refletir a ancestralidade comum usando características derivadas compartilhadas (sinapomorfias)."
        }
    },
    {
        id: "woese",
        title: { en: "Carl Woese", pt: "Carl Woese" },
        startYear: 1928,
        endYear: 2012,
        description: {
            en: "Using sequence analysis of 16S ribosomal RNA, he discovered Archaea as a distinct third form of life, radically reorganizing the tree of life into three overarching domains (1977).",
            pt: "Por meio da análise da sequência de RNA ribossômico 16S, descobriu os Archaea como uma terceira e distinta forma de vida, reorganizando radicalmente a árvore da vida em três grandes domínios (1977)."
        }
    },
    {
        id: "margulis",
        title: { en: "Lynn Margulis", pt: "Lynn Margulis" },
        startYear: 1938,
        endYear: 2011,
        description: {
            en: "Championed the Endosymbiotic Theory (late 1960s), demonstrating that complex eukaryotic cells evolved through the merger (symbiosis) of ancient bacteria.",
            pt: "Defendeu a Teoria Endossimbiótica (final dos anos 60), demonstrando que células eucarióticas complexas evoluíram através da fusão (simbiose) de bactérias antigas."
        }
    },
    {
        id: "paabo",
        title: { en: "Svante Pääbo", pt: "Svante Pääbo" },
        startYear: 1955,
        endYear: 2040, // Representation of 'present' for timeline rendering purposes
        description: {
            en: "Pioneered ancient DNA sequencing. Sequenced the Neanderthal genome, proving interbreeding with Homo sapiens and clarifying hominid evolution.",
            pt: "Pioneiro no sequenciamento de DNA antigo. Sequenciou o genoma dos Neandertais, provando o intercruzamento com o Homo sapiens e ajudando a esclarecer a evolução dos hominídeos."
        }
    },
    {
        id: "aquinas",
        title: { en: "Thomas Aquinas", pt: "Tomás de Aquino" },
        startYear: 1225,
        endYear: 1274,
        description: {
            en: "Integrated Aristotelian philosophy with Christian theology, viewing nature through the lens of a divine hierarchy or 'Great Chain of Being' (Scala Naturae).",
            pt: "Integrou a filosofia aristotélica com a teologia cristã, vendo a natureza através da lente de uma hierarquia divina ou 'Grande Cadeia do Ser' (Scala Naturae)."
        }
    },
    {
        id: "aldamiri",
        title: { en: "Al-Damiri", pt: "Al-Damiri" },
        startYear: 1341,
        endYear: 1405,
        description: {
            en: "Arab writer who compiled 'Hayat al-Hayawan' (The Life of Animals), a major encyclopedia of zoology that combined scientific knowledge with folklore and linguistics.",
            pt: "Escritor árabe que compilou 'Hayat al-Hayawan' (A Vida dos Animais), uma grande enciclopédia de zoologia que combinava conhecimento científico com folclore e linguística."
        }
    },
    {
        id: "ussher",
        title: { en: "James Ussher", pt: "James Ussher" },
        startYear: 1581,
        endYear: 1656,
        description: {
            en: "Formulated the Ussher chronology, calculating the date of creation to 4004 BC, which heavily influenced how scholars viewed the age of the Earth and the timeframe for the history of life.",
            pt: "Formulou a cronologia de Ussher, calculando a data da criação em 4004 a.C., o que influenciou fortemente a forma como os estudiosos viam a idade da Terra e o cronograma para a história da vida."
        }
    },
    {
        id: "lamarck",
        title: { en: "Jean-Baptiste Lamarck", pt: "Jean-Baptiste Lamarck" },
        startYear: 1744,
        endYear: 1829,
        description: {
            en: "Proposed early theories of evolution, notably the inheritance of acquired characteristics, and made significant contributions to the classification of invertebrates.",
            pt: "Propôs as primeiras teorias da evolução, notavelmente a herança de características adquiridas, e deu contributos significativos para a classificação dos invertebrados."
        }
    },
    {
        id: "cesalpino",
        title: { en: "Andrea Cesalpino", pt: "Andrea Cesalpino" },
        startYear: 1519,
        endYear: 1603,
        description: {
            en: "A pioneering botanist who created an early system of plant classification based on fruits and seeds, moving away from alphabetical or medicinal groupings.",
            pt: "Um botânico pioneiro que criou um dos primeiros sistemas de classificação de plantas com base em frutos e sementes, afastando-se dos agrupamentos alfabéticos ou medicinais."
        }
    },
    {
        id: "bauhin",
        title: { en: "Johann Bauhin", pt: "Johann Bauhin" },
        startYear: 1541,
        endYear: 1613,
        description: {
            en: "Co-author of an extensive early botanical encyclopedia that described over 5,000 plants, laying important groundwork for later, more systematic classifications.",
            pt: "Coautor de uma extensa e pioneira enciclopédia botânica que descreveu mais de 5.000 plantas, lançando bases fundamentais para classificações posteriores mais sistemáticas."
        }
    },
    {
        id: "leclerc_buffon",
        title: { en: "Georges-Louis Leclerc", pt: "Georges-Louis Leclerc" },
        startYear: 1707,
        endYear: 1788,
        description: {
            en: "Authored the monumental 'Histoire Naturelle', exploring the concept of species changing over time and emphasizing the importance of environmental influence.",
            pt: "Foi o autor da monumental 'Histoire Naturelle', explorando o conceito de mudança das espécies ao longo do tempo e enfatizando a importância da influência ambiental."
        }
    },
    {
        id: "anning",
        title: { en: "Mary Anning", pt: "Mary Anning" },
        startYear: 1799,
        endYear: 1847,
        description: {
            en: "Pioneering paleontologist and fossil collector whose discoveries of Jurassic marine reptiles in Lyme Regis fundamentally changed scientific understanding of prehistoric life.",
            pt: "Paleontóloga e colecionadora de fósseis pioneira, cujas descobertas de répteis marinhos do Jurássico em Lyme Regis mudaram fundamentalmente a compreensão científica da vida pré-histórica."
        }
    },
    {
        id: "mantell",
        title: { en: "Gideon Mantell", pt: "Gideon Mantell" },
        startYear: 1790,
        endYear: 1852,
        description: {
            en: "Discovered the first recognized dinosaur fossils (Iguanodon), contributing greatly to the early establishment of paleontology as a science.",
            pt: "Descobriu os primeiros fósseis de dinossauros reconhecidos (Iguanodon), contribuindo de forma decisiva para o estabelecimento inicial da paleontologia como ciência."
        }
    },
    {
        id: "owen",
        title: { en: "Richard Owen", pt: "Richard Owen" },
        startYear: 1804,
        endYear: 1892,
        description: {
            en: "Coined the term 'Dinosauria' and was a brilliant comparative anatomist, though often an opponent of Darwin's theory of evolution.",
            pt: "Criou o termo 'Dinosauria' e foi um brilhante anatomista comparativo, embora frequentemente opositor da teoria da evolução de Darwin."
        }
    },
    {
        id: "wallace",
        title: { en: "Alfred Russel Wallace", pt: "Alfred Russel Wallace" },
        startYear: 1823,
        endYear: 1913,
        description: {
            en: "Independently conceived the theory of evolution through natural selection, prompting Charles Darwin to publish his own ideas. Considered the father of biogeography.",
            pt: "Concebeu de forma independente a teoria da evolução através da seleção natural, impulsionando Charles Darwin a publicar as suas próprias ideias. É considerado o pai da biogeografia."
        }
    }
];

/** @type {TimelineItem[]} */
const systemsData = [
    {
        id: "ancient",
        title: { en: "Aristotelian System (Animals/Plants)", pt: "Sistema Aristotélico (Animais/Plantas)" },
        startYear: -350,
        endYear: 1735,
        description: {
            en: "Aristotle's initial separation into Plants and Animals, distinguishing animals by blood vs bloodless.",
            pt: "A separação inicial de Aristóteles em Plantas e Animais, distinguindo os animais pelo sangue vs ausência dele."
        },
        tree: {
            name: { en: "Life", pt: "Vida" },
            rank: { en: "Concept", pt: "Conceito" },
            description: { en: "All living things according to Aristotle.", pt: "Todos os seres vivos segundo Aristóteles." },
            imageQuery: "nature",
            species: [],
            children: [
                {
                    name: { en: "Plantae", pt: "Plantae" },
                    rank: { en: "Kingdom", pt: "Reino" },
                    description: { en: "Organisms with vegetative soul, capable of growth and reproduction (includes ALL non-animals).", pt: "Organismos com alma vegetativa, capazes de crescer e reproduzir (inclui TODOS os não-animais)." },
                    imageQuery: "plant",
                    species: ["arabidopsis", "mushroom", "oak", "corn", "pine", "fern"],
                    children: []
                },
                {
                    name: { en: "Animalia", pt: "Animalia" },
                    rank: { en: "Kingdom", pt: "Reino" },
                    description: { en: "Organisms with sensitive soul, capable of movement and sensation.", pt: "Organismos com alma sensível, capazes de movimento e sensação." },
                    imageQuery: "animal",
                    species: [],
                    children: [
                        { name: { en: "Blood (Vertebrates)", pt: "Com Sangue (Vertebrados)" }, rank: { en: "Group", pt: "Grupo" }, description: { en: "Animals with red blood, usually live-bearing.", pt: "Animais com sangue vermelho, muitas vezes vivíparos." }, imageQuery: "mammal", species: ["human", "dog", "chicken", "salmon", "eagle", "platypus", "shark", "cow", "frog", "croc"], children: [] },
                        { name: { en: "Bloodless (Invertebrates)", pt: "Sem Sangue (Invertebrados)" }, rank: { en: "Group", pt: "Grupo" }, description: { en: "Animals without red blood, like insects or molluscs.", pt: "Animais sem sangue, como insetos e moluscos." }, imageQuery: "insect", species: ["fly", "worm", "jelly", "octopus", "starfish", "centipede", "ladybug"], children: [] }
                    ]
                }
            ]
        }
    },
    {
        id: "2k",
        title: { en: "2 Kingdoms (Linnaeus)", pt: "2 Reinos (Lineu)" },
        startYear: 1735,
        endYear: 1866,
        description: {
            en: "Linnaeus's formalization of Kingdom Plantae and Kingdom Animalia in 'Systema Naturae'.",
            pt: "A formalização de Lineu quanto aos reinos Plantae e Animalia na obra 'Systema Naturae'."
        },
        tree: {
            name: { en: "Naturae", pt: "Naturae" },
            rank: { en: "Concept", pt: "Conceito" },
            description: { en: "Linnaeus divided the natural world into three broad kingdoms (including minerals).", pt: "Lineu dividiu o mundo natural em três grandes reinos (incluindo o reino dos minerais)." },
            imageQuery: "nature",
            species: [],
            children: [
                {
                    name: { en: "Plantae", pt: "Plantae" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Stationary, photosynthetic living things.", pt: "Seres vivos estacionários e fotossintéticos." }, imageQuery: "flora", species: ["arabidopsis", "mushroom", "oak", "corn", "pine", "fern"], children: []
                },
                {
                    name: { en: "Animalia", pt: "Animalia" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Mobile, heterotrophic living things.", pt: "Seres vivos móveis e heterotróficos." }, imageQuery: "fauna", species: ["human", "fly", "worm", "jelly", "dog", "chicken", "salmon", "octopus", "eagle", "starfish", "centipede", "ladybug", "platypus", "shark", "cow", "frog", "croc", "chlamy", "yeast", "euglena", "paramecium", "ecoli", "halo",], children: []
                }
            ]
        }
    },
    {
        id: "3k",
        title: { en: "3 Kingdoms (Haeckel)", pt: "3 Reinos (Haeckel)" },
        startYear: 1866,
        endYear: 1938,
        description: {
            en: "Ernst Haeckel introduced 'Protista' to accommodate microorganisms that didn't fit neatly into plants or animals.",
            pt: "Ernst Haeckel introduziu os 'Protistas' para acomodar microrganismos que não se encaixavam perfeitamente como plantas ou animais."
        },
        tree: {
            name: { en: "Living Organisms", pt: "Organismos Vivos" },
            rank: { en: "Tree of Life", pt: "Árvore da Vida" },
            description: { en: "Ernst Haeckel's tripartite division of life.", pt: "A divisão tripartida da vida estabelecida por Ernst Haeckel." },
            imageQuery: "microscope",
            species: [],
            children: [
                { name: { en: "Plantae", pt: "Plantae" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Multicellular plants.", pt: "Plantas multicelulares." }, imageQuery: "tree", species: ["arabidopsis", "chlamy", "oak", "corn", "pine", "fern"], children: [] },
                { name: { en: "Animalia", pt: "Animalia" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Multicellular animals.", pt: "Animais multicelulares." }, imageQuery: "tiger", species: ["human", "fly", "worm", "jelly", "dog", "chicken", "salmon", "octopus", "eagle", "starfish", "centipede", "ladybug", "platypus", "shark", "cow", "frog", "croc"], children: [] },
                { name: { en: "Protista", pt: "Protista" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Organisms that lacked the complex, differentiated tissue systems found in higher plants and animals", pt: "Organismos que não apresentam tecidos complexos e diferenciados como os encontrados em plantas e animais" }, imageQuery: "amoeba", species: ["paramecium", "euglena", "yeast", "mushroom", "ecoli", "halo"], children: [] }
            ]
        }
    },
    {
        id: "4k",
        title: { en: "4 Kingdoms (Copeland)", pt: "4 Reinos (Copeland)" },
        startYear: 1938,
        endYear: 1969,
        description: {
            en: "Herbert Copeland separated bacteria (prokaryotes) from eukaryotes, creating Kingdom Monera.",
            pt: "Herbert Copeland separou as bactérias (procariontes) dos eucariontes, criando o Reino Monera."
        },
        tree: {
            name: { en: "Life", pt: "Vida" },
            rank: { en: "Empire", pt: "Império" },
            description: { en: "Divided based on the presence or absence of a nucleus.", pt: "Dividida com base na presença ou ausência de um núcleo em suas células." },
            imageQuery: "cell",
            species: [],
            children: [
                { name: { en: "Monera", pt: "Monera" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Prokaryotes. Cells without a true nucleus. Eg. bacteria, blue-green algae.", pt: "Procariontes. Células sem um núcleo verdadeiro. Ex. bactérias, cianobactérias." }, imageQuery: "bacteria", species: ["ecoli", "halo"], children: [] },
                { name: { en: "Protista", pt: "Protista" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Eukaryotes that did not fit the strict definitions of true plants or animals. Eg. fungi, protozoa, red and brown algae.", pt: "Eucariotas que não seguiam a definição estrita de animais ou plantas. Ex. fungos, protozoários, algas vermelhas e castanhas." }, imageQuery: "paramecium", species: ["paramecium", "euglena", "yeast", "mushroom"], children: [] },
                { name: { en: "Plantae", pt: "Plantae" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Multicellular, photosynthetic organisms. Eg. green plants, trees, mosses.", pt: "Organismos multicelulares fotossintéticos. Ex. plantas verdes, árvores, musgos" }, imageQuery: "fern", species: ["arabidopsis", "chlamy", "oak", "corn", "pine", "fern"], children: [] },
                { name: { en: "Animalia", pt: "Animalia" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Multicellular organisms with complex tissues. Eg. mammals, insects, birds, sponges.", pt: "Organismos multicelulares com tecidos complexos. Ex. mamíferos, insetos, aves, esponjas" }, imageQuery: "lion", species: ["human", "fly", "worm", "jelly", "dog", "chicken", "salmon", "octopus", "eagle", "starfish", "centipede", "ladybug", "platypus", "shark", "cow", "frog", "croc"], children: [] }
            ]
        }
    },
    {
        id: "5k",
        title: { en: "5 Kingdoms (Whittaker)", pt: "5 Reinos (Whittaker)" },
        startYear: 1969,
        endYear: 1990,
        description: {
            en: "Robert Whittaker's widely taught system: Monera, Protista, Fungi, Plantae, Animalia. Fungi were separated from plants based on their absorptive mode of nutrition.",
            pt: "O sistema amplamente aceite de Robert Whittaker: Monera, Protista, Fungi, Plantae e Animalia. Os fungos foram separados das plantas com base em seu modo nutritivo de absorção."
        },
        tree: {
            name: { en: "Life", pt: "Vida" },
            rank: { en: "Biosphere", pt: "Biosfera" },
            description: { en: "Structured around cellular organization (prokaryote vs eukaryote) and mode of nutrition.", pt: "Estruturada em torno da organização celular (procarionte vs eucarionte) e modo de nutrição." },
            imageQuery: "forest",
            species: [],
            children: [
                { name: { en: "Monera", pt: "Monera" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Prokaryotic organisms (bacteria/blue-green algae).", pt: "Organismos procarióticos (bactérias e cianobactérias)." }, imageQuery: "microbe", species: ["ecoli", "halo"], children: [] },
                { name: { en: "Protista", pt: "Protista" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Mostly unicellular eukaryotes.", pt: "Eucariontes unicelulares, na sua maioria." }, imageQuery: "plankton", species: ["paramecium", "euglena", "chlamy"], children: [] },
                { name: { en: "Fungi", pt: "Fungi" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Absorptive heterotrophs (mushrooms, molds, yeast). Finally separated into their own kingdom.", pt: "Heterótrofos absortivos (cogumelos, mofos e leveduras)." }, imageQuery: "mushroom", species: ["yeast", "mushroom"], children: [] },
                { name: { en: "Plantae", pt: "Plantae" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Photosynthetic autotrophs.", pt: "Autótrofos fotossintetizantes (plantas)." }, imageQuery: "flower", species: ["arabidopsis", "oak", "corn", "pine", "fern"], children: [] },
                { name: { en: "Animalia", pt: "Animalia" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Ingestive heterotrophs.", pt: "Heterótrofos de ingestão (animais)." }, imageQuery: "elephant", species: ["human", "fly", "worm", "jelly", "dog", "chicken", "salmon", "octopus", "eagle", "starfish", "centipede", "ladybug", "platypus", "shark", "cow", "frog", "croc"], children: [] }
            ]
        }
    },
    {
        id: "3d",
        title: { en: "3 Domains (Woese)", pt: "3 Domínios (Woese)" },
        startYear: 1990,
        endYear: 2040,
        description: {
            en: "Carl Woese's molecular classification replacing kingdoms at the highest level: Bacteria, Archaea, and Eukarya, based on rRNA genetics.",
            pt: "A classificação de nível molecular de Carl Woese, que substituiu os reinos nos níveis mais altos: Bacteria, Archaea e Eukarya. Baseada na genética do rRNA."
        },
        tree: {
            name: { en: "LUCA", pt: "LUCA" },
            rank: { en: "Last Universal Common Ancestor", pt: "Último Ancestral Comum Universal" },
            description: { en: "The three overarching domains of life, reflecting deep molecular evolutionary history.", pt: "Os três domínios abrangentes da vida, refletindo uma profunda história evolutiva em nível molecular." },
            imageQuery: "dna",
            species: [],
            children: [
                { name: { en: "Bacteria", pt: "Bacteria" }, rank: { en: "Domain", pt: "Domínio" }, description: { en: "True bacteria, widespread prokaryotes.", pt: "Bactérias verdadeiras, procariontes de ampla distribuição." }, imageQuery: "ecoli", species: ["ecoli"], children: [] },
                { name: { en: "Archaea", pt: "Archaea" }, rank: { en: "Domain", pt: "Domínio" }, description: { en: "Prokaryotes distinct from bacteria, often extremophiles.", pt: "Procariontes distintos das bactérias, sendo frequentemente extremófilos." }, imageQuery: "geyser", species: ["halo"], children: [] },
                {
                    name: { en: "Eukarya", pt: "Eukarya" }, rank: { en: "Domain", pt: "Domínio" }, description: { en: "Organisms with complex cells containing a nucleus.", pt: "Organismos com células complexas que possuem um núcleo verdadeiro." }, imageQuery: "jungle", species: [],
                    children: [
                        { name: { en: "Protists", pt: "Protistas" }, rank: { en: "Clades", pt: "Clados" }, description: { en: "Various eukaryotic lineages (polyphyletic).", pt: "Várias linhagens eucariontes (polifiléticos)." }, imageQuery: "algae", species: ["paramecium", "euglena", "chlamy"], children: [] },
                        { name: { en: "Fungi", pt: "Fungi" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Fungi.", pt: "Fungos." }, imageQuery: "fungi", species: ["yeast", "mushroom"], children: [] },
                        { name: { en: "Plantae", pt: "Plantae" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Plants.", pt: "Plantas." }, imageQuery: "tree", species: ["arabidopsis", "oak", "corn", "pine", "fern"], children: [] },
                        { name: { en: "Animalia", pt: "Animalia" }, rank: { en: "Kingdom", pt: "Reino" }, description: { en: "Animals.", pt: "Animais." }, imageQuery: "animal", species: ["human", "fly", "worm", "jelly", "dog", "chicken", "salmon", "octopus", "eagle", "starfish", "centipede", "ladybug", "platypus", "shark", "cow", "frog", "croc"], children: [] }
                    ]
                }
            ]
        }
    }
];

export { speciesDictionary, scientistsData, systemsData };
