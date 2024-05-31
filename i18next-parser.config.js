export default {
    contextSeparator: '_',
    createOldCatalogs: true,
    defaultNamespace: 'translation',
    defaultValue: (locale, namespace, key) => key,
    useKeysAsDefaultValue: true,
    indentation: 2,
    keepRemoved: false,
    keySeparator: '.',
    lexers: {
        hbs: ['HandlebarsLexer'],
        handlebars: ['HandlebarsLexer'],

        htm: ['HTMLLexer'],
        html: ['HTMLLexer'],

        mjs: ['JavascriptLexer'],
        js: ['JavascriptLexer'], // if you're writing jsx inside .js files, change this to JsxLexer
        ts: ['JavascriptLexer'],
        jsx: ['JsxLexer'],
        tsx: ['JsxLexer'],

        default: ['JavascriptLexer']
    },
    lineEnding: 'auto',
    locales: ['en', 'ru'],
    namespaceSeparator: ':',
    output: 'src/shared/model/i18n/locales/$LOCALE/$LOCALE.json',
    pluralSeparator: '_',
    input: [
        'src/shared/**/*.{tsx,ts}',
        'src/widgets/**/*.{tsx,ts}',
        'src/entities/**/*.{tsx,ts}',
        'src/features/**/*.{tsx,ts}'
    ],
    sort: false,
    verbose: false,
    failOnWarnings: false,
    failOnUpdate: false,
    customValueTemplate: null,
    resetDefaultValueLocale: null,
    i18nextOptions: null,
    yamlOptions: null
};
