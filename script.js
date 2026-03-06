// Data Models
const initialMasterData = [{ "id": 1, "name": "Peperomia", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 2, "name": "Fittonia", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 3, "name": "Episcia", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 4, "name": "Selaginella", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 5, "name": "Pilea", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 6, "name": "Adiantum", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 7, "name": "Chlorophytum", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 8, "name": "Plectranthus", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 9, "name": "Terrarium mosses", "category": "BSC Core and Complimentary", "rate": 15.0 }, { "id": 10, "name": "Spathiphyllum", "category": "BSC Core and Complimentary", "rate": 25.0 }, { "id": 11, "name": "Cactus", "category": "BSC Core and Complimentary", "rate": 25.0 }, { "id": 12, "name": "Ficus benjamina", "category": "BSC Core and Complimentary", "rate": 30.0 }, { "id": 13, "name": "Ficus benghalensis", "category": "BSC Core and Complimentary", "rate": 30.0 }, { "id": 14, "name": "Ficus religiosa", "category": "BSC Core and Complimentary", "rate": 30.0 }, { "id": 15, "name": "Root Nodules", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 16, "name": "Ficus root", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 17, "name": "Tinospora aerial root", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 18, "name": "Centella stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 19, "name": "Cephalandra stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 20, "name": "Cucurbita stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 21, "name": "Grass stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 22, "name": "Vernonia Stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 23, "name": "Eupatorium stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 24, "name": "Moringa stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 25, "name": "Boerhaavia stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 26, "name": "Bignonia stem", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 27, "name": "Colocasia root", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 28, "name": "Nerium leaf", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 29, "name": "Nymphaea petiole", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 30, "name": "Vanda root", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 31, "name": "Chlamydomonas", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 32, "name": "Volvox", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 33, "name": "Spirogyra", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 34, "name": "Oedogonium", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 35, "name": "Chara", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 36, "name": "Vaucheria", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 37, "name": "Pinnularia", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 38, "name": "Sargassum", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 39, "name": "Polysiphonia", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 40, "name": "Pythium", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 41, "name": "Albugo", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 42, "name": "Mucor", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 43, "name": "Peziza", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 44, "name": "Puccinia", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 45, "name": "Agaricus", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 46, "name": "Cercospora", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 47, "name": "Usnea", "category": "BSC Core and Complimentary", "rate": 10.0 }, { "id": 48, "name": "Citrus canker", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 49, "name": "Mahali disease of Arecanut", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 50, "name": "Blast of Paddy", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 51, "name": "Grey leaf spot of coconut", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 52, "name": "Mosaic disease of tapioca", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 53, "name": "Bunchy top of banana", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 54, "name": "Quick wilt of pepper", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 55, "name": "Rhizome rot of ginger", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 56, "name": "Coffee rust", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 57, "name": "Abnormal leaf fall of rubber", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 58, "name": "Root wilt of coconut", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 59, "name": "Nematode infection on banana", "category": "BSC Core and Complimentary", "rate": 6.0 }, { "id": 60, "name": "Parmelia", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 61, "name": "Eupatorium odoratissimus", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 62, "name": "Allamanda cathartica", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 63, "name": "Vinca rosea", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 64, "name": "Tabernamontana divericata", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 65, "name": "Thevetia nerifolia", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 66, "name": "Rauvolfia serpentina", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 67, "name": "Physalis minima", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 68, "name": "Thunbergia grandiflora", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 69, "name": "Ruellia prostrata", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 70, "name": "Barleria prionitis", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 71, "name": "Ecbolium linnaenanum", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 72, "name": "Anisomelos malabarica", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 73, "name": "Leucas aspera", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 74, "name": "Hyptis suaveolens", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 75, "name": "Ocimum sanctum", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 76, "name": "Euphorbia hirta", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 77, "name": "Euphorbia pulcherrima", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 78, "name": "Croton sparciflorus", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 79, "name": "Acalypha indica", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 80, "name": "Sansiveria roxnurghiana", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 81, "name": "Gloriosa superba", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 82, "name": "Dracaena surculosa", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 83, "name": "Oryza sativa", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 84, "name": "Bambusa bambos", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 85, "name": "Rauolfia serpentina", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 86, "name": "Justecea adathoda", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 87, "name": "Santalum album", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 88, "name": "Curcuma", "category": "BSC Core and Complimentary", "rate": 2.0 }, { "id": 89, "name": "Riccia", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 90, "name": "Marchantia", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 91, "name": "Anthoceros", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 92, "name": "Funaria", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 93, "name": "Cycas", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 94, "name": "Pinus", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 95, "name": "Gnetum", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 96, "name": "Psilotum", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 97, "name": "Selaginella", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 98, "name": "Equisetum", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 99, "name": "Pteris", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 100, "name": "Marselia", "category": "BSC Core and Complimentary", "rate": 3.0 }, { "id": 101, "name": "Annona reticulata", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 102, "name": "Annona squamosa", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 103, "name": "Artabotrys odoratissimus", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 104, "name": "Michelia champaka", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 105, "name": "Hibiscus rosa-sinensis", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 106, "name": "Sida acuta", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 107, "name": "Thespesia populnea", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 108, "name": "Abutilon indicum", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 109, "name": "Toddalia asiatica", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 110, "name": "Glycosmis pentaphylla", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 111, "name": "Aegle marmelos", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 112, "name": "Crotalaria pallida", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 113, "name": "Crotalaria verrucosa", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 114, "name": "Clitoria ternatea", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 115, "name": "Glyricidia maculata", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 116, "name": "Psidium guajava", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 117, "name": "Eucalyptus globulus", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 118, "name": "Callistemon lanceolatus", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 119, "name": "Sysygium jambos", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 120, "name": "Mukia scabrella", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 121, "name": "Cephalandra indica", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 122, "name": "Melothria madraspatana", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 123, "name": "Cucurbita maxima", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 124, "name": "Hamelia patens", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 125, "name": "Ixora coccinia", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 126, "name": "Chasalia curviflora", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 127, "name": "Tridax procumbens", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 128, "name": "Helianthus annus", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 129, "name": "Vernonia sineria", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 130, "name": "Solanum nigrum", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 131, "name": "Solanum torvum", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 132, "name": "Cestrum nocturnum", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 133, "name": "Datura metal", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 134, "name": "Crotalaria inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 135, "name": "Caesalpinia inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 136, "name": "Biophytum inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 137, "name": "Colocasia inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 138, "name": "Cocos nucifera inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 139, "name": "Achyranthus inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 140, "name": "Tridax  inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 141, "name": "Jasminum  inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 142, "name": "Heliotropium inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 143, "name": "Hamelia inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 144, "name": "Dorstenia inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 145, "name": "Ficus inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 146, "name": "Euphorbia inflorescence", "category": "BSC Core and Complimentary", "rate": 8.0 }, { "id": 147, "name": "Onion", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 148, "name": "Potato", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 149, "name": "Paddy", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 150, "name": "Wheat", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 151, "name": "Black gram", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 152, "name": "Green gram", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 153, "name": "Coconut", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 154, "name": "Gingelly", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 155, "name": "Cotton", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 156, "name": "Rubber", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 157, "name": "Pea", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 158, "name": "Coffee", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 159, "name": "Pepper", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 160, "name": "Cardamom", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 161, "name": "Clove", "category": "BSC Core and Complimentary", "rate": 5.0 }, { "id": 162, "name": "Pediastrum", "category": "MSC", "rate": 10.0 }, { "id": 163, "name": "Scenedesmus", "category": "MSC", "rate": 10.0 }, { "id": 164, "name": "Hydrodictyon", "category": "MSC", "rate": 10.0 }, { "id": 165, "name": "Ulva", "category": "MSC", "rate": 10.0 }, { "id": 166, "name": "Cladophora", "category": "MSC", "rate": 10.0 }, { "id": 167, "name": "Pithophora", "category": "MSC", "rate": 10.0 }, { "id": 168, "name": "Bulbochaeta", "category": "MSC", "rate": 10.0 }, { "id": 169, "name": "Cephaleuros", "category": "MSC", "rate": 10.0 }, { "id": 170, "name": "Draparnaldiopsis", "category": "MSC", "rate": 10.0 }, { "id": 171, "name": "Bryopsis", "category": "MSC", "rate": 10.0 }, { "id": 172, "name": "Codium", "category": "MSC", "rate": 10.0 }, { "id": 173, "name": "Caulerpa", "category": "MSC", "rate": 10.0 }, { "id": 174, "name": "Halimeda", "category": "MSC", "rate": 10.0 }, { "id": 175, "name": "Closterium", "category": "MSC", "rate": 10.0 }, { "id": 176, "name": "Cosmerium", "category": "MSC", "rate": 10.0 }, { "id": 177, "name": "Nitella", "category": "MSC", "rate": 10.0 }, { "id": 178, "name": "Botrydium", "category": "MSC", "rate": 10.0 }, { "id": 179, "name": "Biddulphia", "category": "MSC", "rate": 10.0 }, { "id": 180, "name": "Coscinodiscus", "category": "MSC", "rate": 10.0 }, { "id": 181, "name": "Cymbella", "category": "MSC", "rate": 10.0 }, { "id": 182, "name": "Ectocarpus", "category": "MSC", "rate": 10.0 }, { "id": 183, "name": "Dictyota", "category": "MSC", "rate": 10.0 }, { "id": 184, "name": "Padina", "category": "MSC", "rate": 10.0 }, { "id": 185, "name": "Tubinaria", "category": "MSC", "rate": 10.0 }, { "id": 186, "name": "Batrachospermum", "category": "MSC", "rate": 10.0 }, { "id": 187, "name": "Gracillaria", "category": "MSC", "rate": 10.0 }, { "id": 188, "name": "Champia", "category": "MSC", "rate": 10.0 }, { "id": 189, "name": "Asterella", "category": "MSC", "rate": 10.0 }, { "id": 190, "name": "Targionia", "category": "MSC", "rate": 10.0 }, { "id": 191, "name": "Cyathodium", "category": "MSC", "rate": 10.0 }, { "id": 192, "name": "Lunularia", "category": "MSC", "rate": 10.0 }, { "id": 193, "name": "Pallavicinia", "category": "MSC", "rate": 10.0 }, { "id": 194, "name": "Deumortiera", "category": "MSC", "rate": 10.0 }, { "id": 195, "name": "Porella", "category": "MSC", "rate": 10.0 }, { "id": 196, "name": "Anthoceros", "category": "MSC", "rate": 10.0 }, { "id": 197, "name": "Sphagnum", "category": "MSC", "rate": 10.0 }, { "id": 198, "name": "Bryum", "category": "MSC", "rate": 10.0 }, { "id": 199, "name": "Lycopodium", "category": "MSC", "rate": 10.0 }, { "id": 200, "name": "Ophioglossum", "category": "MSC", "rate": 10.0 }, { "id": 201, "name": "Angiopteris", "category": "MSC", "rate": 10.0 }, { "id": 202, "name": "Osmunda", "category": "MSC", "rate": 10.0 }, { "id": 203, "name": "Lygodium", "category": "MSC", "rate": 10.0 }, { "id": 204, "name": "Ceratopteris", "category": "MSC", "rate": 10.0 }, { "id": 205, "name": "Pteris", "category": "MSC", "rate": 10.0 }, { "id": 206, "name": "Asplenium", "category": "MSC", "rate": 10.0 }, { "id": 207, "name": "Mahaali of Arecanut", "category": "MSC", "rate": 10.0 }, { "id": 208, "name": "Powdery Mildey of Rubber", "category": "MSC", "rate": 10.0 }, { "id": 209, "name": "Abnormal Leaf fall of Rubber", "category": "MSC", "rate": 10.0 }, { "id": 210, "name": "Tika disease of Ground nut", "category": "MSC", "rate": 10.0 }, { "id": 211, "name": "Late Blight of Potato", "category": "MSC", "rate": 10.0 }, { "id": 212, "name": "Blister Blight of Tea", "category": "MSC", "rate": 10.0 }, { "id": 213, "name": "Citrus canker", "category": "MSC", "rate": 10.0 }, { "id": 214, "name": "Wheat Rust", "category": "MSC", "rate": 10.0 }, { "id": 215, "name": "Grey Leafspot of Coconut", "category": "MSC", "rate": 10.0 }, { "id": 216, "name": "Phytophthora Foot rot of Pepper", "category": "MSC", "rate": 10.0 }, { "id": 217, "name": "Rhizome Rot of Ginger", "category": "MSC", "rate": 10.0 }, { "id": 218, "name": "Rhizome Rot of Turmeric", "category": "MSC", "rate": 10.0 }, { "id": 219, "name": "Viscum", "category": "MSC", "rate": 10.0 }, { "id": 220, "name": "Dendrophthoe", "category": "MSC", "rate": 10.0 }, { "id": 221, "name": "Aristolochia", "category": "MSC", "rate": 10.0 }, { "id": 222, "name": "Strychnos", "category": "MSC", "rate": 10.0 }, { "id": 223, "name": "Achyranthus", "category": "MSC", "rate": 10.0 }, { "id": 224, "name": "Mirabilis jalapa", "category": "MSC", "rate": 10.0 }, { "id": 225, "name": "Boerhaavia", "category": "MSC", "rate": 10.0 }, { "id": 226, "name": "Bignonia", "category": "MSC", "rate": 10.0 }, { "id": 227, "name": "Agave", "category": "MSC", "rate": 10.0 }, { "id": 228, "name": "Aralia", "category": "MSC", "rate": 10.0 }, { "id": 229, "name": "Hibiscus", "category": "MSC", "rate": 10.0 }, { "id": 230, "name": "Polyalthia", "category": "MSC", "rate": 10.0 }, { "id": 231, "name": "Calophyllum", "category": "MSC", "rate": 10.0 }, { "id": 232, "name": "Polygonum", "category": "MSC", "rate": 10.0 }, { "id": 233, "name": "Datura anther", "category": "MSC", "rate": 10.0 }, { "id": 234, "name": "Rhoeo Flower Buds", "category": "MSC", "rate": 10.0 }, { "id": 235, "name": "Dianthus caryophyllatus", "category": "MSC", "rate": 10.0 }, { "id": 236, "name": "Silene gallica", "category": "MSC", "rate": 10.0 }, { "id": 237, "name": "Calophyllum inophyllum", "category": "MSC", "rate": 10.0 }, { "id": 238, "name": "Garcinia gummigutta", "category": "MSC", "rate": 10.0 }, { "id": 239, "name": "Sterculia foetida", "category": "MSC", "rate": 10.0 }, { "id": 240, "name": "Melia azadirach", "category": "MSC", "rate": 10.0 }, { "id": 241, "name": "Azadirachta indica", "category": "MSC", "rate": 10.0 }, { "id": 242, "name": "Toona ciliata", "category": "MSC", "rate": 10.0 }, { "id": 243, "name": "Sapindus laurifolius", "category": "MSC", "rate": 10.0 }, { "id": 244, "name": "Cardiospermum halicacabum", "category": "MSC", "rate": 10.0 }, { "id": 245, "name": "Schleicheira oleosa", "category": "MSC", "rate": 10.0 }, { "id": 246, "name": "Rosa indica", "category": "MSC", "rate": 10.0 }, { "id": 247, "name": "Rubus ellipticus", "category": "MSC", "rate": 10.0 }, { "id": 248, "name": "Memycylon edule", "category": "MSC", "rate": 10.0 }, { "id": 249, "name": "Osbeckia truncata", "category": "MSC", "rate": 10.0 }, { "id": 250, "name": "Melastoma wightii", "category": "MSC", "rate": 10.0 }, { "id": 251, "name": "Carallia brachiata", "category": "MSC", "rate": 10.0 }, { "id": 252, "name": "Rizophora mangle", "category": "MSC", "rate": 10.0 }, { "id": 253, "name": "Mollugo pentaphylla", "category": "MSC", "rate": 10.0 }, { "id": 254, "name": "Trianthema portulacastrum", "category": "MSC", "rate": 10.0 }, { "id": 255, "name": "Mollugo oppositifolia", "category": "MSC", "rate": 10.0 }, { "id": 256, "name": "Rubia cordifolia", "category": "MSC", "rate": 10.0 }, { "id": 257, "name": "Oldenlandia corymbosa", "category": "MSC", "rate": 10.0 }, { "id": 258, "name": "Chasalia curviflora", "category": "MSC", "rate": 10.0 }, { "id": 259, "name": "Achras sapota", "category": "MSC", "rate": 10.0 }, { "id": 260, "name": "Chrysophyllum cainitto", "category": "MSC", "rate": 10.0 }, { "id": 261, "name": "Madhuca latifolia", "category": "MSC", "rate": 10.0 }, { "id": 262, "name": "Limnanthemum christatum", "category": "MSC", "rate": 10.0 }, { "id": 263, "name": "Canscora wightii", "category": "MSC", "rate": 10.0 }, { "id": 264, "name": "Enicostremma littorale", "category": "MSC", "rate": 10.0 }, { "id": 265, "name": "Heliotropium indicum", "category": "MSC", "rate": 10.0 }, { "id": 266, "name": "Trichodesma indica", "category": "MSC", "rate": 10.0 }, { "id": 267, "name": "Cynoglossum furcatum", "category": "MSC", "rate": 10.0 }, { "id": 268, "name": "Lindenbergia spp", "category": "MSC", "rate": 10.0 }, { "id": 269, "name": "Limnophila Heterophila", "category": "MSC", "rate": 10.0 }, { "id": 270, "name": "Torrenia sp", "category": "MSC", "rate": 10.0 }, { "id": 271, "name": "Pedalium murex", "category": "MSC", "rate": 10.0 }, { "id": 272, "name": "Martynia annua", "category": "MSC", "rate": 10.0 }, { "id": 273, "name": "Sesamum indicum", "category": "MSC", "rate": 10.0 }, { "id": 274, "name": "Vitex negundo", "category": "MSC", "rate": 10.0 }, { "id": 275, "name": "Homskioldia speciosa", "category": "MSC", "rate": 10.0 }, { "id": 276, "name": "Premna latifolia", "category": "MSC", "rate": 10.0 }, { "id": 277, "name": "Mirabilis jalapa", "category": "MSC", "rate": 10.0 }, { "id": 278, "name": "Boerhavvia diffusa", "category": "MSC", "rate": 10.0 }, { "id": 279, "name": "Euphorbia hirta", "category": "MSC", "rate": 10.0 }, { "id": 280, "name": "Phyllanthus niruri", "category": "MSC", "rate": 10.0 }, { "id": 281, "name": "Acalypha indica", "category": "MSC", "rate": 10.0 }, { "id": 282, "name": "Blechnum", "category": "MSC", "rate": 20.0 }, { "id": 283, "name": "Cyathea", "category": "MSC", "rate": 20.0 }, { "id": 284, "name": "Gleichenia", "category": "MSC", "rate": 20.0 }, { "id": 285, "name": "Trichomenes", "category": "MSC", "rate": 20.0 }, { "id": 286, "name": "Salvinia", "category": "MSC", "rate": 20.0 }, { "id": 287, "name": "Azolla", "category": "MSC", "rate": 20.0 }, { "id": 288, "name": "Zamea", "category": "MSC", "rate": 20.0 }, { "id": 289, "name": "Ginkgo", "category": "MSC", "rate": 20.0 }, { "id": 290, "name": "Pinus", "category": "MSC", "rate": 20.0 }, { "id": 291, "name": "Cryptomeria", "category": "MSC", "rate": 20.0 }, { "id": 292, "name": "Cuppressus", "category": "MSC", "rate": 20.0 }, { "id": 293, "name": "Auraucaria", "category": "MSC", "rate": 20.0 }, { "id": 294, "name": "Agathis", "category": "MSC", "rate": 20.0 }, { "id": 295, "name": "Podocarpus", "category": "MSC", "rate": 20.0 }, { "id": 296, "name": "Cephalotaxus", "category": "MSC", "rate": 20.0 }, { "id": 297, "name": "Epehdra", "category": "MSC", "rate": 20.0 }, { "id": 298, "name": "Gnetum", "category": "MSC", "rate": 20.0 }, { "id": 299, "name": "Stemonitis", "category": "MSC", "rate": 20.0 }, { "id": 300, "name": "Saprolegnea", "category": "MSC", "rate": 20.0 }, { "id": 301, "name": "Phytophthora", "category": "MSC", "rate": 20.0 }, { "id": 302, "name": "Albugo", "category": "MSC", "rate": 20.0 }, { "id": 303, "name": "Mucor", "category": "MSC", "rate": 20.0 }, { "id": 304, "name": "Pilabolus", "category": "MSC", "rate": 20.0 }, { "id": 305, "name": "Sacharomyces", "category": "MSC", "rate": 20.0 }, { "id": 306, "name": "Xylaria", "category": "MSC", "rate": 20.0 }, { "id": 307, "name": "Chaetomium", "category": "MSC", "rate": 20.0 }, { "id": 308, "name": "Peziza", "category": "MSC", "rate": 20.0 }, { "id": 309, "name": "Puccinia", "category": "MSC", "rate": 20.0 }, { "id": 310, "name": "Auricularia", "category": "MSC", "rate": 20.0 }, { "id": 311, "name": "Polyporus", "category": "MSC", "rate": 20.0 }, { "id": 312, "name": "Ganoderma", "category": "MSC", "rate": 20.0 }, { "id": 313, "name": "Lycoperdon", "category": "MSC", "rate": 20.0 }, { "id": 314, "name": "Dictyophora", "category": "MSC", "rate": 20.0 }, { "id": 315, "name": "Geastrum", "category": "MSC", "rate": 20.0 }, { "id": 316, "name": "Cyathus", "category": "MSC", "rate": 20.0 }, { "id": 317, "name": "Asperigillus", "category": "MSC", "rate": 20.0 }, { "id": 318, "name": "Curvularia", "category": "MSC", "rate": 20.0 }, { "id": 319, "name": "Alternaria", "category": "MSC", "rate": 20.0 }, { "id": 320, "name": "Fusarium", "category": "MSC", "rate": 20.0 }, { "id": 321, "name": "Colletotrichum", "category": "MSC", "rate": 20.0 }, { "id": 322, "name": "Parmelia", "category": "MSC", "rate": 20.0 }, { "id": 323, "name": "Usnea", "category": "MSC", "rate": 20.0 }, { "id": 324, "name": "Bunchytop of Banana", "category": "MSC", "rate": 10.0 }, { "id": 325, "name": "Bacterial Blight of Paddy", "category": "MSC", "rate": 10.0 }, { "id": 326, "name": "Bud rot of coconut", "category": "MSC", "rate": 10.0 }, { "id": 327, "name": "Onion", "category": "MSC", "rate": 10.0 }, { "id": 328, "name": "Chlorophytum", "category": "MSC", "rate": 10.0 }, { "id": 329, "name": "Zea mays", "category": "MSC", "rate": 10.0 }, { "id": 330, "name": "Crotalaria", "category": "MSC", "rate": 10.0 }, { "id": 331, "name": "Cyanotis", "category": "MSC", "rate": 10.0 }, { "id": 332, "name": "Oryza sativa", "category": "MSC", "rate": 10.0 }, { "id": 333, "name": "Cashew", "category": "MSC", "rate": 10.0 }, { "id": 334, "name": "Pulses", "category": "MSC", "rate": 10.0 }, { "id": 335, "name": "Solanum capsicum", "category": "MSC", "rate": 10.0 }, { "id": 336, "name": "Beet root", "category": "MSC", "rate": 10.0 }, { "id": 337, "name": "Pisum sativum", "category": "MSC", "rate": 10.0 }, { "id": 338, "name": "Phaseolus aureus", "category": "MSC", "rate": 10.0 }, { "id": 339, "name": "Michelia champaka", "category": "MSC", "rate": 10.0 }, { "id": 340, "name": "Nelumbo nucifera", "category": "MSC", "rate": 10.0 }, { "id": 341, "name": "Michelia champaka", "category": "MSC", "rate": 10.0 }, { "id": 342, "name": "Michelia Nilagirica", "category": "MSC", "rate": 10.0 }, { "id": 343, "name": "Magnolia grandiflora", "category": "MSC", "rate": 10.0 }, { "id": 344, "name": "Ranunculus wallichianus", "category": "MSC", "rate": 10.0 }, { "id": 345, "name": "Naravelia zeylanica", "category": "MSC", "rate": 10.0 }, { "id": 346, "name": "Clematis recta", "category": "MSC", "rate": 10.0 }, { "id": 347, "name": "Tinospora cordifolia", "category": "MSC", "rate": 10.0 }, { "id": 348, "name": "Cyclea peltata", "category": "MSC", "rate": 10.0 }, { "id": 349, "name": "Cissampelos pariera", "category": "MSC", "rate": 10.0 }, { "id": 350, "name": "Numphaea stellata", "category": "MSC", "rate": 10.0 }, { "id": 351, "name": "Nelumbo nucifera", "category": "MSC", "rate": 10.0 }, { "id": 352, "name": "Cabomba sp", "category": "MSC", "rate": 10.0 }, { "id": 353, "name": "Polygala chinensis", "category": "MSC", "rate": 10.0 }, { "id": 354, "name": "Polygala elongata", "category": "MSC", "rate": 10.0 }, { "id": 355, "name": "Urtica dioica", "category": "MSC", "rate": 10.0 }, { "id": 356, "name": "Pauzolzia paucinerva", "category": "MSC", "rate": 10.0 }, { "id": 357, "name": "Casuarina equisetifolia", "category": "MSC", "rate": 10.0 }, { "id": 358, "name": "Spathoglotis plicata", "category": "MSC", "rate": 10.0 }, { "id": 359, "name": "Habenaria spp", "category": "MSC", "rate": 10.0 }, { "id": 360, "name": "Zingibe officinale", "category": "MSC", "rate": 10.0 }, { "id": 361, "name": "Costrus speciosus", "category": "MSC", "rate": 10.0 }, { "id": 362, "name": "Hedychium coronarium", "category": "MSC", "rate": 10.0 }, { "id": 363, "name": "Hipoastrum equiasterae", "category": "MSC", "rate": 10.0 }, { "id": 364, "name": "Crinum sativum", "category": "MSC", "rate": 10.0 }, { "id": 365, "name": "Commelina benghalensis", "category": "MSC", "rate": 10.0 }, { "id": 366, "name": "Cynotis leschnaoultii", "category": "MSC", "rate": 10.0 }, { "id": 367, "name": "Arum maculatum", "category": "MSC", "rate": 10.0 }, { "id": 368, "name": "Pothos spp", "category": "MSC", "rate": 10.0 }, { "id": 369, "name": "Cyperus rotundus", "category": "MSC", "rate": 10.0 }, { "id": 370, "name": "Kyllingia spp", "category": "MSC", "rate": 10.0 }, { "id": 371, "name": "Oryza sativa", "category": "MSC", "rate": 10.0 }, { "id": 372, "name": "Bambusa bambos", "category": "MSC", "rate": 10.0 }, { "id": 373, "name": "Brassica juncea", "category": "MSC", "rate": 10.0 }, { "id": 374, "name": "Cardamine africana", "category": "MSC", "rate": 10.0 }, { "id": 375, "name": "Shorea robusta", "category": "MSC", "rate": 10.0 }, { "id": 376, "name": "Dipterocarpus indicus", "category": "MSC", "rate": 10.0 }, { "id": 377, "name": "Grewia tiliaefolia", "category": "MSC", "rate": 10.0 }, { "id": 378, "name": "Muntingia calabura", "category": "MSC", "rate": 10.0 }, { "id": 379, "name": "Galphemia spp", "category": "MSC", "rate": 10.0 }, { "id": 380, "name": "Celastrus paniculatus", "category": "MSC", "rate": 10.0 }, { "id": 381, "name": "Zizyphus jujuba", "category": "MSC", "rate": 10.0 }, { "id": 382, "name": "Ziziphus mauritiana", "category": "MSC", "rate": 10.0 }, { "id": 383, "name": "Moringa oleifera", "category": "MSC", "rate": 10.0 }, { "id": 384, "name": "Drosera peltata", "category": "MSC", "rate": 10.0 }, { "id": 385, "name": "Begonia spp", "category": "MSC", "rate": 10.0 }, { "id": 386, "name": "Plumbago zeylanica", "category": "MSC", "rate": 10.0 }, { "id": 387, "name": "Erythroxylon", "category": "MSC", "rate": 10.0 }, { "id": 388, "name": "Jasminum sambac", "category": "MSC", "rate": 10.0 }, { "id": 389, "name": "Utricularia flexuosa", "category": "MSC", "rate": 10.0 }, { "id": 390, "name": "Aristolochia indica", "category": "MSC", "rate": 10.0 }, { "id": 391, "name": "Piper nigrum", "category": "MSC", "rate": 10.0 }, { "id": 392, "name": "Pepromia pellucida", "category": "MSC", "rate": 10.0 }, { "id": 393, "name": "Loranthus indicum", "category": "MSC", "rate": 10.0 }, { "id": 394, "name": "Viscum spp", "category": "MSC", "rate": 10.0 }, { "id": 395, "name": "Dioscorea alata", "category": "MSC", "rate": 10.0 }, { "id": 396, "name": "Pandanus spp", "category": "MSC", "rate": 10.0 }, { "id": 397, "name": "Typha angustifolia", "category": "MSC", "rate": 10.0 }, { "id": 398, "name": "Eriocaulon xeranthemum", "category": "MSC", "rate": 10.0 }];

