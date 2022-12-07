const teamModel = require("../model/teamModel");

const teamInfo = [
    {
        name: "Fenerbahçe",
        manager: "Jorge Jesus",
        numPlayers: 27,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
        alt: "fb",
        fans: "20300000",
        establishment: 1907,
        trophies: 56,
        players: [
            "Altay Bayindir",
            "Irfan Can Egribayat",
            "Ertugrul Cetin",
            "Attila Szalai",
            "Luan Peres",
            "Gustavo Henrique",
            "Serdar Aziz",
            "Mauricio Lemos",
            "Nazim Sangaré",
            "Willian Arão",
            "Miguel Crespo",
            "Miha Zajc",
            "Ismail Yüksek",
            "Mert Hakan Yandas",
            "Ferdi Kadioglu",
            "Bright Osayi-Samuel",
            "Ezgjan Alioski",
            "Cagtay Kurukalip",
            "Arda Güler",
            "Diego Rossi",
            "Irfan Can Kahveci",
            "Emre Mor",
            "Michy Batshuayi",
            "João Pedro",
            "Joshua King",
            "Enner Valencia",
            "Serdar Dursun",
        ],
    },
    {
        name: "Galatasaray",
        manager: "Okan Buruk",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galatasaray_Sports_Club_Logo.png/822px-Galatasaray_Sports_Club_Logo.png",
        alt: "gs",
        fans: "25900000",
        establishment: 1905,
        trophies: 34,
        players: [
            "Fernando Muslera",
            "Okan Kocuk",
            "Jankat Yilmaz",
            "Victor Nelsson",
            "Abdülkerim Bardakci",
            "Mathias Ross",
            "Emin Bavram",
            "Metehan Baltaci",
            "Patrick van Aanholt",
            "Kazimcan Karatas",
            "Emre Tasdemir",
            "Sacha Boey",
            "Léo Dubois",
            "Lucas Torreira",
            "Baran Aksaka",
            "Fredrik Midtsiö",
            "Sérgio Oliveira",
            "Berkan Kutlu",
            "Hamza Akman",
            "Juan Mata",
            "Kerem Aktürkoglu",
            "Baris Yilmaz",
            "Yunus Akgün",
            "Yusuf Demir",
            "Milot Rashica",
            "Mauro Icardi",
            "Haris Seferovic",
            "Dries Mertens",
            "Bafétimbi Gomis",
        ],
    },
    {
        name: "Beşiktaş",
        manager: "Şenol Güneş",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
        alt: "bjk",
        fans: "13 500 000",
        establishment: 1903,
        trophies: 16,
        players: [
            "Ersin Destanoglu",
            "Mert Günok",
            "Emre Bilgin",
            "Utku Yuvakuran",
            "Romain Saïss",
            "Tayyip Sanuc",
            "Francisco Montero",
            "Emrecan Uzunhan",
            "Necip Uysal",
            "Arthur Masuaku",
            "Umut Meras",
            "Valentin Rosier",
            "Tayfur Bingöl",
            "Berkay Vardar",
            "Atiba Hutchinson",
            "Gedson Fernandes",
            "Salih Ucan",
            "Kerem Atakan Kesgin",
            "Dele Alli",
            "Nathan Redmond",
            "Georges-Kevin N'Koudou",
            "Tyler Boyd",
            "Oguzhan Akgün",
            "Rachid Ghezzal",
            "Wout Weghorst",
            "Jackson Muleka",
            "Cenk Tosun",
        ],
    },
    {
        name: "Trabzonspor",
        manager: "Abdullah Avcı",
        numPlayers: 32,
        anthem: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
        alt: "ts",
        fans: "312 486",
        establishment: 1967,
        trophies: 7,
        players: [
            "Uğurcan Çakır",
            "Marc Bartra",
            "Hüseyin Türkmen",
            "Manolis Siopis",
            "Edin Višća",
            "Dorukhan Toköz",
            "Umut Bozok",
            "Abdülkadir Ömür",
            "Anastasios Bakasetas",
            "Vitor Hugo",
            "Marek Hamšík",
            "Eren Elmalı",
            "Jens Stryger Larsen",
            "Djaniny",
            "Taha Altıkardeş",
            "Naci Ünüvar",
            "Stefano Denswil",
            "Jean-Philippe Gbamin",
            "Trézéguet",
            "Enis Bardhi",
            "Maxi Gómez",
            "Yusuf Erdoğan",
            "Bruno Peres",
            "Doğucan Haspolat",
            "Emrehan Gedikli",
            "Muhammet Taha Tepe",
            "Yusuf Yazıcı",
            "Kerem Şen",
            "Montasser Lahtimi",
            "Hakan Aydın",
            "Kağan Moradaoğlu",
            "Serkan Asan",
        ],
    },
    {
        name: "Adana Demirspor",
        manager: "Vincenzo Montella",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20101106185724",
        alt: "adana",
        fans: "153 125",
        establishment: 1940,
        trophies: 0,
        players: [
            "Ertac Özbir",
            "Goran Karacic",
            "Vedat Karakus",
            "Yaroslav Rakitskyi",
            "Samet Akaydin",
            "Simon Deli",
            "Semih Güler",
            "Jovan Manev",
            "Kévin Rodrigues",
            "Abdurrahim Dursun",
            "Jonas Svensson",
            "Ismail Cokcalis",
            "Beniamin Stambouli",
            "Gökhan Inler",
            "Badou Ndiaye",
            "Birkir Bjarnason",
            "Mustafa Kapi",
            "Younes Belhanda",
            "Emre Akbaba",
            "Erhun Öztümer",
            "Henry Onyekuru",
            "Berk Yildiz",
            "Arda Kurtulan",
            "David Akintola",
            "Yusuf Sari",
            "Gökhan Töre",
            "Salih Kavrazli",
            "Samuel Nongoh",
            "Giorgi Khabuliani",
            "Artem Dzyuba",
            "Britt Assombalonga",
            "Fredrik Gulbrandsen",
        ],
    },
    {
        name: "Konyaspor",
        manager: "İlhan Palut",
        numPlayers: 27,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/archive/4/41/20220809170232%21Konyaspor_1922.png",
        alt: "konya",
        fans: "55 000",
        establishment: 1922,
        trophies: 2,
        players: [
            "Ibrahim Sehic",
            "Erhan Erentürk",
            "Mehmet Erdogan",
            "Francisco Calvo",
            "Haubert Sitya Guilherme",
            "Barış Yardımcı",
            "Ahmet Oğuz",
            "Adil Demirbağ",
            "Yasir Subaşı",
            "Cebrail Karayel",
            "Kahraman Demirtas",
            "Domagoj Pavicic",
            "Endri Cekici",
            "Amir Hadziahmetovic",
            "Bruno Paz",
            "Konrad Michalak",
            "Soner Dikmen",
            "Oğulcan Ulgun",
            "Uğurcan Yazgılı",
            "Adem Eren Kabak",
            "Mehmet Ali",
            "Mame Diouf",
            "Muhammet Demir",
            "Zymer Bytyqi",
            "Robert Muric",
            "Uche Ikpeazu",
            "Amilton",
            "Ahmet Karademir",
        ],
    },
    {
        name: "Kayserispor",
        manager: "Çağdaş Atan",
        numPlayers: 32,
        anthem: "https://tmssl.akamaized.net/images/wappen/head/3205.png?lm=1520239955",
        alt: "kayseri",
        fans: "35 137",
        establishment: 1966,
        trophies: 1,
        players: [
            "Cenk Gönen	",
            "Bilal Bayazit	",
            "Abdülkadir Tasdan	",
            "Mehmet Samil Ozturk",
            "Dimitrios Kolovetsios",
            "Lionel Carole	",
            "Joseph Attamah	",
            "Majid Hosseini	",
            "Arif Kocaman	",
            "İlhan Parlak	",
            "Andrea Bertolacci	",
            "Onur Bulut	",
            "Emrah Bassan	",
            "Gustavo Campanharo",
            "Olivier Kemen	",
            "Miguel Cardoso",
            "Ali Karimi",
            "Bernard Mensah	",
            "Gökhan Sazdağı	",
            "Ramazan Civelek	",
            "Ackah	",
            "Anthony Uzodimma	",
            "Eray Ozbek	",
            "Muhammed Eren Arikan	",
            "Baran Ali Gezek	",
            "Mustafa Pektemek	",
            "Mario Gavranovic	",
            "Carlos Mane	",
            "Mame Thiam	",
            "Nurettin Korkmaz	",
            "Talha Sariarslan	",
            "Hayrullah Erkip	",
            "Balci Ethem",
        ],
    },
    {
        name: "Ümraniyespor",
        manager: "Recep Ucar",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/7/75/%C3%9Cmraniyespor_Logosu.png",
        alt: "umra",
        fans: "13 937",
        establishment: 1938,
        trophies: 0,
        players: [
            "Orkun Özdemir ",
            "Serkan Kırıntılı",
            "Anıl Demir	",
            "Tomislav Glumac ",
            "Allyson		",
            "Mustafa Eser		",
            "Ermir Lenjani		",
            "Onur Atasayar	",
            "Strahil Popov		",
            "Mert Yilmaz				",
            "Emre Nefiz		",
            "​​Kartal Yilmaz		",
            "Isaac Sackey		",
            "Oguz Gürbulak	",
            "Nika Gagnidze",
            "Serkan Göksu",
            "Durel Avounou",
            "Fatih Sanlitürk",
            "Antonio Mrsic",
            "Yunus Mertoglu	",
            "Valentin Gheorghe	",
            "Metehan Mimaroglu	",
            "Yonathan Del Valle	",
            "Geraldo		",
            "Onur Ayik 	",
            "Tahsin Hacimustafaoglu",
            "Umut Nayir	",
            "Adel Bettaieb		",
        ],
    },
    {
        name: "İstanbulspor",
        manager: "Osman Zeki Korkmaz",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/e/ed/IstanbulsporAS.png",
        alt: "istan",
        fans: "8 000",
        establishment: 1926,
        trophies: 0,
        players: [
            "David Jensen",
            "Alp Arda",
            "Mucahit Serbest",
            "Oğuzhan Berber",
            "Adi Mehremic",
            "Ali Yaşar",
            "Demeaco Duhaney",
            "Mehmet Yesil",
            "Okan Erdogan",
            "Tuncer Duhan Aksu",
            "Inainfe Michael Ologo",
            "Patrick Ebert",
            "Aldin Cajic",
            "Eduard Rroca",
            "Eslem Oztürk",
            "Muammer Sarıkaya",
            "Melih Kabasakal",
            "Kagan Miray Bagis",
            "Berkay Görmez",
            "Abdullah Dijlan Aydin",
            "Yusuf Ali Ozer",
            "Vefa Temel",
            "Raymond Owusu",
            "İbrahim Yılmaz",
            "Sindri Guri",
            "Kristal Abazaj",
            "Valon Ethemi",
            "Emir Kaan Gultekin",
            "Jetmir Topallı",
            "Muhammed Mustafa Yildirim",
        ],
    },
    {
        name: "Giresunspor",
        manager: "Hakan Keleş",
        numPlayers: 27,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/c/c1/Giresunspor.png",
        alt: "gires",
        fans: "14 140",
        establishment: 1967,
        trophies: 0,
        players: [
            "Ferhat Kaplan",
            "Onurcan Piri",
            "Erkan Anapa",
            "Mehmet Doğaç Çifici",
            "Alper Uludağ",
            "Ramon Gines Arias Quinteros",
            "Alexis Perez",
            "Hayrullah Bilazer",
            "Sergen Picinciol",
            "Senghor Faustin",
            "Faruk Can Genç",
            "Fatih Yilmaz",
            "Kadir Seven",
            "Talha Ulvan",
            "Sahin Dik",
            "Bradley Kuwas",
            "Vukan Savicevic",
            "Dogan Can Davas",
            "Gorkem Saglam",
            "Murat Cem Akpınar",
            "Robert Andres Mejia Navarrete",
            "Rahmetullah Barışbek",
            "Jorman Campuzano",
            "Borja Sainz",
            "Furkan Kutuk",
            "Riad Bajic",
            "Oğulcan Çağlayan",
            "Serginho",
            "Mert Kurt",
        ],
    },
    {
        name: "Hatayspor",
        manager: "Volkan Demirel",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/0/08/Hatayspor.png",
        alt: "hatay",
        fans: "-",
        establishment: 1967,
        trophies: 0,
        players: [
            "Erce Kardeşler",
            "Abdullah Yiğiter",
            "Yavuz Buğra Boyar",
            "Ognjen Vranjes",
            "Kaan Kanak",
            "Kamil Çörekçi",
            "Simon Falette",
            "Recep Burak Yilmaz",
            "Sam Adekugbe",
            "Kerim Alıcı",
            "Sadık Baş",
            "Burak Öksüz",
            "Eren Fansa",
            "Engin Can Aksoy",
            "Ruben Ribeiro",
            "Musa Çağıran",
            "Christian Atsu",
            "Muhammed Mert",
            "Saba Lobzhanidze",
            "Rayane Aabid",
            "Kevin Varga",
            "Kevin Soni",
            "Onur Ergün",
            "Mehdi Boudjemaa",
            "Selimcan Temel",
            "Ze Luis",
            "Dylan Saint-Louis",
            "Ayoub El Kaabi",
            "Bertug Ozgur Yildirim",
            "Koray Yagci",
            "Sarper Caglar",
        ],
    },
    {
        name: "Sivasspor",
        manager: "Vincenzo Montella",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sivasspor_logo.svg/1200px-Sivasspor_logo.svg.png",
        alt: "sivas",
        fans: "27 978",
        establishment: 1967,
        trophies: 1,
        players: [
            "Ali Şaşal Vural",
            "Muammer Yıldırım",
            "Emre Satılmış",
            "Baver Kuckar",
            "Caner Osmanpaşa",
            "Ziya Erdal",
            "Uğur Çiftçi",
            "Alaaddin Okumuş",
            "Dimitris Goutas",
            "Aaron Appindangoye",
            "Murat Paluli",
            "Samba Camara",
            "Ozkan Yigiter",
            "Max Gradel",
            "Fredrik Ulvestad",
            "Isaac Cofie",
            "Hakan Arslan",
            "Robin Yalçın",
            "Erdoğan Yeşilyurt",
            "Charilaos Charisis",
            "Armin Djerlek",
            "Kader Keita",
            "Eren Şahin",
            "Mehmet Albayrak",
            "Kaan Onaran",
            "Mustapha Yatabare",
            "Ahmed Musa",
            "Leke James",
            "Clinton NJie",
            "Karol Angielski",
            "Dia Saba",
        ],
    },
    {
        name: "Ankaragücü",
        manager: "Ömer Erdoğan",
        numPlayers: 32,
        anthem: "https://ankaragucu.org.tr/wp-content/uploads/2018/06/MKE_Ankarag%C3%BCc%C3%BC_logo.png",
        alt: "ankara",
        fans: "20 560",
        establishment: 1910,
        trophies: 3,
        players: [
            "Gökhan Akkan",
            "Bahadır Han Güngördü",
            "Nurullah Aslan",
            "Dogukan Kaya",
            "Nihad Mujakic",
            "Abdullah Durak",
            "Sinan Osmanoğlu",
            "Kevin Malcuit",
            "Uros Radakovic",
            "Oğuz Ceylan",
            "Alperen Babacan",
            "Mahmut Akan",
            "Yasin Gureler",
            "Marlon",
            "Tolga Ciğerci",
            "Pedrinho",
            "Taylan Antalyalı",
            "Emre Kilinc",
            "Pepe",
            "Sahverdi Cetin",
            "Atakan Ridvan Cankaya",
            "Lamine Diack",
            "Eren Derdiyok",
            "Federico Macheda",
            "Jese",
            "Ali Sowe",
            "Ghayas Zahid",
            "Giorgi Beridze",
            "Gboly Ariyibi",
            "Anastasios Chatzigiovannis",
            "Firatcan Uzum",
            "Sitki Ferdi Imdat",
        ],
    },
    {
        name: "Fatih Karagümrük",
        manager: "Andrea Pirlo",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/9/90/Fatihkaragumruk.png",
        alt: "fatihkara",
        fans: "74 753",
        establishment: 1926,
        trophies: 0,
        players: [
            "Emiliano Viviano",
            "Batuhan Ahmet Sen",
            "Muzaffer Cem Kablan",
            "Caner Erkin",
            "Steven Caulker",
            "Salih Dursun",
            "Davide Biraschi",
            "Burak Bekaroğlu",
            "Ibrahim Dresevic",
            "Burak Kapacak",
            "Rayyan Baniya",
            "Emir Tintis",
            "Efecan Mizrakci",
            "Jimmy Durmaz",
            "Magomed Ozdoev",
            "Kerim Frei",
            "Matteo Ricci",
            "Otabek Shukurov",
            "Münir Mercan",
            "Adnan Ugur",
            "Samed Onur",
            "Efe Tatlı",
            "Yusuf Erdogan",
            "Anwan Nicholas Lawrence",
            "Fatih Kurnaz",
            "Omer Faruk Gumus",
            "Kazım",
            "Fabio Borini",
            "Jean Evrard Kouassi",
            "Mbaye Diagne",
            "Ebrima Colley",
            "Berke Demircan",
        ],
    },
    {
        name: "Antalyaspor",
        manager: "Nuri Şahin",
        numPlayers: 29,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/b/b9/Antalyaspor_logo.png",
        alt: "antalya",
        fans: "32 537",
        establishment: 1966,
        trophies: 0,
        players: [
            "Ruud Boffin",
            "Alperen Uysal",
            "Ataberk Dadakdeniz",
            "Fedor Kudryashov",
            "Ömer Toprak",
            "Veysel Sarı",
            "Sherel Floranus",
            "Christian Luyindama",
            "Cemal Sertel",
            "Gerxhaliu Amar",
            "Hakan Özmert",
            "Güray Gündogdu",
            "Soner Aydoğdu",
            "Fernando",
            "Ufuk Akyol",
            "Erkan Eyibil",
            "Balcı Bünyamin",
            "Mustafa Erdilman",
            "Mevluthan Ekelik",
            "Alassane Ndao",
            "Admir Mehmedi",
            "Luiz Adriano",
            "Fredy Kulembe",
            "Shoya Nakajima",
            "Sinan Gümüş",
            "Sam Larsson",
            "Haji Wright",
            "Gökdeniz Bayrakdar",
            "Houssam Eddine Ghacha",
        ],
    },
    {
        name: "Kasımpaşa",
        manager: "Şenol Can",
        numPlayers: 28,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/6/68/Kasimpasa_2012.png",
        alt: "kasım",
        fans: "13 856",
        establishment: 1921,
        trophies: 0,
        players: [
            "Ertuğrul Taşkıran",
            "Enes Sarı",
            "Erdem Canpolat",
            "Jeffrey Bruma",
            "Daniel Graovac",
            "Sadık Çiftpınar",
            "Mickael Tirpan",
            "Raoul Petretta",
            "Florent Hadergjonaj",
            "Selim Dilli",
            "Yasin Ozcan",
            "Ryan Donk",
            "Aytaç Kara",
            "Yunus Mallı",
            "Valentin Eysseric",
            "Tarkan Serbest",
            "Haris Hajradinovic",
            "Bersant Celina",
            "Turgay Gemicibasi",
            "Ahmet Engin",
            "Mamadou Fall",
            "Feyzi Yıldırım",
            "Mortadha Ben Ouanes",
            "Berat Kalkan",
            "Oguzhan Efe Yilmaz",
            "Tunay Torun",
            "Bengali Fode Koita",
            "Stephane Bahoken",
            "Ali Suhan Demirel",
        ],
    },
    {
        name: "Gaziantep Futbol Kulübü",
        manager: "Vincenzo Montella",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/1/18/Gaziantep_FK.png",
        alt: "antep",
        fans: "33 502",
        establishment: 1988,
        trophies: 0,
        players: [
            "Erten Ersu",
            "Mustafa Burak Bozan",
            "Gunay Guvenc",
            "Papy Djilobodji",
            "Alin Dorinel Tosca",
            "Stelios Kitsiou",
            "Matej Hanousek",
            "Ertuğrul Erson",
            "Halil İbrahim Pehlivan",
            "Arda Kizildag",
            "Omurcan Artan",
            "Bahadir Golgeli",
            "Berkan Kupelikilinc",
            "Alexander Merkel",
            "Alexandru Maxim",
            "Furkan Soyalp",
            "Marko Jevtovic",
            "Abdulkadir Parmak",
            "Angelo Sagal",
            "Mustafa Eskihellaç",
            "Luka Stankovski",
            "Onurhan Babuscu",
            "Tomas Pekhart",
            "Lazar Markovic",
            "Joao Vitor Brandao Figueiredo",
            "Mirza Cihan",
            "Valmir Veliu",
        ],
    },
    {
        name: "Alanyaspor",
        manager: "Francesco Farioli",
        numPlayers: 32,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/2/29/Alanyaspor_logo.png",
        alt: "alanya",
        fans: "10 128",
        establishment: 1948,
        trophies: 0,
        players: [
            "Marafona",
            "Runar Runarsson",
            "Yusuf Karagöz",
            "Jure Balkovec",
            "Joher Khadim Rassoul",
            "Fatih Aksoy",
            "Furhan Bayır",
            "Yunus Bahadir",
            "Ahmet Gülay",
            "Cagan Kayra Erciyas",
            "Umit Akdag",
            "Leroy Fer",
            "Efecan Karaca",
            "Arnaud Lusamba",
            "Efkan Bekiroğlu",
            "Pedro Pereira",
            "Zinedine Ferhat",
            "Idrissa Doumbia",
            "Umut Güneş",
            "Ismail Zehir",
            "Mert-Yusuf Torlak",
            "Oussama Targhalline",
            "Yusuf Özdemir",
            "Daniel Candeias",
            "Wilson Eduardo",
            "Ivan Cavaleiro",
            "Koka",
            "Famara Diedhiou",
            "Cem Celik",
            "Oguz Aydin",
            "Erencan Yardimci",
        ],
    },
    {
        name: "Başakşehir",
        manager: "Emre Belözoğlu",
        numPlayers: 31,
        anthem: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg/1200px-%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg.png",
        alt: "başak",
        fans: "5 112",
        establishment: 2014,
        trophies: 1,
        players: [
            "Volkan Babacan",
            "Muhammed Şengezer",
            "Deniz Dilmen",
            "Alexandru Epureanu",
            "Hasan Ali Kaldırım",
            "Junior Caicara",
            "Şener Özbayraklı",
            "Lucas Lima",
            "Leo Duarte",
            "Ahmed Touba",
            "Francis Beny Nzaba",
            "Efe Arda Koyuncu",
            "Mesut Özil",
            "Lucas Biglia",
            "Mahmut Tekdemir",
            "Danijel Aleksic",
            "Serdar Gürler",
            "Deniz Turuc",
            "Berkay Özcan",
            "Okenchukwu Azubuike",
            "Youssouf Ndayishimiye",
            "Sekou Tidiany Bangoura",
            "Stefano Okaka",
            "Ömer Ali Şahiner",
            "Bertrand Traore",
            "Patryk Szysz",
            "Mounir Chouiar",
            "Muhammet Arslantas",
            "Philippe Keny",
            "Batuhan Celik",
        ],
    },
];

