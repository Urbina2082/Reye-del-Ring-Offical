type Boxer = {
  id: string | number;
  
  box: number;
  lugar: string;

  combate:string;
  luchador1: {
    id: string;
    name: string;
  };
  luchador2: {
    id: string;
    name: string;
  };
};

export const boxers: Boxer[] = [
  {
    id: 1,
    box: 1,
    combate: "Primer Combate",
    lugar: "Sabinas",
    luchador1: { id: "Fernando-ElChino-Sanchez", name: "El Chino" },
    luchador2: { id: "SebastianFabela", name: "Sebastian Fabela" }
  },
  {
    id: 2,
    box: 2,
    combate: "Segundo Combate",
    lugar: "Sabinas",
    luchador1: { id: "Joselin-LaAsesina-Pacheco", name: "La Asesina" },
    luchador2: { id: "ReginaYanez", name: "Regina Yanez" }
  },
  {
    id: 3,
    box: 3,
    combate: "Tercer Combate",
    lugar: "Sabinas",
    luchador1: { id: "DanielMonrrreal", name: "Daniel Monrreal" },
    luchador2: { id: "lucio-ElChucho-Mata", name: "El Chucho" }
  },
  {
    id: 4,
    box: 4,
    combate: "Cuarto Combate",
    lugar: "Sabinas",
    luchador1: { id: "Jose-ElMisa-Lozano", name: "El Misa" },
    luchador2: { id: "JoseJulian-ElChuky-", name: "El Chuky" }
  },
  {
    id: 5,
    box: 5,
    combate: "Quinto Combate",
    lugar: "Sabinas",
    luchador1: { id: "Brandon-ElInocente-Cantu", name: "El Inocente" },
    luchador2: { id: "KevinFranco", name: "Kevin Franco" }
  },
  {
    id: 6,
    box: 6,
    combate: "Sexto Combate",
    lugar: "Sabinas",
    luchador1: { id: "JesusRobertoRdz", name: "Jesus Roberto" },
    luchador2: { id: "VictorParedes", name: "Victor Paredes" }
  },
  {
    id: 7,
    box: 7,
    combate: "Septimo Combate",
    lugar: "Sabinas",
    luchador1: { id: "Cristopher-ElRaton-Garcia", name: "El Raton " },
    luchador2: { id: "Eduardo-ElPachin-Trejo", name: "El Pachin" }
  },
  {
    id: 8,
    box: 8,
    combate: "Octavo Combate",
    lugar: "Sabinas",
    luchador1: { id: "CalebPortales", name: "Caleb Portales" },
    luchador2: { id: "Kevin-ElPitbull-alvarez", name: "El Pitbull" }
  },
  {
    id: 9,
    box: 9,
    combate: "Noveno Combate",
    lugar: "Sabinas",
    luchador1: { id: "Francisco-ElFrankyJR-Banke", name: "El Franky Jr" },
    luchador2: { id: "MarioSalinas", name: "Mario Salinas" }
  },
  {
    id: 10,
    box: 10,
    combate: "Decimo Combate",
    lugar: "Sabinas",
    luchador1: { id: "ElTatanGomez", name: "El Tatan Gomez" },
    luchador2: { id: "Mauro-Ippo-Martinez", name: "Ippo" }
  },
  {
    id: 11,
    box: 11,
    combate: "Undecimo Combate",
    lugar: "Sabinas",
    luchador1: { id: "gustavo-LaFuria-Ortega", name: "La Furia" },
    luchador2: { id: "kalef-Elrusito-Gonzalez", name: "El Rusito" }
  },
  {
    id: 12,
    box: 12,
    combate: "Duodecimo Combate",
    lugar: "Sabinas",
    luchador1: { id: "Oscar-ElMarzo-Lopez", name: "El Marzo" },
    luchador2: { id: "otoniel-ElTanque-Ayala", name: "El Tanque" }
  },
  {
    id: 13,
    box: 13,
    combate: "Decimotercer Combate",
    lugar: "Sabinas",
    luchador1: { id: "Daniel-ElTravieso", name: "El Travieso" },
    luchador2: { id: "Francisco-ElTremendo-Avila", name: "El Tremendo" }
  },
  {
  id: 14,
  box: 14,
  combate: "Decimocuarto Combate",
  lugar: "Sabinas",
  luchador1: { id: "BrunoLumbreras", name: "Bruno Lumbreras" },
  luchador2: { id: "ReynaldoReyes", name: "Reynaldo Reyes" }
},
{
  id: 15,
  box: 15,
  combate: "Decimoquinto Combate",
  lugar: "Sabinas",
  luchador1: { id: "BrandonAlexisSanchez", name: "Brandon Sanchez" },
  luchador2: { id: "Gerardo-theNigthmare-silva", name: "The Nightmare" }
},
{
  id: 16,
  box: 16,
  combate: "Decimosexto Combate",
  lugar: "Sabinas",
  luchador1: { id: "CristhianHuitron", name: "Cristian Huitron" },
  luchador2: { id: "Derek-ElPopeye-Ortega", name: "El Popeye" }
},
{
  id: 17,
  box: 17,
  combate: "Decimoséptimo Combate",
  lugar: "Sabinas",
  luchador1: { id: "JosehpRuiz", name: "Joseph Ruiz" },
  luchador2: { id: "Victor-ElRelampago-Saldana", name: "El Relámpago" }
},
{
  id: 18,
  box: 18,
  combate: "Decimoctavo Combate",
  lugar: "Sabinas",
  luchador1: { id: "DiegoOvalle", name: "Diego Ovalle" },
  luchador2: { id: "Ulises-ElTiburon-Rodriguez", name: "El Tiburón" }
},
{
  id: 19,
  box: 19,
  combate: "Decimonoveno Combate",
  lugar: "Sabinas",
  luchador1: { id: "HomeroSandoval", name: "Homero Sandoval" },
  luchador2: { id: "Isai-Duracell-Menchaca", name: "Duracell" }
},
{
  id: 20,
  box: 20,
  combate: "Vigésimo Combate",
  lugar: "Sabinas",
  luchador1: { id: "Brayan-ElChocolatito-Rangel", name: "El Chocolatito" },
  luchador2: { id: "Raul-ElTravieso-Maldonado", name: "El Travieso" }
},{
  id: 21,
  box: 21,
  combate: "Vigésimo primer Combate",
  lugar: "Sabinas",
  luchador1: { id: "Carolina-LaFlaquita-Galvan", name: "La Flaquita" },
  luchador2: { id: "Frida-LaFiera-Aguirre", name: "La Fiera" }
},
{
  id: 22,
  box: 22,
  combate: "Vigésimo segundo Combate",
  lugar: "Sabinas",
  luchador1: { id: "RolandoCasas", name: "Rolando Casas" },
  luchador2: { id: "Tadeo-ElWalo-Cordova", name: "El Walo" }
},
{
  id: 23,
  box: 23,
  combate: "Vigésimo tercer Combate",
  lugar: "Sabinas",
  luchador1: { id: "Naina-LaPeligrosa-Moreno", name: "La Peligrosa" },
  luchador2: { id: "YamilethAznar", name: "Yamileth Aznar" }
},
{
  id: 24,
  box: 24,
  combate: "Vigésimo cuarto Combate",
  lugar: "Sabinas",
  luchador1: { id: "Francisco-ElDiablo-Torres", name: "El Diablo" },
  luchador2: { id: "Salvador-ElTiburon-Ceballos", name: "El Tiburón" }
},
{
  id: 25,
  box: 25,
  combate: "Vigésimo quinto Combate",
  lugar: "Sabinas",
  luchador1: { id: "Briana-LaBroncas-Leyva", name: "La Broncas" },
  luchador2: { id: "Maria-LaWerita-lopez", name: "La Werita" }
},
{
  id: 26,
  box: 26,
  combate: "Vigésimo sexto Combate",
  lugar: "Sabinas",
  luchador1: { id: "GemeloPuente", name: "Gemelo Puente" },
  luchador2: { id: "JuanitoChamoy", name: "Juanito Chamoy" }
}
];