let masterList = JSON.parse(localStorage.getItem('botanicalMasterList')) || initialMasterData;
let proposalItems = [];

function saveMasterList() {
    localStorage.setItem('botanicalMasterList', JSON.stringify(masterList));
}
// DOM Elements
const navItems = document.querySelectorAll('.sidebar li');
const views = document.querySelectorAll('.view');
const tableMasterBody = document.querySelector('#table-master tbody');
const tableProposalBody = document.querySelector('#table-proposal tbody');
const selectProposalItem = document.getElementById('select-item-proposal');
const navQuotes = document.getElementById('nav-quotes');

// Modals
const modalAdd = document.getElementById('modal-add-item');

// Initialization
function init() {
    renderMasterList();
    loadSettingsToUI();
    loadSettingsToUI();
    renderProposalOptions();
    renderProposalList();
    setupEventListeners();
}

// Navigation
function switchView(viewId) {
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-view="${viewId}"]`).classList.add('active');

    views.forEach(view => view.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
}

// Render Master List
function renderMasterList() {
    tableMasterBody.innerHTML = '';
    masterList.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td><span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-size: 0.8em; color: #cbd5e1">${item.category}</span></td>
            <td>₹${item.rate.toLocaleString('en-IN')}</td>
            <td style="display:flex; gap:10px;"><button class="btn secondary" onclick="editMasterItem(${item.id})" style="padding: 5px 10px; font-size: 0.8em; border: 1px solid #94a3b8;">Edit</button><button class="btn danger" onclick="deleteMasterItem(${item.id})" style="padding: 5px 10px; font-size: 0.8em;">Delete</button></td>
        `;
        tableMasterBody.appendChild(tr);
    });
    renderProposalOptions();
}

