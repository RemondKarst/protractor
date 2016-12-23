exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    // 'instructor-spec.js',
  // 'question-specs.js',
  'student-spec.js'
  ],
  baseUrl: 'http://localhost:4200',
  useAllAngular2AppRoots: true
};