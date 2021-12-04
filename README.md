[![npm version](https://badge.fury.io/js/react-clipboard-button.svg)](https://badge.fury.io/js/react-clipboard-button)

## react-clipboard-button

- [x] very light (~33KB not minified)
- [x] only one dependency ([clipboard.js](https://clipboardjs.com/))
- [x] compatibel with IE11+

**Install**
```bash
npm install react-clipboard-button
```

**Use**

```tsx
<CopyToClipboardButton 
  text={`Hello !`}
  onSuccess={() => console.log('success!')}
  onError={() => console.log('error!')}
>
  <button>Copy To Clipboard !</button>
</CopyToClipboardButton>
```