# Tab Cloner

Tab Cloner is a Chrome extension that enables users to duplicate the active
browser tab swiftly using a keyboard shortcut, enhancing browsing efficiency.

## Features

- **Instant Tab Duplication**: Duplicate the current tab instantly with a simple
  shortcut.
- **Keyboard Shortcut**: Use `Control + U` (or `Command + U` on Mac) to clone
  the active tab.

## Installation

Install the extension from the
[Chrome Web Store](https://chromewebstore.google.com/).

## Development

To set up the development environment for Tab Cloner, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/pHo9UBenaA/tab-cloner.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd tab-cloner
   ```

3. **Build the Extension**:

   ```bash
   deno task build
   ```

4. **Load the Extension into Chrome**:

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click "Load unpacked" and select the `dist` directory within your project
     folder.

## License

This project is licensed under the MIT License. See the
[LICENSE](https://github.com/pHo9UBenaA/tab-cloner/blob/master/LICENSE) file for
details.

## Important Information

- **Incognito Mode**: To enable the extension in incognito mode, follow the
  instructions on
  [Google Support](https://support.google.com/chrome/answer/95464).
- **Shortcut Issues**: If the keyboard shortcut doesn't work, navigate to
  `chrome://extensions/shortcuts` in Chrome and reassign the keys as needed.

For more details, visit the
[Tab Cloner GitHub Repository](https://github.com/pHo9UBenaA/tab-cloner).