// Delete Master Item

window.editMasterItem = function (id) {
    const item = masterList.find(i => i.id === id);
    if (!item) return;
    document.getElementById('modal-title').innerText = 'Edit Master Item';
    document.getElementById('input-item-id').value = item.id;
    document.getElementById('input-item-name').value = item.name;
    document.getElementById('input-item-category').value = item.category;
    document.getElementById('input-item-rate').value = item.rate;
    document.getElementById('modal-add-item').classList.remove('hidden');
};

window.deleteMasterItem = function (id) {
    if (confirm('Are you sure you want to delete this item from the Master List?')) {
        masterList = masterList.filter(item => item.id !== id); saveMasterList();
        // Also remove from proposal if it was there
        proposalItems = proposalItems.filter(item => item.item_id !== id);
        renderMasterList();
        renderProposalList();
    }
};

// Render options for adding to proposal
function renderProposalOptions() {
    selectProposalItem.innerHTML = '';
    masterList.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = `${item.name} (Est. ₹${item.rate})`;
        selectProposalItem.appendChild(option);
    });
}

// Render Current Proposal
function renderProposalList() {
    tableProposalBody.innerHTML = '';

    if (proposalItems.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="4" style="text-align:center; color: #94a3b8; padding: 30px;">Your proposal is empty. Add items from the pane above.</td>`;
        tableProposalBody.appendChild(tr);
    } else {
        proposalItems.forEach(pItem => {
            const masterItem = masterList.find(m => m.id === pItem.item_id);
            if (!masterItem) return;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${masterItem.name}</strong></td>
                <td>₹${masterItem.rate.toLocaleString('en-IN')}</td>
                <td><span style="background: var(--primary-color); padding: 2px 8px; border-radius: 12px; color: white;">${pItem.qty}</span></td>
                <td><button class="btn danger" onclick="removeProposalItem(${pItem.item_id})" style="padding: 5px 10px; font-size: 0.8em;">Remove</button></td>
            `;
            tableProposalBody.appendChild(tr);
        });
    }

    if (proposalItems.length > 0) {
        navQuotes.classList.remove('disabled');
    } else {
        navQuotes.classList.add('disabled');
    }
}

