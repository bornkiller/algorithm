module.exports = {
  '*.ts': [
    'tslint --fix',
    'git add'
  ],
  '*.js': [
    'eslint --fix',
    'git add'
  ]
};
