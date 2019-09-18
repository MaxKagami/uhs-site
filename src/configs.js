export default {
  backendUrl: 'http://localhost:3000/',
  frontendUrl: 'http://localhost:3000/regop-komi-ru/',
  images: {
    logo: '@/assets/logo.png',
    main_background: '@/assets/bg.jpg'
  },
  answers: {
    answers_resource: '/answers'
  },
  contacts: {
    callback_form: true
  },
  documents: {
    group_resource: '/documents?document_group_id=',
    forms_resource: '/document_forms',
    documents_resource: '/form_mappings?document_form_id=',
    constituent_id: '1',
    general_id: '2',
    disclosure_id: '3',
    protection_id: '4'
  },
  news: {
    posts_resource: '/news_posts/'
  },
  regions: {
    regions_resource: '/regions'
  },
  services: {
    services_url: '/services',
    mapping_url: '/service_mappings?service_id='
  }
}