window.removeProposalItem = function (id) {
    proposalItems = proposalItems.filter(item => item.item_id !== id);
    renderProposalList();
};

// Event Listeners
function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('disabled')) return;
            switchView(item.dataset.view);
        });
    });

    // Add Master Item Modal
    document.getElementById('btn-add-item').addEventListener('click', () => {
        document.getElementById('modal-title').innerText = 'Add Master Item';
        document.getElementById('input-item-id').value = '';
        document.getElementById('input-item-name').value = '';
        document.getElementById('input-item-category').value = 'Specimen';
        document.getElementById('input-item-rate').value = '';
        modalAdd.classList.remove('hidden');
    });

    document.getElementById('btn-cancel-item').addEventListener('click', () => {
        modalAdd.classList.add('hidden');
    });

    document.getElementById('btn-save-item').addEventListener('click', () => {
        const name = document.getElementById('input-item-name').value.trim();
        const cat = document.getElementById('input-item-category').value.trim();
        const rate = parseFloat(document.getElementById('input-item-rate').value);

        if (name && cat && !isNaN(rate) && rate >= 0) {
            const existingId = document.getElementById('input-item-id').value;
            if (existingId) {
                const idx = masterList.findIndex(i => i.id === parseInt(existingId));
                if (idx > -1) {
                    masterList[idx] = { ...masterList[idx], name: name, category: cat, rate: rate };
                }
            } else {
                const newId = masterList.length > 0 ? Math.max(...masterList.map(i => i.id)) + 1 : 1;
                masterList.push({ id: newId, name: name, category: cat, rate: rate });
            }
            saveMasterList();
            renderMasterList();
            modalAdd.classList.add('hidden');

            // clear inputs
            document.getElementById('input-item-name').value = '';
            document.getElementById('input-item-category').value = '';
            document.getElementById('input-item-rate').value = '';
        } else {
            alert('Please fill all fields with valid data.');
        }
    });

    // Add to Proposal
    document.getElementById('btn-add-all-proposal').addEventListener('click', () => {
        masterList.forEach(m => {
            let addQty = 1;
            const cat = String(m.category).toLowerCase();
            if (cat.includes('bsc')) { addQty = parseInt(quoteSettings.bsc) || 42; }
            else if (cat.includes('msc')) { addQty = parseInt(quoteSettings.msc) || 18; }

            const existing = proposalItems.find(p => p.item_id === m.id);
            if (existing) { existing.qty += addQty; }
            else { proposalItems.push({ item_id: m.id, qty: addQty }); }
        });
        renderProposalList();
        alert('Added all master items to the proposal!');
    });

    document.getElementById('btn-add-to-proposal').addEventListener('click', () => {
        const itemSelect = document.getElementById('select-item-proposal');
        const qtyInput = document.getElementById('input-qty-proposal').value;
        const itemId = parseInt(itemSelect.value);
        if (isNaN(itemId)) { alert('Please select an item'); return; }

        let qty = parseInt(qtyInput);
        const m = masterList.find(i => i.id === itemId);

        if (isNaN(qty) || qty < 1) {
            qty = 1; // Default
            if (m && m.category) {
                const cat = String(m.category).toLowerCase();
                if (cat.includes('bsc')) { qty = parseInt(quoteSettings.bsc) || 42; }
                else if (cat.includes('msc')) { qty = parseInt(quoteSettings.msc) || 18; }
            }
        }

        const existing = proposalItems.find(p => p.item_id === itemId);
        if (existing) { existing.qty += qty; }
        else { proposalItems.push({ item_id: itemId, qty: qty }); }

        renderProposalList();
        document.getElementById('input-qty-proposal').value = '';
    });

    // Generate Quotes
    document.getElementById('btn-generate').addEventListener('click', () => {
        if (proposalItems.length === 0) {
            alert("Please add items to your proposal first.");
            return;
        }
        generateQuotes();
        switchView('quotes');
    });
}


