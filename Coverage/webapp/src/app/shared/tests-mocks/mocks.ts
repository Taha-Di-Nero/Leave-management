import { InflexibilityPeriod } from '../dto/inflexibility-period';
import { CalendarEvent } from 'angular-calendar';
import { EmployesFlexibility } from '../dto/employes-flexibility';

export const areasMock = [
    {
        'id': 75,
        'description': 'Accentramento Contributivo'
    },
    {
        'id': 61,
        'description': 'Aggiornamento Contratti'
    },
    {
        'id': 111,
        'description': 'Anagrafe tributaria'
    },
    {
        'id': 62,
        'description': 'Analisi Costo'
    }
];

export const inflexibilityPeriodListMock = [
    {
        'id': 20,
        'from': new Date('2017-11-16T00:00:00'),
        'to': new Date('2017-11-24T00:00:00'),
        'inflexibilityPeriodMotivation': {
            'id': 1,
            'description': 'Rilascio'
        },
        'employes': [
            {
                'id': 111,
                'name': 'Marco',
                'surname': 'Debiasi',
                'profile': 1,
                'state': 2
            },
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            },
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2
            },
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2
            },
            {
                'id': 76,
                'name': 'Taha',
                'surname': 'Di Nero',
                'profile': 0,
                'state': 2
            }
        ]
    },
    {
        'id': 23,
        'from': new Date('2017-09-03T00:00:00'),
        'to': new Date('2017-09-29T00:00:00'),
        'inflexibilityPeriodMotivation': {
            'id': 2,
            'description': 'Aggiornatmento'
        },
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 16,
                'name': 'Fabio',
                'surname': 'Dalfovo',
                'profile': 1,
                'state': 2
            },
            {
                'id': 115,
                'name': 'Gianluca',
                'surname': 'Nicolini',
                'profile': 1,
                'state': 2
            }
        ]
    }
];

export const holidayShutdownsmocks = [
    {
        'from': new Date('2017-08-14T00:00:00'),
        'to': new Date('2017-08-25T00:00:00'),
        'id': 6
    },
    {
        'from': new Date('2017-08-28T00:00:00'),
        'to': new Date('2017-09-08T00:00:00'),
        'id': 9
    }
];

