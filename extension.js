
const vscode = require('vscode');

function activate(context) {
  const provider = vscode.languages.registerCompletionItemProvider(
    'click',
    {
      provideCompletionItems(document, position) {
        const keywords = [
          'elementclass', 'input', 'output', 'Queue', 'Classifier',
          'FromDevice', 'ToDevice', '->', '=>'
        ];

        return keywords.map(keyword => {
          const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
          item.insertText = keyword;
          return item;
        });
      }
    },
    '' // Trigger on every character
  );

  context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
