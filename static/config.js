var CONFIG = {
  enableUserSettings: false,
  showUserManual: false,
  title: { color: '#05668d', text: 'BASE DE CONHECIMENTO' },
  information:
    'Do you see something wrong? Please drop a <em>mail</em> to <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">someone@example.com</a>',
  photoUrl: { prefix: 'photos/', suffix: '.png' },
  startView: {
    photos: false,
    names: true,
    columnview: false,
    staffColumnview: false,
    showNrDepartments: true,
    showNrPeople: false
  },
  enableScreenCapture: true,
  levelColors: [
    '#FFFFFF',
    '#05668d',
    '#0071BA',
    '#D9DF39',
    '#cfb303'
  ],
  editCommand: '_edit',
  dataFields: [{ name: 'Location', type: 'text' }],
  personProperties: [
    { name: 'Telefone', type: 'text', order: 0 },
    { name: 'Email', type: 'email', order: 1 }
    /*{ name: 'Website', type: 'url', order: 2 },
      { name: 'Pais', type: 'text', order: 3 },
    { name: 'Cidade', type: 'text', order: 4 },
    { name: 'Rua', type: 'text', order: 5 }*/
  ]
}
