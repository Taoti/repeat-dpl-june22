# CHANGELOG

## 1.1.0

### Basic Page
- Added templates and styles for REPEAT basic page, to be included by default on theme install

## 1.0.0

### Documentation
- Added changelog

## 0.2.0

### Overview
- Created a Mimic screenshot/logo :)
- Update gitignore definitions accordingly
- Updated readme documentation to reflect changes
- Output all compiled code to a `/dist` directory vs having source and compiled files being mixed together in the `/css` or `/js` directories.
- Minimized CSS and JS are generated when the gulp tasks are ran outside of a local Lando environment (e.g. on Pantheon servers)

### Gulp
- Cleaned up require statements
- Simplified logic
- Removed unneeded dependencies and logic
- Added Webpack layer to manage the JS compilation
- Added PostCSS layer to manage CSS compilation
- Updated both `css` and `watch` tasks to include JS compilation as well as sass -> css
- Removed livereload since it doesn't work on a lando environment and it doesn't sound like our devs use it

### PostCSS
- Added a postcss configuration file to manage presets and plugins for CSS compilation
- Plugins:
  - Autoprefixer
- Presets:
  - None yet

### Babel
- Added a Babel configuration file to manage presets and plugins ran on the compiled Javascript
- Babel is responsible for creating readable compiled code according to the browsers the project supports (@see Browserslist below)

### Webpack
- Enables developers to create modular js components (ES Modules)
- Leverages Babel for JS translation
- Currently does not manage SASS compilation, but could be leveraged to bundle both compiled CSS and JS in a componentized manner for inclusion into a Drupal library, as an example
- We can also add code linting for JS here in the future

### Browserslist
- A simple definition has been added to the `package.json` file to manage which browsers the project/theme supports.
- Currently we've adopted the Google Apps default configuration shared on NPM which includes the last two major versions of popular browsers, while dropping IE support. This does have Edge support (last two major versions)

### JS
- `/js/main.js` is now the entry point for the global js library of the theme. This file is used to create a compiled js file (e.g. `/dist/js/main.js`) via the Gulp/Webpack/Babel stack
- Removed unneeded or dated javascript e.g. scrollbar classes and anchorlinks to create a clean, starter main.js file to work with

### Dependencies
- Theme dependencies are now managed via NPM and appended to the package.json file
- These dependencies also are now leveraged to import the what-input and normalize.css functionality/styling and defined as libraries add to the `mimic.libraries.yml` file

## 0.1.0

### Mixins
- Added mixins for grids using display: grid
- Updated containers mixins to have less complicated logic
- Added the responsive typography mixin
- Added a mixin that truncates text

### Settings
- Added a few common design breakpoints like max design size (1920) and a larger $width--xl
- Added the base for importing fonts and font family variables
- Added the logic of base font 10px / body font 2em (also added it to .body in base.scss)
- Added a default shadow

### Folder structure/Layout
- `1. mixins, 2. global, 3. layout, 4. components`
- Broke down header and main menu into general/mobile/desktop files
- Updated `4. components` structure so that it has the most used folders, such as misc, nodes, paragraphs, etc.

### Theming/Template
- Updated a few files for better position of the media query (block-branding.scss and block-search.scss)
- Added containers (.l-container) to both header and footer
- Updated page.html.twig so that all regions come from includes
- Added a default pageheader embed that works for all pages, including non nodes
- Changed the location of the `#main-content` anchor link to the bottom of the pageheader template, because that's the correct place to scroll after skipping content
- Added anchor link functions to both clicking links and loading pages in a separate file (anchor-links.js) to keep main.js clean