export const leaves2018mocks = [
    {
        'id': 2550,
        'date': '2018-09-10T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2551,
        'date': '2018-09-19T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2552,
        'date': '2018-09-28T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2553,
        'date': '2018-10-01T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2554,
        'date': '2018-10-02T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2555,
        'date': '2018-10-03T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2556,
        'date': '2018-10-04T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2557,
        'date': '2018-10-05T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2558,
        'date': '2018-10-08T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    },
    {
        'id': 2559,
        'date': '2018-10-09T00:00:00',
        'state': 0,
        'employe': {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        }
    }
];

export const flexibilityCompositionMock = {
    'flexible': [
        {
            'groups': [
                [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 138,
                    'description': 'Antiriciclaggio'
                },
                {
                    'id': 133,
                    'description': 'Corint'
                }
            ],
            'id': 3,
            'name': 'Ivano Luigi',
            'surname': 'Argano',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 2,
                        'name': 'Corrado',
                        'surname': 'Angeli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 63,
                    'description': 'Autoliquidazione'
                }
            ],
            'id': 18,
            'name': 'Luca',
            'surname': 'Eccel',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 71,
                    'description': 'INPDAP'
                }
            ],
            'id': 21,
            'name': 'Gianluca',
            'surname': 'Finotto',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 72,
                    'description': 'EBAV'
                }
            ],
            'id': 22,
            'name': 'Ivano',
            'surname': 'Fondriest',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 64,
                        'name': 'Danilo',
                        'surname': 'Tasin',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 170,
                    'description': 'SEI 170'
                }
            ],
            'id': 25,
            'name': 'Mauro',
            'surname': 'Fruet',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 62,
                        'name': 'Antonio',
                        'surname': 'Stefanelli',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 142,
                    'description': 'SEI 142'
                }
            ],
            'id': 26,
            'name': 'Marco',
            'surname': 'Gatti',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 2,
                        'name': 'Corrado',
                        'surname': 'Angeli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 31,
                        'name': 'Hicham',
                        'surname': 'Imzi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 34,
                        'name': 'Andrea',
                        'surname': 'Maccabelli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 72,
                        'name': 'Nicola',
                        'surname': 'Zamboni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 160,
                    'description': 'Paghe Gestionale (versione 2)'
                }
            ],
            'id': 28,
            'name': 'Rizzieri',
            'surname': 'Giop',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 34,
                        'name': 'Andrea',
                        'surname': 'Maccabelli',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 96,
                    'description': 'Dichiarazione Di Successione (versione 2)'
                }
            ],
            'id': 33,
            'name': 'Lorenza',
            'surname': 'Lunelli',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 160,
                    'description': 'Paghe Gestionale (versione 2)'
                },
                {
                    'id': 107,
                    'description': 'Unico P. Fisiche 740 (versione 2)'
                },
                {
                    'id': 104,
                    'description': 'Modello 730 (versione 2)'
                },
                {
                    'id': 96,
                    'description': 'Dichiarazione Di Successione (versione 2)'
                }
            ],
            'id': 34,
            'name': 'Andrea',
            'surname': 'Maccabelli',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 64,
                        'name': 'Danilo',
                        'surname': 'Tasin',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 180,
                    'description': 'Gestione comissione Seac'
                }
            ],
            'id': 61,
            'name': 'Luana',
            'surname': 'Stedile',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 26,
                        'name': 'Marco',
                        'surname': 'Gatti',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 142,
                    'description': 'SEI 142'
                }
            ],
            'id': 62,
            'name': 'Antonio',
            'surname': 'Stefanelli',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 16,
                        'name': 'Fabio',
                        'surname': 'Dalfovo',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 173,
                    'description': 'CRM CalDAV'
                }
            ],
            'id': 65,
            'name': 'Michele',
            'surname': 'Tomazzolli',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 16,
                        'name': 'Fabio',
                        'surname': 'Dalfovo',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 60,
                        'name': 'Marco',
                        'surname': 'Serra',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 75,
                        'name': 'Alessio',
                        'surname': 'Zeni',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 137,
                    'description': 'Locazioni (versione 2)'
                }
            ],
            'id': 67,
            'name': 'Fabiana',
            'surname': 'Valandro',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 28,
                        'name': 'Rizzieri',
                        'surname': 'Giop',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 31,
                        'name': 'Hicham',
                        'surname': 'Imzi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 34,
                        'name': 'Andrea',
                        'surname': 'Maccabelli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 72,
                        'name': 'Nicola',
                        'surname': 'Zamboni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 62,
                    'description': 'Analisi Costo'
                },
                {
                    'id': 160,
                    'description': 'Paghe Gestionale (versione 2)'
                },
                {
                    'id': 79,
                    'description': 'Comunicazione 730/4'
                },
                {
                    'id': 78,
                    'description': 'Rilevazione Personalizzate su Impresa Plus'
                },
                {
                    'id': 77,
                    'description': 'Foglio presenze'
                },
                {
                    'id': 70,
                    'description': 'Uniemens'
                },
                {
                    'id': 69,
                    'description': 'Paghe Gestionale'
                },
                {
                    'id': 67,
                    'description': 'Modello 770'
                },
                {
                    'id': 66,
                    'description': 'Comunicazione Unica'
                },
                {
                    'id': 65,
                    'description': 'Collocamento (Portale Lavoro)'
                },
                {
                    'id': 64,
                    'description': 'Budget'
                },
                {
                    'id': 63,
                    'description': 'Autoliquidazione'
                }
            ],
            'id': 2,
            'name': 'Corrado',
            'surname': 'Angeli',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 3,
                        'name': 'Ivano Luigi',
                        'surname': 'Argano',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 72,
                        'name': 'Nicola',
                        'surname': 'Zamboni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 175,
                    'description': 'Collocamento (Portale Lavoro) (versione 2)'
                },
                {
                    'id': 160,
                    'description': 'Paghe Gestionale (versione 2)'
                },
                {
                    'id': 133,
                    'description': 'Corint'
                }
            ],
            'id': 31,
            'name': 'Hicham',
            'surname': 'Imzi',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 61,
                        'name': 'Luana',
                        'surname': 'Stedile',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 25,
                        'name': 'Mauro',
                        'surname': 'Fruet',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 170,
                    'description': 'SEI 170'
                },
                {
                    'id': 180,
                    'description': 'Gestione comissione Seac'
                }
            ],
            'id': 64,
            'name': 'Danilo',
            'surname': 'Tasin',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 60,
                        'name': 'Marco',
                        'surname': 'Serra',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 16,
                        'name': 'Fabio',
                        'surname': 'Dalfovo',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 60,
                        'name': 'Marco',
                        'surname': 'Serra',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 67,
                        'name': 'Fabiana',
                        'surname': 'Valandro',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 137,
                    'description': 'Locazioni (versione 2)'
                },
                {
                    'id': 145,
                    'description': 'Portale Azienda'
                }
            ],
            'id': 75,
            'name': 'Alessio',
            'surname': 'Zeni',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 65,
                        'name': 'Michele',
                        'surname': 'Tomazzolli',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 60,
                        'name': 'Marco',
                        'surname': 'Serra',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 67,
                        'name': 'Fabiana',
                        'surname': 'Valandro',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 75,
                        'name': 'Alessio',
                        'surname': 'Zeni',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 173,
                    'description': 'CRM CalDAV'
                },
                {
                    'id': 164,
                    'description': 'TS Learning'
                },
                {
                    'id': 155,
                    'description': 'Banca dati'
                },
                {
                    'id': 152,
                    'description': 'Cefor shop'
                },
                {
                    'id': 137,
                    'description': 'Locazioni (versione 2)'
                }
            ],
            'id': 16,
            'name': 'Fabio',
            'surname': 'Dalfovo',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 25,
                        'name': 'Mauro',
                        'surname': 'Fruet',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 64,
                        'name': 'Danilo',
                        'surname': 'Tasin',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 31,
                        'name': 'Hicham',
                        'surname': 'Imzi',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 175,
                    'description': 'Collocamento (Portale Lavoro) (versione 2)'
                },
                {
                    'id': 170,
                    'description': 'SEI 170'
                },
                {
                    'id': 160,
                    'description': 'Paghe Gestionale (versione 2)'
                },
                {
                    'id': 79,
                    'description': 'Comunicazione 730/4'
                },
                {
                    'id': 77,
                    'description': 'Foglio presenze'
                },
                {
                    'id': 73,
                    'description': 'Certificato Malattia Online'
                },
                {
                    'id': 70,
                    'description': 'Uniemens'
                },
                {
                    'id': 69,
                    'description': 'Paghe Gestionale'
                },
                {
                    'id': 68,
                    'description': 'Netto Lordo Costo'
                },
                {
                    'id': 67,
                    'description': 'Modello 770'
                },
                {
                    'id': 65,
                    'description': 'Collocamento (Portale Lavoro)'
                },
                {
                    'id': 63,
                    'description': 'Autoliquidazione'
                }
            ],
            'id': 32,
            'name': 'Herbert',
            'surname': 'Lorenzoni',
            'profile': 1,
            'state': 0
        },
        {
            'groups': [
                [
                    {
                        'id': 2,
                        'name': 'Corrado',
                        'surname': 'Angeli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 3,
                        'name': 'Ivano Luigi',
                        'surname': 'Argano',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 27,
                        'name': 'Lorenzo',
                        'surname': 'Gilli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 31,
                        'name': 'Hicham',
                        'surname': 'Imzi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ],
                [
                    {
                        'id': 2,
                        'name': 'Corrado',
                        'surname': 'Angeli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 19,
                        'name': 'Federico',
                        'surname': 'Endrici',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 20,
                        'name': 'Alessandro',
                        'surname': 'Fauri',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 28,
                        'name': 'Rizzieri',
                        'surname': 'Giop',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 31,
                        'name': 'Hicham',
                        'surname': 'Imzi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 32,
                        'name': 'Herbert',
                        'surname': 'Lorenzoni',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 34,
                        'name': 'Andrea',
                        'surname': 'Maccabelli',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ]
            ],
            'areaList': [
                {
                    'id': 65,
                    'description': 'Collocamento (Portale Lavoro)'
                },
                {
                    'id': 133,
                    'description': 'Corint'
                },
                {
                    'id': 160,
                    'description': 'Paghe Gestionale (versione 2)'
                }
            ],
            'id': 72,
            'name': 'Nicola',
            'surname': 'Zamboni',
            'profile': 1,
            'state': 0
        }
    ],
    'inflexible': [
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 6,
            'name': 'Stefano',
            'surname': 'Bertoldi',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 15,
            'name': 'Luca',
            'surname': 'Dalessandro',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 19,
            'name': 'Federico',
            'surname': 'Endrici',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 20,
            'name': 'Alessandro',
            'surname': 'Fauri',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 27,
            'name': 'Lorenzo',
            'surname': 'Gilli',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 60,
            'name': 'Marco',
            'surname': 'Serra',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 74,
            'name': 'Andrea',
            'surname': 'Zendri',
            'profile': 1,
            'state': 1
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 66,
            'name': 'Guido',
            'surname': 'Zeni',
            'profile': 1,
            'state': 1
        }
    ],
    'indifferent': [
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 108,
            'name': 'Flavio',
            'surname': 'Andreatta',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 83,
            'name': 'Alessia',
            'surname': 'Beber',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 104,
            'name': 'Walter',
            'surname': 'Cainelli',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 96,
            'name': 'Rudy',
            'surname': 'Calliari',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 97,
            'name': 'Stefania',
            'surname': 'Campostrini',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 109,
            'name': 'Emiliano',
            'surname': 'Carli',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 110,
            'name': 'Luca',
            'surname': 'Cattani',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 106,
            'name': 'Michele',
            'surname': 'Cont',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 100,
            'name': 'Roberto',
            'surname': 'Cottino',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 103,
            'name': 'Giuseppe',
            'surname': 'Criscione',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 111,
            'name': 'Marco',
            'surname': 'Debiasi',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 76,
            'name': 'Taha',
            'surname': 'Di Nero',
            'profile': 0,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 112,
            'name': 'Alberto',
            'surname': 'Franzaroli',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 95,
            'name': 'Giancarlo',
            'surname': 'Fronza',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 113,
            'name': 'Mauro',
            'surname': 'Giovannini',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 121,
            'name': 'Raffaele',
            'surname': 'Malfer',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 79,
            'name': 'Armando',
            'surname': 'Mancini',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 114,
            'name': 'Stefano',
            'surname': 'Marzari',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 101,
            'name': 'Paolo',
            'surname': 'Mattevi',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 99,
            'name': 'Massimo',
            'surname': 'Mazzonelli',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 93,
            'name': 'Silvano',
            'surname': 'Menegatti',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 88,
            'name': 'Roberta',
            'surname': 'Moranduzzo',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 115,
            'name': 'Gianluca',
            'surname': 'Nicolini',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 116,
            'name': 'Alessandro',
            'surname': 'Oppo',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 77,
            'name': 'Rodrigo',
            'surname': 'Padovan',
            'profile': 0,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 78,
            'name': 'Barbara',
            'surname': 'Palla',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 105,
            'name': 'Romano',
            'surname': 'Pallazzolo',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 98,
            'name': 'Riccardo',
            'surname': 'Pecol',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 84,
            'name': 'Giuliana',
            'surname': 'Pedevilla',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 102,
            'name': 'Paolo',
            'surname': 'Pedroni',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 81,
            'name': 'Eugenio',
            'surname': 'Piazza',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 94,
            'name': 'Claudio',
            'surname': 'Pilati',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 117,
            'name': 'Roberto',
            'surname': 'Poggianella',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 92,
            'name': 'Gilda',
            'surname': 'Pola',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 118,
            'name': 'Stefania',
            'surname': 'Prezzi',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 87,
            'name': 'Marco',
            'surname': 'Profaizer',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 91,
            'name': 'Michele',
            'surname': 'Rizzi',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 90,
            'name': 'Fausto',
            'surname': 'Sartori',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 80,
            'name': 'Maurizio',
            'surname': 'Sovilla',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 86,
            'name': 'Riccardo',
            'surname': 'Taddei',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 89,
            'name': 'Andrea',
            'surname': 'Veronesi',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 119,
            'name': 'Stefano',
            'surname': 'Versini',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 85,
            'name': 'Chiara',
            'surname': 'Vescovi',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 120,
            'name': 'Ennio',
            'surname': 'Vidale',
            'profile': 1,
            'state': 2
        },
        {
            'groups': [

            ],
            'areaList': [

            ],
            'id': 82,
            'name': 'Franca',
            'surname': 'Zanin',
            'profile': 1,
            'state': 2
        }
    ]
};