const defaultSettings = {
    v1: { name: "EcoBotany Supplies Ltd.", addr: "24 Greenway Road, Kochi, Kerala", percent: 0, ref: "EBS" },
    v2: { name: "Kerala Scientific & Lab Equipments", addr: "Industrial Estate, Palakkad, Kerala", percent: 5, ref: "KSL" },
    v3: { name: "Natura Research Materials", addr: "BioPark Building, Trivandrum", percent: 10, ref: "NRM" }
};
let quoteSettings = JSON.parse(localStorage.getItem('botanicalQuoteSettings')) || defaultSettings;

function loadSettingsToUI() {
    document.getElementById('cfg-bsc-count').value = quoteSettings.bsc || 42;
    document.getElementById('cfg-msc-count').value = quoteSettings.msc || 18;
    document.getElementById('cfg-v1-name').value = quoteSettings.v1.name;
    document.getElementById('cfg-v1-addr').value = quoteSettings.v1.addr;
    document.getElementById('cfg-v1-var').value = quoteSettings.v1.percent;
    document.getElementById('cfg-v2-name').value = quoteSettings.v2.name;
    document.getElementById('cfg-v2-addr').value = quoteSettings.v2.addr;
    document.getElementById('cfg-v2-var').value = quoteSettings.v2.percent;
    document.getElementById('cfg-v3-name').value = quoteSettings.v3.name;
    document.getElementById('cfg-v3-addr').value = quoteSettings.v3.addr;
    document.getElementById('cfg-v3-var').value = quoteSettings.v3.percent;
}