const teams = [
    {
        name: "Fenerbahçe",
        manager: "Jorge Jesus",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png?20211002193712",
        alt: "fb",
    },
    {
        name: "Galatasaray",
        manager: "Okan Buruk",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galatasaray_Sports_Club_Logo.png/822px-Galatasaray_Sports_Club_Logo.png",
        alt: "gs",
    },
    {
        name: "Beşiktaş",
        manager: "Şenol Güneş",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png",
        alt: "bjk",
    },
    {
        name: "Trabzonspor",
        manager: "Abdullah Avcı",
        numPlayers: 32,
        anthem: "https://www.trabzonspor.org.tr/download/resources/logo_6367234456_-1x-1_false.png",
        alt: "ts",
    },
    {
        name: "Adana Demirspor",
        manager: "Vincenzo Montella",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Adanademirspor.png?20101106185724",
        alt: "adana",
    },
    {
        name: "Konyaspor",
        manager: "İlhan Palut",
        numPlayers: 27,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/archive/4/41/20220809170232%21Konyaspor_1922.png",
        alt: "konya",
    },
    {
        name: "Kayserispor",
        manager: "Çağdaş Atan",
        numPlayers: 32,
        anthem: "https://tmssl.akamaized.net/images/wappen/head/3205.png?lm=1520239955",
        alt: "kayseri",
    },
    {
        name: "Ümraniyespor",
        manager: "Recep Ucar",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/7/75/%C3%9Cmraniyespor_Logosu.png",
        alt: "umra",
    },
    {
        name: "İstanbulspor",
        manager: "Osman Zeki Korkmaz",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/e/ed/IstanbulsporAS.png",
        alt: "istan",
    },
    {
        name: "Giresunspor",
        manager: "Hakan Keleş",
        numPlayers: 27,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/c/c1/Giresunspor.png",
        alt: "gires",
    },
    {
        name: "Hatayspor",
        manager: "Volkan Demirel",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/0/08/Hatayspor.png",
        alt: "hatay",
    },
    {
        name: "Sivasspor",
        manager: "Vincenzo Montella",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sivasspor_logo.svg/1200px-Sivasspor_logo.svg.png",
        alt: "sivas",
    },
    {
        name: "Ankaragücü",
        manager: "Ömer Erdoğan",
        numPlayers: 32,
        anthem: "https://ankaragucu.org.tr/wp-content/uploads/2018/06/MKE_Ankarag%C3%BCc%C3%BC_logo.png",
        alt: "ankara",
    },
    {
        name: "Fatih Karagümrük",
        manager: "Andrea Pirlo",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/9/90/Fatihkaragumruk.png",
        alt: "fatihkara",
    },
    {
        name: "Antalyaspor",
        manager: "Nuri Şahin",
        numPlayers: 29,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/b/b9/Antalyaspor_logo.png",
        alt: "antalya",
    },
    {
        name: "Kasımpaşa",
        manager: "Şenol Can",
        numPlayers: 29,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/6/68/Kasimpasa_2012.png",
        alt: "kasım",
    },
    {
        name: "Gaziantep Futbol Kulübü",
        manager: "Vincenzo Montella",
        numPlayers: 22,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/1/18/Gaziantep_FK.png",
        alt: "antep",
    },
    {
        name: "Alanyaspor",
        manager: "Francesco Farioli",
        numPlayers: 32,
        anthem: "https://upload.wikimedia.org/wikipedia/tr/2/29/Alanyaspor_logo.png",
        alt: "alanya",
    },
    {
        name: "Başakşehir",
        manager: "Emre Belözoğlu",
        numPlayers: 31,
        anthem: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg/1200px-%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg.png",
        alt: "başak",
    },
];