export const flexibilityCompositionObj = new EmployesFlexibility(flexibilityCompositionMock);

export const gapsByEmployeMock = [
    {
        'date': '2017-04-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 19,
                'description': 'Suite Gestionale'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-12',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 19,
                'description': 'Suite Gestionale'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-13',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 19,
                'description': 'Suite Gestionale'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 19,
                'description': 'Suite Gestionale'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 19,
                'description': 'Suite Gestionale'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 111,
                'description': 'Anagrafe tributaria'
            },
            {
                'employeList': [
                    {
                        'id': 6,
                        'name': 'Stefano',
                        'surname': 'Bertoldi',
                        'profile': 1,
                        'state': 2
                    },
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 139,
                'description': 'Fidi'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 165,
                'description': 'Website Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 167,
                'description': 'Website Seac Assicurazioni'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-19',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 165,
                'description': 'Website Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 167,
                'description': 'Website Seac Assicurazioni'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-20',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 165,
                'description': 'Website Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 167,
                'description': 'Website Seac Assicurazioni'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 165,
                'description': 'Website Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 167,
                'description': 'Website Seac Assicurazioni'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 165,
                'description': 'Website Seac'
            },
            {
                'employeList': [
                    {
                        'id': 15,
                        'name': 'Luca',
                        'surname': 'Dalessandro',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 167,
                'description': 'Website Seac Assicurazioni'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    },
    {
        'date': '2017-04-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2
            }
        ],
        'areas': [
            {
                'employeList': [
                    {
                        'id': 74,
                        'name': 'Andrea',
                        'surname': 'Zendri',
                        'profile': 1,
                        'state': 2
                    }
                ],
                'id': 81,
                'description': 'Gestionale (versione 2)'
            }
        ],
        'dayGaps': [
            {
                'initTime': '08:30',
                'endTime': '12:30'
            },
            {
                'initTime': '14:00',
                'endTime': '18:00'
            }
        ]
    }
];

export const gapsByAreaMock = [
    {
        'area': 'Riscossione Quote',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Suite Gestionale',
        'singleEmploye': true,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Annuale Iva',
        'singleEmploye': true,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Intrastat',
        'singleEmploye': true,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Gestione Pratiche',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Magazzino gestionale',
        'singleEmploye': true,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Aggiornamento Contratti',
        'singleEmploye': true,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-04',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-05',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-06',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Analisi Costo',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Autoliquidazione',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 18,
                'name': 'Luca',
                'surname': 'Eccel',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Budget',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Comunicazione Unica',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Modello 770',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Netto Lordo Costo',
        'singleEmploye': false,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Paghe Gestionale',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Uniemens',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'INPDAP',
        'singleEmploye': false,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'EBAV',
        'singleEmploye': false,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Certificato Malattia Online',
        'singleEmploye': false,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-03',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-04',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-05',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-06',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Gestione fondi',
        'singleEmploye': true,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-03',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-04',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-05',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-06',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Accentramento Contributivo',
        'singleEmploye': true,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-03',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-04',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-05',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-06',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Rilevazione Presenze Seac',
        'singleEmploye': true,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-04',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-05',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-06',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Foglio presenze',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Rilevazione Personalizzate su Impresa Plus',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Comunicazione 730/4',
        'singleEmploye': false,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Gestionale',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Gestionale (versione 2)',
        'singleEmploye': true,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-15',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-12-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-12-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-12-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-12-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Dichiarazione Di Successione (versione 2)',
        'singleEmploye': false,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            },
            {
                'id': 33,
                'name': 'Lorenza',
                'surname': 'Lunelli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Modelli Invciv (versione 2)',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Modello 730 (versione 2)',
        'singleEmploye': false,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2
            },
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Unico P. Fisiche 740 (versione 2)',
        'singleEmploye': false,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Anagrafe tributaria',
        'singleEmploye': false,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Tempo on web',
        'singleEmploye': true,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-04',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-05',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-06',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Locazioni',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Antiriciclaggio',
        'singleEmploye': false,
        'employes': [
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2
            },
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            },
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Fidi',
        'singleEmploye': false,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Enti bilaterali',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Cefor Play',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Website Cefor',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'assistenza.seac.it',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Website archiviazione.seac.it',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Website Seac',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'E-commerce Seac',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Website Seac Assicurazioni',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'SEI 170',
        'singleEmploye': false,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Website BitLife',
        'singleEmploye': true,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-09-15',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Collocamento (Portale Lavoro) (versione 2)',
        'singleEmploye': false,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'NCNotaWi',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'NCBila',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'NCGCWord',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Seac Explorer',
        'singleEmploye': true,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-08',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-09',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Gestione comissione Seac',
        'singleEmploye': false,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-07',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Gestione ordini terminali motorola',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Console de visualizzazione stato fattura',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Fattura PA Monitor',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Website caf50epiu.seac',
        'singleEmploye': true,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-05-31',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-01',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-29',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-30',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Mandati e reversali',
        'singleEmploye': true,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Costi Ricavi Farmacia',
        'singleEmploye': true,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-04-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-04-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-06-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-26',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-27',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Servizio invio fatture elettroniche a SDI',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    },
    {
        'area': 'Fatturazione 50&Piu’ Fenacom (versione 2)',
        'singleEmploye': true,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2
            }
        ],
        'gaps': [
            {
                'date': '2017-07-10',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-11',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-12',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-13',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-19',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-20',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-07-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-14',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-16',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-17',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-18',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-21',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-22',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-23',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-24',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-25',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            },
            {
                'date': '2017-08-28',
                'dayGaps': [
                    {
                        'initTime': '08:30',
                        'endTime': '12:30'
                    },
                    {
                        'initTime': '14:00',
                        'endTime': '18:00'
                    }
                ]
            }
        ]
    }
];

