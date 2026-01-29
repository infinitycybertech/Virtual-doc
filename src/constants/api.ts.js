// API Documentation constants in Xitsonga
export const API_DOCS_TS = {
  title: 'VirtualDoc AI API',
  subtitle: 'Ku hlanganisa vuswikoti bya AI bya vutshunguri lebyi nga le henhla eka tiapplication ta wena',
  description: 'Matsalwa ya nkoka ya API ya vadyondzi ku hlanganisa na sisiteme ya hina ya AI ya vutshunguri, ku katsa na ku vulavula na vayingisi, ku kambisisa rihanyo, na tindlela to ka tirhisiwa ta ku vulavula.',
  
  HERO: {
    title: 'VirtualDoc AI API',
    subtitle: 'Ku Hlanganisa ka Medical AI ku Endliwile ku Olova',
    description: 'Aka rifu ra rihanyo hi API ya hina leyi nga helela ya medical AI. Kuma switirhisiwa swa xiyimo xa le henhla swa ku kamela, tisisiteme ta ku vulavula na vayingisi, na tindlela ta ku vulavula ta vutshunguri leti sirhelelekeke.',
    features: [
      'Ku kamela ko tiyiseka loku khuthaziwaka hi AI',
      'Ku vulavula na vayingisi loku sirhelelekeke',
      'Ku vulavula ka vutshunguri ka nkarhi wa sweswi',
      'Switirhisiwa swa ku kambisisa rihanyo',
      'Xivumbeko xa HIPAA lexi fambelanaka'
    ]
  },

  GETTING_STARTED: {
    title: 'Ku Sungula',
    subtitle: 'Sungula ku hlanganisa hi timinete',
    steps: [
      {
        title: 'Kuma API Key',
        description: 'Tsarisa eka akhawunti ya mudyondzi u kuma nsungo wa wena wa API eka developer dashboard.',
        code: 'const API_KEY = "your_api_key_here";'
      },
      {
        title: 'Nghenisa SDK',
        description: 'Nghenisa JavaScript SDK ya hina ku endla leswaku ku olova ku hlanganisa na tiapplication ta wena.',
        code: 'npm install @virtualdoc/medical-ai-sdk'
      },
      {
        title: 'Sungula Client',
        description: 'Sungula muchayisi wa VirtualDoc hi nsungo wa wena wa API u sungula ku endla swikombelo.',
        code: `import { VirtualDocClient } from '@virtualdoc/medical-ai-sdk';

const client = new VirtualDocClient({
  apiKey: process.env.VIRTUALDOC_API_KEY,
  environment: 'production' // kumbe 'sandbox'
});`
      }
    ]
  },

  AUTHENTICATION: {
    title: 'Ku Tiyisisa',
    subtitle: 'Ku nghena eka API loku sirhelelekeke hi ku tiyisisa loku simekeke eka token',
    description: 'Hinkwaswo swikombelo swa API swi lava ku tiyisisa hi ku tirhisa tinsungo ta API. Katsa nsungo wa wena wa API eka nhloko wa Authorization wa swikombelo hinkwaswo.',
    
    example: {
      title: 'Xikombiso xa Nhloko',
      code: `fetch('https://api.virtualdoc.com/v1/health-assessment', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    patientId: 'patient_123',
    symptoms: ['headache', 'fever']
  })
});`
    }
  },

  ENDPOINTS: {
    title: 'API Endpoints',
    subtitle: 'Xileriso xa nkoka xa ti-endpoint',
    categories: [
      {
        name: 'Ku Kambisisa Rihanyo',
        description: 'Ku kambisisa rihanyo loku khuthaziwaka hi AI na ku anarhisi swivutiso',
        endpoints: [
          {
            method: 'POST',
            path: '/v1/health-assessment',
            title: 'Ku Tumbuluxa Ku Kambisisa Rihanyo',
            description: 'Rumela swivutiso swa muayisi u kuma switsundzuxo swa ku kambisisa rihanyo leswi khuthaziwaka hi AI.',
            parameters: [
              { name: 'symptoms', type: 'array', required: true, description: 'Nxaxamelo wa swivutiso swa muayisi' },
              { name: 'age', type: 'number', required: true, description: 'Malembe ya muayisi' },
              { name: 'gender', type: 'string', required: true, description: 'Mbewu ya muayisi (munna/wansati/swin\'wana)' },
              { name: 'medical_history', type: 'array', required: false, description: 'Swiletelo swa rihanyo swa khale' }
            ],
            response: {
              assessment_id: 'string',
              recommendations: 'array',
              urgency_level: 'string',
              confidence_score: 'number'
            }
          }
        ]
      },
      {
        name: 'Ku Vulavula',
        description: 'Ku lawula ku vulavula ka muayisi-dokodela',
        endpoints: [
          {
            method: 'POST',
            path: '/v1/consultations',
            title: 'Ku Tumbuluxa Ku Vulavula',
            description: 'Ku sungula session leyintshwa ya ku vulavula ka muayisi.',
            parameters: [
              { name: 'patient_id', type: 'string', required: true, description: 'Xikombiso xa muayisi lexo hlawulekeke' },
              { name: 'doctor_id', type: 'string', required: true, description: 'Xikombiso xa dokodela loyi hoxakiweke' },
              { name: 'consultation_type', type: 'string', required: true, description: 'Xika xa ku vulavula (xiviri, specialist, emergency)' }
            ],
            response: {
              consultation_id: 'string',
              session_token: 'string',
              estimated_duration: 'number'
            }
          }
        ]
      }
    ]
  },

  CODE_EXAMPLES: {
    title: 'Swikombiso swa Code',
    subtitle: 'Swikombiso swa nkarhi wa ntiyiso swa ku tirhisa API',
    examples: [
      {
        title: 'Ku Kambisisa Rihanyo',
        description: 'Kambisisa swivutiso swa muayisi u kuma titsundzuxo ta AI',
        code: `const assessment = await client.healthAssessment({
  patientId: 'patient_123',
  symptoms: ['nhloko wu vava', 'hisa'],
  age: 35,
  gender: 'female'
});

console.log(assessment.recommendations);`
      },
      {
        title: 'Ku Sungula Ku Vulavula',
        description: 'Sungula session ya ku vulavula na AI doctor',
        code: `const consultation = await client.startConsultation({
  patientId: 'patient_123',
  type: 'general',
  symptoms: 'nhloko wu vava na ku vilela'
});

console.log(consultation.sessionId);`
      },
      {
        title: 'Medical Chat',
        description: 'Vulavula na medical AI assistant',
        code: `const response = await client.chat({
  message: 'Ndza vilela naswona ndzi na hisa. Xana ndzi fanele ku endla yini?',
  sessionId: 'session_456',
  language: 'ts'
});

console.log(response.message);`
      }
    ]
  },

  RESPONSE_CODES: {
    title: 'Tinkodhi ta Nhlamulo',
    subtitle: 'Tinkodhi ta xiyimo xa HTTP na ku langutisisa tihoxo',
    codes: [
      { code: '200', status: 'OK', description: 'Xikombelo xi hundzuke' },
      { code: '201', status: 'Created', description: 'Xilo xi tumbuluxiwile hi ndlela leyi hundzukaka' },
      { code: '400', status: 'Bad Request', description: 'Swiphemu swa xikombelo leswi nga ri swona' },
      { code: '401', status: 'Unauthorized', description: 'API key leyi nga ri swona kumbe yi nga ri kona' },
      { code: '403', status: 'Forbidden', description: 'Mpfumelelo wo nga ri wa kwalahu' },
      { code: '404', status: 'Not Found', description: 'Xilo a xi kumekanga' },
      { code: '429', status: 'Rate Limited', description: 'Swikombelo swo tala hinkwaswo' },
      { code: '500', status: 'Server Error', description: 'Xihoxo xa le ndzeni xa sevha' }
    ]
  },

  SDKs: {
    title: 'SDKs & Libraries',
    subtitle: 'Tilibrary ta ximfumo ta tindzimi ta minongonoko leyi dumekeke',
    libraries: [
      {
        name: 'JavaScript/Node.js',
        description: 'SDK ya nkoka ya JavaScript',
        installation: 'npm install @virtualdoc/medical-ai-sdk',
        github: 'https://github.com/virtualdoc/medical-ai-js-sdk'
      },
      {
        name: 'Python',
        description: 'Python library ya tiapplication ta data science',
        installation: 'pip install virtualdoc-medical-ai',
        github: 'https://github.com/virtualdoc/medical-ai-python-sdk'
      },
      {
        name: 'PHP',
        description: 'PHP library ya tiapplication ta rihanyo',
        installation: 'composer require virtualdoc/medical-ai-php',
        github: 'https://github.com/virtualdoc/medical-ai-php-sdk'
      },
      {
        name: 'React Components',
        description: 'Ti-component ta React leti akiweke eka UI ya vutshunguri',
        installation: 'npm install @virtualdoc/react-medical-ui',
        github: 'https://github.com/virtualdoc/react-medical-ui'
      }
    ]
  },

  RATE_LIMITS: {
    title: 'Mpimo wa Swikombelo',
    subtitle: 'Mpimo wa ku tirhisa API na maendlelo lamanene',
    limits: [
      { tier: 'Mahala', requests: '1,000/nhweti', rate: '10/minete', features: 'Ku kambisisa rihanyo ka sisiseko' },
      { tier: 'Mudyondzi', requests: '10,000/nhweti', rate: '100/minete', features: 'Ku kambisisa rihanyo + Chat' },
      { tier: 'Profexhinali', requests: '100,000/nhweti', rate: '1,000/minete', features: 'Ku nghena ka API hinkwako' },
      { tier: 'Enterprise', requests: 'Ku nga heriki', rate: 'Ku endleriwa', features: 'Nseketelo wa ku hlanganisa loku endleriwaka' }
    ]
  },

  SUPPORT: {
    title: 'Nseketelo & Switirhisiwa',
    subtitle: 'Kuma mpfuno na ku hlanganisa ka wena',
    resources: [
      {
        title: 'Matsalwa ya Vadyondzi',
        description: 'Tikhodi leti helela na swikombiso',
        link: '/docs',
        icon: 'book'
      },
      {
        title: 'Xileriso xa API',
        description: 'Matsalwa ya vuxokoxoko ya ti-endpoint',
        link: '/api-reference',
        icon: 'code'
      },
      {
        title: 'Forum ya Vaaki',
        description: 'Hlanganisa na vadyondzi van\'wana',
        link: '/community',
        icon: 'users'
      },
      {
        title: 'Swikombelo swa Nseketelo',
        description: 'Nseketelo wa xitekiniki wa 24/7',
        link: '/support',
        icon: 'help-circle'
      }
    ]
  }
};