document.getElementById('btn-save-settings').addEventListener('click', () => {
    quoteSettings = {
        bsc: parseInt(document.getElementById('cfg-bsc-count').value) || 42,
        msc: parseInt(document.getElementById('cfg-msc-count').value) || 18,
        v1: {
            name: document.getElementById('cfg-v1-name').value.trim() || defaultSettings.v1.name,
            addr: document.getElementById('cfg-v1-addr').value.trim() || defaultSettings.v1.addr,
            percent: parseFloat(document.getElementById('cfg-v1-var').value) || 0,
            ref: quoteSettings.v1.ref
        },
        v2: {
            name: document.getElementById('cfg-v2-name').value.trim() || defaultSettings.v2.name,
            addr: document.getElementById('cfg-v2-addr').value.trim() || defaultSettings.v2.addr,
            percent: parseFloat(document.getElementById('cfg-v2-var').value) || 0,
            ref: quoteSettings.v2.ref
        },
        v3: {
            name: document.getElementById('cfg-v3-name').value.trim() || defaultSettings.v3.name,
            addr: document.getElementById('cfg-v3-addr').value.trim() || defaultSettings.v3.addr,
            percent: parseFloat(document.getElementById('cfg-v3-var').value) || 0,
            ref: quoteSettings.v3.ref
        }
    };
    localStorage.setItem('botanicalQuoteSettings', JSON.stringify(quoteSettings));
    alert('Quote settings saved!');
});