export const events: any[] = [
    {
        'start': new Date('2017-07-09T22:00:00.000Z'),
        'end': new Date('2017-07-10T21:59:59.999Z'),
        'title': 'Riscossione Quote: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Riscossione Quote',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Riscossione Quote',
            'list': 'Serra Marco'
        }
    },
    {
        'start': new Date('2017-08-27T22:00:00.000Z'),
        'end': new Date('2017-08-28T21:59:59.999Z'),
        'title': 'Riscossione Quote: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Riscossione Quote',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Riscossione Quote',
            'list': 'Serra Marco'
        }
    },
    {
        'start': new Date('2017-04-11T22:00:00.000Z'),
        'end': new Date('2017-04-12T21:59:59.999Z'),
        'title': 'Suite Gestionale: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Suite Gestionale',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Suite Gestionale',
            'list': 'Bertoldi Stefano'
        }
    },
    {
        'start': new Date('2017-08-24T22:00:00.000Z'),
        'end': new Date('2017-08-25T21:59:59.999Z'),
        'title': 'Suite Gestionale: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Suite Gestionale',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Suite Gestionale',
            'list': 'Bertoldi Stefano'
        }
    },
    {
        'start': new Date('2017-08-24T22:00:00.000Z'),
        'end': new Date('2017-08-25T21:59:59.999Z'),
        'title': 'Annuale Iva: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Annuale Iva',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Annuale Iva',
            'list': 'Bertoldi Stefano'
        }
    },
    {
        'start': new Date('2017-04-11T22:00:00.000Z'),
        'end': new Date('2017-04-12T21:59:59.999Z'),
        'title': 'Intrastat: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Intrastat',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Intrastat',
            'list': 'Bertoldi Stefano'
        }
    },
    {
        'start': new Date('2017-07-09T22:00:00.000Z'),
        'end': new Date('2017-07-10T21:59:59.999Z'),
        'title': 'Gestione Pratiche: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Gestione Pratiche',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Gestione Pratiche',
            'list': 'Serra Marco'
        }
    },
    {
        'start': new Date('2017-07-10T22:00:00.000Z'),
        'end': new Date('2017-07-11T21:59:59.999Z'),
        'title': 'Gestione Pratiche: [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Gestione Pratiche',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Gestione Pratiche',
            'list': 'Serra Marco'
        }
    },
    {
        'start': new Date('2017-08-24T22:00:00.000Z'),
        'end': new Date('2017-08-25T21:59:59.999Z'),
        'title': 'Fatturazione 50&Piu’ Fenacom (versione 2): [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Fatturazione 50&Piu’ Fenacom (versione 2)',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Fatturazione 50&Piu’ Fenacom (versione 2)',
            'list': 'Serra Marco'
        }
    },
    {
        'start': new Date('2017-08-27T22:00:00.000Z'),
        'end': new Date('2017-08-28T21:59:59.999Z'),
        'title': 'Fatturazione 50&Piu’ Fenacom (versione 2): [08:30, 12:30], [14:00, 18:00]',
        'color': {
            'primary': '#ad2121',
            'secondary': '#FAE3E3'
        },
        'meta': {
            'area': 'Fatturazione 50&Piu’ Fenacom (versione 2)',
            'employesNumer': 1,
            'type': 'danger',
            'modalTitle': 'Dipendenti assegnati a Fatturazione 50&Piu’ Fenacom (versione 2)',
            'list': 'Serra Marco'
        }
    }
];
