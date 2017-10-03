import { InflexibilityPeriod } from '../dto/inflexibility-period';

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

export const gapsMock = [
    {
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 62,
                'description': 'Analisi Costo'
            },
            {
                'id': 64,
                'description': 'Budget'
            },
            {
                'id': 66,
                'description': 'Comunicazione Unica'
            },
            {
                'id': 78,
                'description': 'Rilevazione Personalizzate su Impresa Plus'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 62,
                'description': 'Analisi Costo'
            },
            {
                'id': 64,
                'description': 'Budget'
            },
            {
                'id': 66,
                'description': 'Comunicazione Unica'
            },
            {
                'id': 78,
                'description': 'Rilevazione Personalizzate su Impresa Plus'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 62,
                'description': 'Analisi Costo'
            },
            {
                'id': 64,
                'description': 'Budget'
            },
            {
                'id': 66,
                'description': 'Comunicazione Unica'
            },
            {
                'id': 78,
                'description': 'Rilevazione Personalizzate su Impresa Plus'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 62,
                'description': 'Analisi Costo'
            },
            {
                'id': 64,
                'description': 'Budget'
            },
            {
                'id': 66,
                'description': 'Comunicazione Unica'
            },
            {
                'id': 78,
                'description': 'Rilevazione Personalizzate su Impresa Plus'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 18,
                'name': 'Luca',
                'surname': 'Eccel',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 63,
                'description': 'Autoliquidazione'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 18,
                'name': 'Luca',
                'surname': 'Eccel',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 63,
                'description': 'Autoliquidazione'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 18,
                'name': 'Luca',
                'surname': 'Eccel',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 63,
                'description': 'Autoliquidazione'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 18,
                'name': 'Luca',
                'surname': 'Eccel',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 63,
                'description': 'Autoliquidazione'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 79,
                'description': 'Comunicazione 730/4'
            },
            {
                'id': 77,
                'description': 'Foglio presenze'
            },
            {
                'id': 67,
                'description': 'Modello 770'
            },
            {
                'id': 69,
                'description': 'Paghe Gestionale'
            },
            {
                'id': 70,
                'description': 'Uniemens'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 79,
                'description': 'Comunicazione 730/4'
            },
            {
                'id': 77,
                'description': 'Foglio presenze'
            },
            {
                'id': 67,
                'description': 'Modello 770'
            },
            {
                'id': 69,
                'description': 'Paghe Gestionale'
            },
            {
                'id': 70,
                'description': 'Uniemens'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 79,
                'description': 'Comunicazione 730/4'
            },
            {
                'id': 77,
                'description': 'Foglio presenze'
            },
            {
                'id': 67,
                'description': 'Modello 770'
            },
            {
                'id': 69,
                'description': 'Paghe Gestionale'
            },
            {
                'id': 70,
                'description': 'Uniemens'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 2,
                'name': 'Corrado',
                'surname': 'Angeli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 79,
                'description': 'Comunicazione 730/4'
            },
            {
                'id': 77,
                'description': 'Foglio presenze'
            },
            {
                'id': 67,
                'description': 'Modello 770'
            },
            {
                'id': 69,
                'description': 'Paghe Gestionale'
            },
            {
                'id': 70,
                'description': 'Uniemens'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 138,
                'description': 'Antiriciclaggio'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 138,
                'description': 'Antiriciclaggio'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 138,
                'description': 'Antiriciclaggio'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 138,
                'description': 'Antiriciclaggio'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 3,
                'name': 'Ivano Luigi',
                'surname': 'Argano',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 138,
                'description': 'Antiriciclaggio'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 24,
                'description': 'Annuale Iva'
            },
            {
                'id': 186,
                'description': 'Costi Ricavi Farmacia'
            },
            {
                'id': 26,
                'description': 'Intrastat'
            },
            {
                'id': 49,
                'description': 'Magazzino gestionale'
            },
            {
                'id': 185,
                'description': 'Mandati e reversali'
            },
            {
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 111,
                'description': 'Anagrafe tributaria'
            },
            {
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 111,
                'description': 'Anagrafe tributaria'
            },
            {
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 111,
                'description': 'Anagrafe tributaria'
            },
            {
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 111,
                'description': 'Anagrafe tributaria'
            },
            {
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 6,
                'name': 'Stefano',
                'surname': 'Bertoldi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 111,
                'description': 'Anagrafe tributaria'
            },
            {
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 15,
                'name': 'Luca',
                'surname': 'Dalessandro',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 154,
                'description': 'assistenza.seac.it'
            },
            {
                'id': 151,
                'description': 'Cefor Play'
            },
            {
                'id': 166,
                'description': 'E-commerce Seac'
            },
            {
                'id': 161,
                'description': 'Website archiviazione.seac.it'
            },
            {
                'id': 184,
                'description': 'Website caf50epiu.seac'
            },
            {
                'id': 153,
                'description': 'Website Cefor'
            },
            {
                'id': 165,
                'description': 'Website Seac'
            },
            {
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 68,
                'description': 'Netto Lordo Costo'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 68,
                'description': 'Netto Lordo Costo'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 68,
                'description': 'Netto Lordo Costo'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 68,
                'description': 'Netto Lordo Costo'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 21,
                'name': 'Gianluca',
                'surname': 'Finotto',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 71,
                'description': 'INPDAP'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-29',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-30',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-31',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 22,
                'name': 'Ivano',
                'surname': 'Fondriest',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 72,
                'description': 'EBAV'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 73,
                'description': 'Certificato Malattia Online'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-29',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-30',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-31',
        'areaNumber': 69,
        'employes': [
            {
                'id': 19,
                'name': 'Federico',
                'surname': 'Endrici',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 75,
                'description': 'Accentramento Contributivo'
            },
            {
                'id': 74,
                'description': 'Gestione fondi'
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
        'date': '2017-08-07',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-08',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-09',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-10',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-29',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-30',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-31',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 149,
                'description': 'Enti bilaterali'
            },
            {
                'id': 80,
                'description': 'Gestionale'
            },
            {
                'id': 136,
                'description': 'Locazioni'
            },
            {
                'id': 177,
                'description': 'NCBila'
            },
            {
                'id': 178,
                'description': 'NCGCWord'
            },
            {
                'id': 176,
                'description': 'NCNotaWi'
            },
            {
                'id': 179,
                'description': 'Seac Explorer'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 33,
                'name': 'Lorenza',
                'surname': 'Lunelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 96,
                'description': 'Dichiarazione Di Successione (versione 2)'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 33,
                'name': 'Lorenza',
                'surname': 'Lunelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 96,
                'description': 'Dichiarazione Di Successione (versione 2)'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 33,
                'name': 'Lorenza',
                'surname': 'Lunelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 96,
                'description': 'Dichiarazione Di Successione (versione 2)'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 33,
                'name': 'Lorenza',
                'surname': 'Lunelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 96,
                'description': 'Dichiarazione Di Successione (versione 2)'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 104,
                'description': 'Modello 730 (versione 2)'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 104,
                'description': 'Modello 730 (versione 2)'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 104,
                'description': 'Modello 730 (versione 2)'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 104,
                'description': 'Modello 730 (versione 2)'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 104,
                'description': 'Modello 730 (versione 2)'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-29',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-30',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-31',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 34,
                'name': 'Andrea',
                'surname': 'Maccabelli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 107,
                'description': 'Unico P. Fisiche 740 (versione 2)'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 20,
                'name': 'Alessandro',
                'surname': 'Fauri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 31,
                'name': 'Hicham',
                'surname': 'Imzi',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 175,
                'description': 'Collocamento (Portale Lavoro) (versione 2)'
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
        'date': '2017-08-10',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 25,
                'name': 'Mauro',
                'surname': 'Fruet',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 32,
                'name': 'Herbert',
                'surname': 'Lorenzoni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 170,
                'description': 'SEI 170'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 61,
                'description': 'Aggiornamento Contratti'
            },
            {
                'id': 76,
                'description': 'Rilevazione Presenze Seac'
            },
            {
                'id': 134,
                'description': 'Tempo on web'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 61,
                'description': 'Aggiornamento Contratti'
            },
            {
                'id': 76,
                'description': 'Rilevazione Presenze Seac'
            },
            {
                'id': 134,
                'description': 'Tempo on web'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 61,
                'description': 'Aggiornamento Contratti'
            },
            {
                'id': 76,
                'description': 'Rilevazione Presenze Seac'
            },
            {
                'id': 134,
                'description': 'Tempo on web'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 27,
                'name': 'Lorenzo',
                'surname': 'Gilli',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 61,
                'description': 'Aggiornamento Contratti'
            },
            {
                'id': 76,
                'description': 'Rilevazione Presenze Seac'
            },
            {
                'id': 134,
                'description': 'Tempo on web'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-28',
        'areaNumber': 69,
        'employes': [
            {
                'id': 60,
                'name': 'Marco',
                'surname': 'Serra',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 182,
                'description': 'Console de visualizzazione stato fattura'
            },
            {
                'id': 183,
                'description': 'Fattura PA Monitor'
            },
            {
                'id': 188,
                'description': 'Fatturazione 50&Piu’ Fenacom (versione 2)'
            },
            {
                'id': 181,
                'description': 'Gestione ordini terminali motorola'
            },
            {
                'id': 38,
                'description': 'Gestione Pratiche'
            },
            {
                'id': 98,
                'description': 'Modelli Invciv (versione 2)'
            },
            {
                'id': 13,
                'description': 'Riscossione Quote'
            },
            {
                'id': 187,
                'description': 'Servizio invio fatture elettroniche a SDI'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-21',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-22',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-23',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-24',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-25',
        'areaNumber': 69,
        'employes': [
            {
                'id': 61,
                'name': 'Luana',
                'surname': 'Stedile',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            },
            {
                'id': 64,
                'name': 'Danilo',
                'surname': 'Tasin',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 180,
                'description': 'Gestione comissione Seac'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
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
    },
    {
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
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
    },
    {
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
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
    },
    {
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
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
    },
    {
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 74,
                'name': 'Andrea',
                'surname': 'Zendri',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
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
    },
    {
        'date': '2017-08-10',
        'areaNumber': 69,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 174,
                'description': 'Website BitLife'
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
        'date': '2017-08-11',
        'areaNumber': 69,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 174,
                'description': 'Website BitLife'
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
        'date': '2017-08-14',
        'areaNumber': 69,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 174,
                'description': 'Website BitLife'
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
        'date': '2017-08-16',
        'areaNumber': 69,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 174,
                'description': 'Website BitLife'
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
        'date': '2017-08-17',
        'areaNumber': 69,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 174,
                'description': 'Website BitLife'
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
        'date': '2017-08-18',
        'areaNumber': 69,
        'employes': [
            {
                'id': 66,
                'name': 'Guido',
                'surname': 'Zeni',
                'profile': 1,
                'state': 2,
                'groups': [

                ],
                'areaList': [

                ]
            }
        ],
        'areas': [
            {
                'id': 174,
                'description': 'Website BitLife'
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
