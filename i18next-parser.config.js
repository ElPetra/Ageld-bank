export default {
    contextSeparator: '_',
    createOldCatalogs: true,
    defaultNamespace: 'translation',
    defaultValue: (locale, namespace, key) => key,
    useKeysAsDefaultValue: true,
    indentation: 2,
    keepRemoved: false,
    lexers: {
        hbs: ['HandlebarsLexer'],
        handlebars: ['HandlebarsLexer'],

        htm: ['HTMLLexer'],
        html: ['HTMLLexer'],

        mjs: ['JavascriptLexer'],
        js: ['JavascriptLexer'],
        ts: ['JavascriptLexer'],
        jsx: ['JsxLexer'],
        tsx: ['JsxLexer'],

        default: ['JavascriptLexer']
    },
    lineEnding: 'auto',
    locales: ['en', 'ru'],
    keySeparator: false,
    namespaceSeparator: false,
    output: 'src/shared/model/i18n/locales/$LOCALE/$LOCALE.json',
    pluralSeparator: '_',
    input: ['src/**/*.{tsx,ts}'],
    sort: false,
    verbose: false,
    failOnWarnings: false,
    failOnUpdate: false,
    customValueTemplate: null,
    resetDefaultValueLocale: null,
    i18nextOptions: null,
    yamlOptions: null
};