function generateQuotes() {
    // Determine 3 suppliers and their random rate variance per generation
    // Supplier 1: Might be slightly cheaper or exact
    // Supplier 2: Might be slightly more expensive
    // Supplier 3: Wildcard
    const suppliers = [
        { name: quoteSettings.v1.name, address: quoteSettings.v1.addr, styleId: "quote-1", variance: () => (1 + (quoteSettings.v1.percent / 100)), dateRef: quoteSettings.v1.ref },
        { name: quoteSettings.v2.name, address: quoteSettings.v2.addr, styleId: "quote-2", variance: () => (1 + (quoteSettings.v2.percent / 100)), dateRef: quoteSettings.v2.ref },
        { name: quoteSettings.v3.name, address: quoteSettings.v3.addr, styleId: "quote-3", variance: () => (1 + (quoteSettings.v3.percent / 100)), dateRef: quoteSettings.v3.ref }
    ];

    const generateTableRows = (supplierVariance) => {
        let rowsHtml = '';
        let total = 0;
        let index = 1;

        proposalItems.forEach(pItem => {
            const master = masterList.find(m => m.id === pItem.item_id);
            if (!master) return;

            // Generate a 'different rate' based on variance and round it up to nearest whole number
            let specificRate = Math.ceil(master.rate * supplierVariance());
            const amount = specificRate * pItem.qty;
            total += amount;

            rowsHtml += `
                <tr>
                    <td style="text-align:center">${index++}</td>
                    <td>${master.name}</td>
                    <td style="text-align:right">₹${specificRate.toLocaleString('en-IN')}</td>
                    <td style="text-align:center">${pItem.qty}</td>
                    <td style="text-align:right">₹${amount.toLocaleString('en-IN')}</td>
                </tr>
            `;
        });
        return { rowsHtml, total };
    };

    const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    suppliers.forEach((supplier, idx) => {
        const { rowsHtml, total } = generateTableRows(supplier.variance);
        const quoteDiv = document.getElementById(supplier.styleId);

        let headerHtml = "";

        if (supplier.styleId === "quote-3") {
            headerHtml = `
                <div class="q-header">
                    <div class="title-row">
                        <h2>${supplier.name}</h2>
                    </div>
                    <p style="margin:0; font-size: 0.9em; color:#475569;">${supplier.address}</p>
                    <div style="display:flex; justify-content: space-between; margin-top: 15px;">
                        <span><strong>Ref:</strong> ${supplier.dateRef}-2024-${Math.floor(Math.random() * 1000)}</span>
                        <span><strong>Date:</strong> ${today}</span>
                    </div>
                </div>
            `;
        } else {
            headerHtml = `
                <div class="q-header">
                    <h2>${supplier.name}</h2>
                     <p style="margin:0; font-size: 0.9em; color:#475569;">${supplier.address}</p>
                    <div style="display:flex; justify-content: space-between; margin-top: 15px;">
                        <span><strong>Quotation Ref:</strong> ${supplier.dateRef}-2024-${Math.floor(Math.random() * 1000)}</span>
                        <span><strong>Date:</strong> ${today}</span>
                    </div>
                </div>
            `;
        }

        quoteDiv.innerHTML = `
            ${headerHtml}
            <div style="margin-top: 20px; line-height: 1.6;">
                <p><strong>To:</strong><br>The Principal / Head of Department,<br>PG and Research Department of Botany,<br>Government Victoria College, Palakkad.</p>
                <p><strong>Subject:</strong> Quotation for Botanical Specimens and Laboratory Infrastructure</p>
                <p>Dear Sir/Madam,<br>As per your requirement, we are pleased to submit our best quote for the following items:</p>
            </div>
            
            <table class="quote-table">
                <thead>
                    <tr>
                        <th width="5%">Sl.No</th>
                        <th width="50%">Item Description</th>
                        <th width="15%">Unit Rate (₹)</th>
                        <th width="10%">Qty</th>
                        <th width="20%">Amount (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
            
            <div class="quote-total">
                Grand Total: ₹${total.toLocaleString('en-IN')}
            </div>
            
            <div style="margin-top: 60px; display:flex; justify-content: space-between;">
                <div>
                   <p style="font-size: 0.8em; color: #64748b;">Terms & Conditions:<br>1. Prices are inclusive of all taxes.<br>2. Validity: 30 days.</p>
                </div>
                <div style="text-align: center;">
                    <br><br>
                    <p style="margin: 0; text-decoration: underline;">Authorized Signatory</p>
                    <p style="margin: 0; font-size: 0.8em; font-weight: bold; margin-top: 5px;">${supplier.name}</p>
                </div>
            </div>
        `;
    });
}

// Start
init();