module.exports = {
    list: (req, res) => {
        // const {} = req.body;
        //console.log(JSON.stringify(req.body, null, 2));

        return res.send({
            teams: [
                "Fenerbahçe",
                "Galatasaray",
                "Beşiktaş",
                "Adana Demirspor",
                "Trabzonspor",
                "Başakşehir",
                "Konyaspor",
                "Kayserispor",
                "Ümraniyespor",
                "İstanbulspor",
                "Giresunspor",
                "Hatayspor",
                "Sivasspor",
                "Ankaragücü",
                "Fatih Karagümrük",
                "Antalyaspor",
                "Kasımpaşa",
                "Gaziantep Futbol Kulübü",
                "Alanyaspor",
            ],
        });
    },
    teamsList: (req, res) => {
        teamModel.find({}).exec(function (err, data) {
            return res.send({
                teams: data,
            });
        });
        // return res.send({
        //     teams: teams,
        // });
    },
    getTeam: (req, res) => {
        const { id } = req.params;

        return res.send({
            team: teamInfo[id],
        });
    },
    editTeam: (req, res) => {
        const { newTeamInfo } = req.body;

        teamModel.findOne({});
    },
    addTeam: async (req, res) => {
        const { team } = req.body;
        // console.log(team);

        try {
            // The team is added already
            const teamFound = await teamModel.findOne({ name: team.name });

            if (teamFound !== null) {
                return res.send({
                    message: "The team already exists",
                });
            }
            const newTeam = new teamModel(team);
            console.log(newTeam, team);
            // The team does not exits
            newTeam.save((err, team) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error when adding team",
                        error: err,
                    });
                }
                return res.status(201).send({
                    message: "Team is added",
                    team: team,
                });
            });
        } catch (err) {
            console.log(err);
        }
    },
    removeTeam: (req, res) => {
        const { user } = req.body;
        const { id } = req.params;

        if (user.userType === "TFF") {
            teamModel
                .deleteOne({ name: id })
                .then(({ deletedCount }) => {
                    console.log(deletedCount);
                    if (deletedCount === 1)
                        return res.send({ message: "Team is removed" });
                    else return res.send({ message: "Error on team delete" });
                })
                .catch((err) => console.log(err));
        } else {
            return res.send({ message: "Team delete is not successful" });
        }
    },
    // update: () => {},
};
