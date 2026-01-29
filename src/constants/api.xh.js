// API Documentation constants in isiXhosa
export const API_DOCS_XH = {
  title: 'VirtualDoc AI API',
  subtitle: 'Dibanisa izakhono ze-AI zonyango eziphezulu kwizicelo zakho',
  description: 'Uxwebhu olupheleleyo lwe-API yaabaphuhlisi ukuze badibanise nenkqubo yethu ye-AI yonyango, kubandakanywa ukubonisana nezigulana, uvavanyo lwempilo, kunye neendlela zonxibelelwano olukhuselekileyo.',
  
  HERO: {
    title: 'VirtualDoc AI API',
    subtitle: 'Ukudibanisa kwe-Medical AI Kwenziwe Lula',
    description: 'Yakha ikamva lokhathalelo lwempilo nge-API yethu epheleleyo ye-medical AI. Fikelela kwizixhobo eziphambili zokuxilonga, iinkqubo zokubonisana nezigulana, kunye neendlela zonxibelelwano zonyango olukhuselekileyo.',
    features: [
      'Ukuxilonga okuphambili okukhuthazwa yi-AI',
      'Ukubonisana nezigulana okukhuselekileyo',
      'Incoko yonyango yexesha lokwenyani',
      'Izixhobo zovavanyo lwempilo',
      'Ingqalasela ye-HIPAA ehambelanayo'
    ]
  },

  GETTING_STARTED: {
    title: 'Ukuqalisa',
    subtitle: 'Qalisa ukudibanisa ngemizuzu',
    steps: [
      {
        title: 'Fumana i-API Key',
        description: 'Bhalisa kwi-akhawunti yomphuhli uze ufumane isitshixo sakho se-API kwi-developer dashboard.',
        code: 'const API_KEY = "your_api_key_here";'
      },
      {
        title: 'Fakela i-SDK',
        description: 'Fakela i-JavaScript SDK yethu ukuze kube lula ukudibanisa nezicelo zakho.',
        code: 'npm install @virtualdoc/medical-ai-sdk'
      },
      {
        title: 'Qalisa umThengisi',
        description: 'Qalisa umthengi we-VirtualDoc ngesitshixo sakho se-API uze uqalise ukwenza izicelo.',
        code: `import { VirtualDocClient } from '@virtualdoc/medical-ai-sdk';

const client = new VirtualDocClient({
  apiKey: process.env.VIRTUALDOC_API_KEY,
  environment: 'production' // okanye 'sandbox'
});`
      }
    ]
  },

  AUTHENTICATION: {
    title: 'Ukuqinisekisa',
    subtitle: 'Ukufikelela kwe-API okukhuselekileyo ngoqinisekiso olususelwa kwi-token',
    description: 'Zonke izicelo ze-API zifuna ukuqinisekiswa kusetyenziswa izitshixo ze-API. Bandakanya isitshixo sakho se-API kwintloko ye-Authorization yazo zonke izicelo.',
    example: {
      title: 'Umzekelo wokuQinisekisa',
      code: `curl -X GET "https://api.virtualdoc.com/v1/health-check" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    }
  },

  ENDPOINTS: {
    title: 'Iindlela ze-API',
    subtitle: 'Isalathiso esipheleleyo seendlela ezifumanekayo',
    categories: [
      {
        name: 'Uvavanyo Lwempilo',
        description: 'Uvavanyo lwempilo olukhuthazwa yi-AI kunye nohlalutyo lweempawu',
        endpoints: [
          {
            method: 'POST',
            path: '/v1/health-assessment',
            title: 'Yenza Uvavanyo Lwempilo',
            description: 'Ngenisa iimpawu zesigulana uze ufumane iingcebiso zokuvavanya impilo ezikhuthazwa yi-AI.',
            parameters: [
              { name: 'symptoms', type: 'array', required: true, description: 'Uluhlu lweempawu zesigulana' },
              { name: 'age', type: 'number', required: true, description: 'Ubudala besigulana' },
              { name: 'gender', type: 'string', required: true, description: 'Isini sesigulana (indoda/ibhinqa/okunye)' },
              { name: 'medical_history', type: 'array', required: false, description: 'Iimeko zonyango zangaphambili' }
            ],
            response: {
              assessment_id: 'string',
              recommendations: 'array',
              urgency_level: 'string',
              confidence_score: 'number'
            }
          }
        ]
      }
    ]
  },

  CODE_EXAMPLES: {
    title: 'Imizekelo yeKhowudi',
    subtitle: 'Iziqwenga zekhowudi ezilungele ukusetyenziswa kwiimeko eziqhelekileyo',
    examples: [
      {
        title: 'Uvavanyo Lwempilo',
        language: 'javascript',
        description: 'Ngenisa iimpawu zesigulana kuhlalutyo lwe-AI',
        code: `const assessment = await client.healthAssessment.create({
  symptoms: ['intloko ebuhlungu', 'umkhuhlane', 'ukudiniwa'],
  age: 35,
  gender: 'ibhinqa',
  medical_history: ['ukuphakama komgxininiso']
});

console.log('Uvavanyo:', assessment.recommendations);
console.log('Inqanaba Langxamiseko:', assessment.urgency_level);`
      }
    ]
  },

  RESPONSE_CODES: {
    title: 'Iikhowudi zeeMpendulo',
    subtitle: 'Iikhowudi ze-HTTP status kunye nokujongana neempazamo',
    codes: [
      { code: '200', status: 'KULUNGILE', description: 'Isicelo siphumelele' },
      { code: '201', status: 'Yenziwe', description: 'Isibonelelo senziwe ngempumelelo' },
      { code: '400', status: 'Isicelo Esingalunganga', description: 'Iiparamitha zesicelo ezingasebenziyo' },
      { code: '401', status: 'Akugunyaziwe', description: 'Isitshixo se-API esingasebenziyo okanye esingekhoyo' },
      { code: '403', status: 'Akuvumelekanga', description: 'Iimvume ezingonelanga' },
      { code: '404', status: 'Ayifumaneki', description: 'Isibonelelo asifumaneki' },
      { code: '429', status: 'Umthamo Unikwe', description: 'Izicelo ezininzi kakhulu' },
      { code: '500', status: 'Imposiso yeSeva', description: 'Imposiso yangaphakathi yeseva' }
    ]
  },

  SDKs: {
    title: 'Ii-SDK kunye neeThala zeencwadi',
    subtitle: 'Amathala eencwadi asemthethweni eelwimi zomngangatho ezithandwayo',
    libraries: [
      {
        name: 'JavaScript/Node.js',
        description: 'I-SDK epheleleyo ye-JavaScript kunye nezicelo ze-Node.js',
        installation: 'npm install @virtualdoc/medical-ai-sdk',
        github: 'https://github.com/virtualdoc/medical-ai-js-sdk'
      }
    ]
  },

  RATE_LIMITS: {
    title: 'Imida yezinga',
    subtitle: 'Imida yokusetyenziswa kwe-API kunye neendlela ezilungileyo',
    limits: [
      { tier: 'Simahla', requests: '1,000/nyanga', rate: '10/umzuzu', features: 'Uvavanyo lwempilo olusisiseko' },
      { tier: 'Umphuhlisi', requests: '10,000/nyanga', rate: '100/umzuzu', features: 'Uvavanyo lwempilo + Incoko' },
      { tier: 'Ubuchwepheshe', requests: '100,000/nyanga', rate: '1,000/umzuzu', features: 'Ukufikelela kwe-API okupheleleyo' },
      { tier: 'Ishishini', requests: 'Akuphelanga', rate: 'Kusezandleni', features: 'Inkxaso yokudibanisa yodidi' }
    ]
  },

  SUPPORT: {
    title: 'Inkxaso kunye neeZibonelelo',
    subtitle: 'Fumana uncedo ngokudibanisa kwakho',
    resources: [
      {
        title: 'Uxwebhu lomPhuhlisi',
        description: 'Izikhokelo ezipheleleyo kunye nezifundo',
        link: '/docs',
        icon: 'book'
      },
      {
        title: 'Isalathiso se-API',
        description: 'Uxwebhu oluneenkcukacha zendlela',
        link: '/api-reference',
        icon: 'code'
      },
      {
        title: 'Iforamu yoLuntu',
        description: 'Nxibelelana nabanye abaphuhlisi',
        link: '/community',
        icon: 'users'
      },
      {
        title: 'Amatikiti eNkxaso',
        description: 'Inkxaso yobuchwepheshe ye-24/7',
        link: '/support',
        icon: 'help-circle'
      }
    ]
  }
};