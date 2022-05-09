import { OsmTagToNameMapping } from './osmTagToNameMappingType';

export const osmTagToNameMapping: OsmTagToNameMapping = {
  aeroway: {
    aerodrome: 'Aereoporto',
  },
  aerialway: 'Via aerea, ascensore',
  amenity: {
    '*': '{}',
    animal_breeding: 'Allevamento',
    animal_shelter: 'Rifugio per animali',
    arts_centre: 'Centro artistico',
    atm: 'Bancomat',
    bank: 'Banca',
    bar: 'Bar',
    bbq: 'Griglia',
    bench: 'Panchina',
    bicycle_parking: 'Parcheggio bici',
    bicycle_rental: 'Noleggio bici',
    bicycle_repair_station: 'Meccanico bici',
    biergarten: 'Birreria',
    brothel: 'Bordello',
    bureau_de_change: 'Cambio valuta',
    bus_station: 'Stazione autobus',
    cafe: 'Caffè',
    car_rental: 'Noleggio auto',
    car_wash: 'Lavaggio auto',
    casino: 'Casinò',
    charging_station: 'Stazione di ricarica',
    childcare: 'Assistenza infantile',
    cinema: 'Cinema',
    clinic: 'Clinica',
    clock: 'Orologio',
    college: 'College',
    community_centre: 'Centro comunitario',
    compressed_air: 'Aria compressa',
    courthouse: 'Tribunale',
    dentist: 'Dentista',
    device_charging_station: 'Stazione ricarica dispositivi',
    doctors: 'Ambulatorio medico',
    dressing_room: 'Spogliatoio',
    drinking_water: 'Acqua potabile',
    driving_school: 'Scuola guida',
    embassy: 'Ambasciata',
    events_venue: 'Luogo per eventi',
    fast_food: 'Fast food',
    feeding_place: 'Mangiatoia',
    ferry_terminal: 'Terminal traghetti',
    fire_station: 'Caserma Pompieri',
    food_court: 'Ristoro',
    fountain: 'Fontana',
    fuel: 'Stazione Gas',
    funeral_hall: 'Casa del commiato',
    gambling: 'Gioco azzardo',
    game_feeding: 'Gioco alimentazione',
    grave_yard: 'Cimitero',
    grit_bin: 'Pattumiera',
    hospital: 'Ospedale',
    hunting_stand: 'Supporto da caccia',
    ice_cream: 'Gelati',
    kindergarten: 'Scuola materna',
    language_school: 'Scuola di lingue',
    library: 'Biblioteca',
    marketplace: 'Mercato',
    monastery: 'Monastero',
    money_transfer: 'Transazioni denaro',
    motorcycle_parking: 'Parcheggio motocicli',
    motorcycle_rental: 'Noleggio motocicli',
    nightclub: 'Nightclub',
    parking: 'Parcheggio',
    parking_entrance: 'Entrata parcheggio',
    parking_space: 'Area di parcheggio',
    pharmacy: 'Farmacia',
    place_of_mourning: 'Luogo di lutto',
    place_of_worship: 'Luogo di culto',
    planetarium: 'Planetario',
    police: 'Polizia',
    post_box: 'Casella postale',
    post_office: 'Ufficio postale',
    prison: 'Prigione',
    pub: 'Pub',
    public_bookcase: 'Libreria pubblica',
    ranger_station: 'Stazione Ranger',
    recycling: 'Raccolta differenziata',
    restaurant: 'Ristorante',
    school: 'Scuola',
    shelter: {
      '*': 'Riparo',
      shelter_type: {
        '*': 'Shelter {}',
        basic_hut: 'Tettoia',
        changing_rooms: 'Spogliatoi',
        field_shelter: 'Rifugio da campo',
        lean_to: 'Appoggiato a',
        picnic_shelter: 'Tettoia per picnic',
        public_transport: 'Ricovero mezzi pubblici',
        rock_shelter: 'Riparo roccioso',
        sun_shelter: 'Riparo dal sole',
        weather_shelter: 'Rifugio meteorologico',
      },
    },
    shower: 'Doccia',
    ski_rental: 'Noleggio sci',
    smoking_area: 'Area fumatori',
    social_centre: 'Centro sociale',
    social_facility: {
      '*': 'Struttura sociale',
      social_facility: {
        // dairy_kitchen: 'Cucina casearia',
        // outreach: 'Sensibilizzazione',
        ambulatory_care: 'Ambulatorio di cura',
        assisted_living: 'Assistenza vita',
        clothing_bank: 'Banca abbigliamento',
        day_care: 'Asilo nido',
        food_bank: 'Banca del cibo',
        group_home: 'Casa di accoglienza',
        hospice: 'Ospizio',
        nursing_home: 'Casa di riposo',
        shelter: 'Riparo',
        soup_kitchen: 'Mensa per i poveri',
        workshop: 'Officina',
      },
    },
    stripclub: 'Spogliarello',
    studio: 'Studio',
    taxi: 'Taxi',
    telephone: 'Telefono',
    theatre: 'Teatro',
    toilets: 'WC',
    townhall: 'Municipio',
    traffic_park: 'Parco del traffico',
    trolley_bay: 'Trolley',
    university: 'Università',
    vacuum_cleaner: 'Aspirapolvere',
    vehicle_inspection: 'Controllo veicolo',
    vending_machine: 'Distributore automatico',
    veterinary: 'Veterinario',
    waste_basket: 'Cassonetto',
    waste_disposal: 'Smaltimento rifiuti',
    water_point: 'Punto Acqua',
    watering_place: 'Abbeveratoio',
  },
  barrier: {
    '*': 'Barrier {}',
    block: 'Blocco',
    bollard: 'Dissuasore',
    border_control: 'Controllo di frontiera',
    cable_barrier: 'Barriera cavi',
    chain: 'Catena',
    city_wall: 'Mura cittadine',
    ditch: 'Fossato',
    entrance: 'Entrata',
    fence: 'Recinzione',
    gate: 'Cancello',
    guard_rail: 'Guardrail',
    handrail: 'Corrimano',
    hedge: 'Siepe',
    kerb: 'Cordolo',
    lift_gate: 'Ascensore',
    rope: 'Corda',
    sliding_gate: 'Cancello scorrevole',
    swing_gate: 'Cancello a battente',
    turnstile: 'Tornello',
    wall: 'Muro',
  },
  boundary: {
    '*': 'Regione',
    administrative: {
      '*': 'Regione Amministrativa',
      admin_level: {
        '2': 'Stato',
        '3': 'Regione',
        '4': 'Distretto',
        '5': 'Provincia',
        '6': 'Città',
        '7': 'Regione',
        '8': 'Distretto',
        '9': 'Villaggio',
        '10': 'Regione catastale',
      },
    },
    national_park: 'Parco Nazionale',
    protected_area: 'Area Protetta',
  },
  building: {
    '*': 'Edificio {}',
    apartments: 'Condominio',
    barn: 'Fienile',
    bungalow: 'Bungalow',
    bunker: 'Bunker',
    cabin: 'Cabina',
    cathedral: 'Cattedrale',
    chapel: 'Cappella',
    church: 'Chiesa',
    civic: 'Palazzo civico',
    collapsed: 'Edificio crollato',
    commercial: 'Edificio commerciale',
    construction: 'Edificio in costruzione',
    cowshed: 'Stalla',
    detached: 'Casa indipendente',
    dormitory: 'Dormitorio',
    entrance: 'Ingresso edificio',
    farm_auxiliary: 'Fabbricato agricolo ausiliario',
    farm: 'Azienda agricola',
    garage: 'Garage',
    garages: 'Garage',
    government: 'Edificio governativo',
    grandstand: 'Tribuna',
    greenhouse: 'Serra',
    hangar: 'Hangar',
    hayloft: 'Fienile',
    hospital: 'Edificio ospedaliero',
    hotel: 'Edificio alberghiero',
    house: 'Casa privata',
    houseboat: 'Casa galleggiante',
    hut: 'Capanna',
    industrial: 'Edificio industriale',
    kindergarten: "Edificio dell'asilo",
    kiosk: 'Chiosco',
    manufacture: 'Manifattura',
    mosque: 'Moschea',
    office: 'Ufficio',
    parking: 'Parcheggio',
    public: 'Edificio pubblico',
    residential: 'Casa residenziale',
    retail: 'Rivendita',
    roof: 'Tetto',
    ruins: 'Rovine di edifici',
    school: 'Scuola',
    semidetached_house: 'Casa bifamiliare',
    service: 'Edificio di servizio',
    shed: 'Capannone',
    shrine: 'Altare',
    stable: 'Stalla',
    static_caravan: 'Casa mobile',
    storage_tank: 'Serbatoio di stoccaggio',
    sty: 'Porcile',
    supermarket: 'Supermercato',
    synagogue: 'Sinagoga',
    temple: 'Tempio',
    terrace: 'Terrazza',
    train_station: 'Stazione dei treni',
    transformer_tower: 'Torre di trasformazione',
    transportation: 'Trasporti',
    university: 'Università',
    warehouse: 'Magazzino',
    yes: 'Indeterminato',
  },
  highway: {
    '*': 'Strada {}',
    bus_stop: 'Fermata autobus',
    construction: 'Strada in costruzione',
    crossing: 'Attraversamento pedonale',
    cycleway: 'Pista ciclabile',
    footway: 'Marciapiedi',
    living_street: 'Strada residenziale',
    motorway: 'Autostrada',
    motorway_link: 'Collegamento autostradale',
    path: 'Sentiero',
    pedestrian: 'Zona pedonale',
    primary: 'Strada primaria',
    primary_link: 'Collegamento strada primaria',
    residential: 'Strada',
    secondary: 'Strada secondaria',
    secondaty_link: 'Collegamento strada secondaria',
    service: {
      '*': 'Servizio stradale',
      service: {
        '*': 'Strada di servizio {}',
        alley: 'Vicolo',
        bus: 'Strada autobus',
        'drive-through': 'percorribile in auto',
        driveway: 'Viale',
        emergency_access: 'Accesso di emergenza',
        parking_aisle: 'Corridoio di parcheggio',
      },
    },
    steps: 'Scale',
    street_lamp: 'Lampione',
    tertiary: 'Strada terziaria',
    tertiary_link: 'Collegamento strada terziaria',
    track: {
      '*': 'Strada forestale',
      tracktype: {
        grade1: 'Strada forestale compattata',
        grade2: 'Strada forestale prevalentemente compattata',
        grade3: 'Strada forestale sterrata',
        grade4: 'Strada forestale percorribile con trattore o similari',
        grade5: 'Strada forestale poco distinguibile',
      },
    },
    trunk: 'Strada principale',
    trunk_link: 'Collegamento strada principale',
    unclassified: 'Strada minore/non classificata',
  },
  historic: {
    '*': 'Struttura storica',
    archaeological_site: 'Sito archeologico',
    castle: 'Castello',
    church: 'Chiesa storica',
    city_gate: 'Porta della città',
    manor: 'Maniero',
    memorial: 'Memoriale',
    monastery: 'Monastero',
    monument: 'Monumento',
    ruins: {
      '*': 'Rovine',
      ruins: {
        castle: 'Rovine Castello',
      },
    },
    tomb: 'Tomba',
    wayside_cross: 'Croce lungo la strada',
    wayside_shrine: 'Altare lungo la strada',
  },
  landuse: {
    '*': '{}',
    allotments: 'Lottizzazioni',
    brownfield: 'Terreno dismesso',
    cemetery: 'Cimitero',
    commercial: 'Commerciale',
    construction: 'Costruzione',
    farmland: 'Terreno agricolo',
    farmyard: 'Aia',
    forest: 'Foresta',
    garages: 'Garage',
    grass: 'Erba',
    greenfield: 'Terreno edificabile',
    industrial: 'Industriale',
    landfill: 'Discarica',
    meadow: 'Prateria',
    military: 'Area militare',
    orchard: 'Frutteto',
    plant_nursery: 'Vivaio',
    quarry: 'Cava',
    recreation_ground: 'Terreno ricreativo',
    religions: 'Area religiosa',
    // TODO
    reservoir: 'Serbatoio',
    residential: 'Residenziale',
    retail: 'Rivendita',
    vineyard: 'Vigneto',
    winter_sports: 'Sport invernali',
  },
  leisure: {
    '*': '{}',
    dog_park: 'Area per cani',
    firepit: 'Focolare',
    fishing: 'Pesca',
    fitness_centre: 'Centro sportivo',
    fitness_station: 'Stazione sportiva',
    garden: 'Giardino',
    golf_course: 'Campo di Golf',
    horse_riding: 'Maneggio',
    nature_reserve: 'Riserva Naturale',
    park: 'Parco',
    picnic_table: 'Tavolo da Picnic',
    pitch: {
      '*': 'Campo sportivo',
      sport: {
        badminton: 'Campo da Badminton',
        basketball: 'Campo da Basket',
        beachvolleyball: 'Campo Beach volley',
        hockey: 'Campo da Hockey',
        ice_hockey: 'Hockey su ghiaccio',
        multi: 'Campo multi-sport',
        soccer: 'Campo da calcio',
        tennis: 'Campo da tennis',
        volleyball: 'Campo da Volley',
      },
    },
    playground: 'Terreno di gioco',
    sports_centre: 'Centro sportivo',
    sports_hall: 'Palazzetto dello Sport',
    stadium: 'Stadio',
    swimming_pool: 'Piscina',
    track: 'Pista',
    water_park: 'Parco acquatico',
  },
  man_made: {
    '*': '{}',
    adit: 'Ingresso',
    antenna: 'Antenna',
    beacon: 'Faro',
    beehive: 'Alveare',
    bridge: 'Ponte',
    bunker_silo: 'Silos',
    cairn: 'Ometto',
    cellar_entrance: 'Ingresso cantina',
    chimney: 'Ciminiera',
    clearcut: 'Area disboscata',
    communications_tower: 'Torre telecomunicazioni',
    cooling_tower: 'Torre di raffreddamento',
    crane: 'Gru',
    cross: 'Croce',
    cutline: 'Linea disboscata',
    dyke: 'Diga',
    embankment: 'Terrapieno',
    flagpole: 'Bandiera',
    "forester's_lodge": 'Caserma forestale',
    gasometer: 'Gasometro',
    goods_conveyor: 'Nastro trasportatore',
    groyne: 'Pali marini',
    lighthouse: 'Faro',
    manhole: 'Tombino',
    mast: 'Antenna',
    mineshaft: 'Miniera',
    monitoring_station: 'Stazione di monitoraggio',
    nesting_site: 'Sito di nidificazione',
    observatory: 'Osservatorio',
    pier: 'Molo',
    pipeline: 'Tubatura',
    reservoir_covered: 'Serbatoio coperto',
    silo: 'Silo',
    snow_cannon: 'Cannone sparaneve',
    spoil_heap: 'Ammasso di detriti',
    spring_box: 'Scatola sorgente',
    storage_tank: 'Serbatoio di stoccaggio',
    street_cabinet: 'Armadio di derivazione',
    surveillance: 'Sorveglianza',
    survey_point: 'Punto trigonometrico',
    telescope: 'Telescopio',
    tower: {
      '*': 'Torre',
      'tower:type': {
        bell_tower: 'Torre campanaria',
        communication: 'Torre telecomunicazioni',
        cooling: 'Torre di raffreddamento',
        observation: 'Torre di osservazione',
      },
    },
    utility_pole: 'Polo di utilità',
    wastewater_plant: 'Impianto acque reflue',
    water_tap: 'Rubinetto',
    water_tower: 'Torre acquedotto',
    water_well: 'Pozzo',
    water_works: 'Lavori idrici',
    watermill: 'Mulino ad acqua',
    windmill: 'Mulino a vento',
    works: 'Fabbrica',
  },
  natural: {
    '*': '{}',
    arch: 'Arco di pietra',
    bare_rock: 'Roccia nuda',
    basin: 'Bacino',
    bay: 'Baia',
    beach: 'Spiaggia',
    birds_nest: 'Nido',
    cave_entrance: 'Grotta',
    cliff: 'Scogliera',
    earth_bank: 'Calanchi',
    fell: 'Prateria montana',
    geyser: 'Geyser',
    glacier: 'Ghiacciaio',
    grassland: 'Prateria',
    gully: 'Canalone',
    heath: 'Brughiera',
    hot_spring: 'Sorgente calda',
    landslide: 'Frana',
    mountain_range: 'Catena montuosa',
    mud: 'Fango',
    peak: 'Vetta',
    plateau: 'Altopiano',
    ridge: 'Cresta',
    rock: 'Roccia',
    saddle: 'Sella',
    sand: 'Sabbia',
    scree: 'Ghiaione',
    scrub: 'Boscaglia',
    shingle: 'Sassi',
    shrub: 'Arbusto',
    sinkhole: 'Dolina',
    spring: {
      '*': 'Sorgente',
      drinking_water: {
        yes: 'Acqua potabile',
        no: 'Acqua non potabile',
      },
      refitted: {
        yes: 'Rettificata',
        no: 'Non rettificata',
      },
    },
    stone: 'Pietra',
    tree: 'Albero',
    tree_row: 'Filare alberi',
    valley: 'Valle',
    water: 'Acqua',
    wetland: 'Zona umida',
    wood: 'Foresta',
  },
  place: {
    '*': 'Luogo {}',
    city: 'Città',
    country: 'Nazione',
    farm: 'Fattoria',
    hamlet: 'Borgo',
    island: 'Isola',
    islet: 'Isolotto',
    isolated_dwelling: 'Abitazione isolata',
    locality: 'Località',
    ocean: 'Oceano',
    sea: 'Mare',
    square: 'Piazza',
    state: 'Stato',
    suburb: 'Sobborgo',
    town: 'Paese',
    village: 'Villaggio',
  },
  power: {
    '*': '{}',
    generator: 'Generatore',
    line: 'Linea elettrica',
    minor_line: 'Linea elettrica minore',
    plant: 'Centrale',
    pole: 'Polo di alimentazione',
    substation: 'Sottostazione',
    tower: 'Torre di potenza',
    transformer: 'Transformatore',
  },
  public_transport: {
    platform: 'Piattaforma',
    station: 'Stazione',
    stop_position: 'Punto di stop',
  },
  railway: 'Ferrovia',
  shop: {
    '*': 'Negozio {}',
    alcohol: 'Alcolici',
    antiques: 'Antiquariato',
    art: 'Arti',
    baby_goods: 'Oggetti per bambini',
    bag: 'Borse',
    bakery: 'Forno',
    bathroom_furnishing: 'Arredo bagno',
    beauty: 'Cosmetici',
    bed: 'Letti',
    beverages: 'Bevande',
    bicycle: 'Biciclette',
    bookmaker: 'Bookmaker',
    books: 'Libri',
    boutique: 'Boutique',
    butcher: 'Macelleria',
    camera: 'Fotografia',
    car: 'Automobili',
    car_parts: 'Ricambi auto',
    car_repair: 'Riparazione auto',
    carpet: 'Tappeti',
    cheese: 'Formaggi',
    chemist: 'Farmacia',
    clothes: 'Abbigliamento',
    coffee: 'Caffè',
    collector: 'Collezionista',
    computer: 'Computer',
    confectionery: 'Confetteria',
    convenience: 'Minimarket',
    copyshop: 'Copisteria',
    cosmetics: 'Cosmetici',
    craft: 'Artigianato',
    curtain: 'Tende',
    dairy: 'Latticini',
    deli: 'Gastronomia',
    department_store: 'Grande magazzino',
    doityourself: 'Fai-da-te',
    doors: 'Porte',
    dry_cleaning: 'Lavaggio a secco',
    'e-cigarette': 'Sigarette elettroniche',
    electrical: 'Materiale elettrico',
    electronics: 'Elettronica',
    erotic: 'Sex shop',
    fabric: 'Tessili',
    farm: 'Negozio fattoria',
    fireplace: 'Caminetti',
    fishing: 'Pesca',
    flooring: 'Pavimenti',
    florist: 'Fioraio',
    funeral_directors: 'Servizi funebri',
    furniture: 'Arredamento',
    games: 'Giochi',
    garden_center: 'Giardinaggio',
    garden_centre: 'Giardinaggio',
    general: 'Negozio generico',
    gift: 'Articoli da regalo',
    glaziery: 'Vetreria',
    greengrocer: 'Frutta e verdura',
    hairdresser: 'Parrucchiere',
    hardware: 'Ferramenta',
    health_food: 'Cibi sani',
    hifi: 'Hi-Fi',
    houseware: 'Casalinghi',
    hunting: 'Caccia',
    ice_cream: 'Gelati',
    interior_decoration: 'Decorazione di interni',
    jewelry: 'Gioielleria',
    kiosk: 'Chiosco',
    kitchen: 'Cucine',
    laundry: 'Lavanderia',
    lighting: 'Illuminazione',
    locksmith: 'Fabbro',
    lottery: 'Lotteria',
    mall: 'Centro commerciale',
    massage: 'Massaggi',
    medical_supply: 'Forniture mediche',
    mobile_phone: 'Cellulari',
    model: 'Modellismo',
    motorcycle: 'Motocicli',
    music: 'Musica',
    musical_instrument: 'Strumenti musicali',
    newsagent: 'Giornalaio',
    nutrition_supplements: 'Integratori alimentari',
    optician: 'Ottica',
    outdoor: 'Outdoor',
    outpost: 'Avamposto',
    paint: 'Pittura',
    pastry: 'Pasticceria',
    pawnbroker: 'Pegni',
    perfumery: 'Profumeria',
    pet: 'Animali domestici',
    pet_grooming: 'Tolettatura',
    photo: 'Fotografo',
    radiotechnics: 'Radiotecnica',
    rental: 'Noleggio',
    seafood: 'Frutti di mare',
    second_hand: 'Usato',
    sewing: 'Cucito',
    shoes: 'Scarpe',
    sports: 'Sport',
    stationery: 'Cartoleria',
    supermarket: 'Supermercato',
    tailor: 'Sartoria',
    tattoo: 'Tatuaggi',
    tea: 'Tea shop',
    ticket: 'Biglietteria',
    tobacco: 'Tabacchi',
    toys: 'Giocattoli',
    trade: 'Materiali edili',
    travel_agency: 'Agenzia di viaggio',
    tyres: 'Pneumatici',
    vacant: 'Negozio libero',
    variety_store: 'Varietà',
    video: 'Video',
    video_games: 'Videogames',
    watches: 'Orologi',
    wholesale: 'Ingrosso',
    window_blind: 'Tende da finestra',
    wine: 'Vini',
  },
  sport: {
    '*': 'Sport {}',
    '9pin': 'Bowling 9 birilli',
    '10pin': 'Bowling 10 birilli',
    aikido: 'Aikido',
    airsoft: 'Aria compressa',
    american_football: 'Football Americano',
    archery: "Tiro con l'arco",
    athletics: 'Atletica',
    badminton: 'Badminton',
    baseball: 'Baseball',
    basketball: 'Basket',
    beachvolleyball: 'Beach volley',
    bicycle: 'Bicicletta',
    bmx: 'BMX',
    boules: 'Bocce',
    bowling: 'Bowling',
    bowls: 'Bocce',
    canoe: 'Canoa',
    chess: 'Scacchi',
    climbing: 'Arrampicata',
    climbing_adventure: 'Arrampicata',
    cycling: 'Ciclismo',
    darts: 'Freccette',
    disc_golf: 'Golf',
    dog_racing: 'Corse di cani',
    equestrian: 'Equitazione',
    field_hockey: 'Hockey',
    fitness: 'Fitness',
    floorball: 'Mini hockey',
    free_flying: 'Volo libero',
    golf: 'Golf',
    gymnastics: 'Ginnastica',
    handball: 'Pallamano',
    hockey: 'Hockey',
    horse_racing: 'Corse di cavalli',
    ice_hockey: 'Hockey su ghiaccio',
    ice_skating: 'Pattinaggio su ghiaccio',
    judo: 'Judo',
    karate: 'Karate',
    karting: 'Go Kart',
    laser_tag: 'Laser',
    model_aerodrome: 'Aereomodellismo',
    motocross: 'Motocross',
    motor: 'Motori',
    multi: 'Multi',
    netball: 'Pallacanestro',
    paintball: 'Paintball',
    petanque: 'Bocce',
    roller_skating: 'Pattinaggio',
    rowing: 'Canottaggio',
    running: 'Corsa',
    scuba_diving: 'Immersioni subacque',
    shooting: 'Tiro a segno',
    shooting_range: 'Poligono di tiro',
    'shot-put': 'Lancio del peso',
    skateboard: 'Skateboard',
    skating: 'Pattinaggio',
    ski_jumping: 'Salto con gli sci',
    skiing: 'Sci',
    soccer: 'Calcio',
    squash: 'Squash',
    streetball: 'Streetball',
    swimming: 'Nuoto',
    table_tennis: 'Ping pong',
    tennis: 'Tennis',
    volleyball: 'Pallavolo',
    water_ski: "Sci d'acqua",
    workout: 'Palestra',
    yoga: 'Yoga',
  },
  tourism: {
    '*': '{}',
    alpine_hut: 'Rifugio Alpino',
    apartment: 'Appartamento',
    artwork: {
      '*': 'Arte',
      artwork_type: {
        architecture: 'Architettura',
        bust: 'Busto',
        graffiti: 'Graffiti',
        installation: 'Installazione artistica',
        mosaic: 'Piastrelle',
        mural: 'Murale',
        painting: 'Pittura',
        relief: 'Rilievo (opera arte)',
        sculpture: 'Scultura',
        statue: 'Statua',
        stone: 'Boulder (opera arte)',
      },
    },
    attraction: 'Attrazione',
    camp_site: 'Campeggio',
    caravan_site: 'Area camper',
    chalet: 'Chalet',
    guest_house: 'Pensione',
    hostel: 'Ostello',
    hotel: 'Albergo',
    information: {
      '*': 'Informazioni',
      information: {
        '*': 'Informatzioni {}',
        board: 'Pannello informativo',
        guidepost: 'Posto Guida',
        map: 'Mappa',
        office: 'Ufficio informazioni',
      },
    },
    motel: 'Motel',
    museum: 'Museo',
    picnic_site: 'Area Picnic',
    viewpoint: 'Punto panoramico',
    wilderness_hut: 'Rifugio',
    zoo: 'Zoo',
  },
  type: {
    route: {
      '*': 'Percorso',
      route: {
        '*': 'Percorso {}',
        bicycle: 'Percorso ciclistico',
        bus: 'Linea AutoBUS',
        foot: 'Percorso pedonale',
        hiking: 'Percorso escursionistico',
        horse: 'Percorso equitazione',
        mtb: 'Percorso mountain bike',
        piste: 'Percorso Sci',
        railway: 'Ferrovia',
        ski: 'Pista da sci',
        tram: 'Linea Tram',
      },
    },
  },
  waterway: {
    '*': 'Via navigabile {}',
    canal: 'Canale',
    dam: 'Diga',
    ditch: 'Fossato (navigabile)',
    drain: 'Fosso',
    river: 'Fiume',
    stream: 'Ruscello, Torrente',
    waterfall: 'Cascata',
    weir: 'Chiusa',
  },
};

export const colorNames: Record<string, string> = {
  red: 'Rosso',
  blue: 'Blu',
  green: 'Verde',
  yellow: 'Giallo',
  orange: 'Arancio',
  purple: 'Porpora',
  violet: 'Viola',
  white: 'Bianco',
  black: 'Nero',
  gray: 'Grigio',
  brown: 'Marrone',
};