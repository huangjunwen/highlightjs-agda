/*
Language: Agda
Author: Huang Jun Wen<kassarar@gmail.com>
Description: Agda syntax
*/

// Some of the patterns are from Prismjs !!

module.exports = function (hljs) {
  return {
    name: 'Agda',
    aliases: ['agda'],
    keywords: {
      keyword: [
        'Set',
        'abstract',
        'constructor',
        'data',
        'eta-equality',
        'field',
        'forall',
        'hiding',
        'import',
        'in',
        'inductive',
        'infix',
        'infixl',
        'infixr',
        'instance',
        'let',
        'macro',
        'module',
        'mutual',
        'no-eta-equality',
        'open',
        'overlap',
        'pattern',
        'postulate',
        'primitive',
        'private',
        'public',
        'quote',
        'quoteContext',
        'quoteGoal',
        'quoteTerm',
        'record',
        'renaming',
        'rewrite',
        'syntax',
        'tactic',
        'unquote',
        'unquoteDecl',
        'unquoteDef',
        'using',
        'variable',
        'where',
        'with'
      ]
    },
    contains: [
      {
        className: 'comment',
        begin: '--',
        end: '\n'
      },
      {
        className: 'comment',
        begin: '{-',
        end: '-}'
      },
      {
        className: 'string',
        begin: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/
      },
      {
        className: 'title', // xxx :
        begin: /(?<=^\s*)(\S+)(?=\s*:)/
      },
      {
        className: 'name', // data xxx :
        begin: /(?<=^(data|record)\s+)\S+/
      },
      {
        className: 'operator',
        begin: /(?<=^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/
      },
      {
        className: 'operator',
        begin: /(?<=^\s*|\s)λ(?=\{)/
      },
      {
        className: 'punctuation',
        begin: /[(){}⦃⦄.;@]/
      }
    ]
  }
}

