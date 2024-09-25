#  Computer Item Management Dashboard(React+Vite+Typescript+Redux)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-client-side-roy-Pritom
   
2. Navigate to the project directory::

   ```bash
   cd computer-management-dashboard
3. Install dependencies:

   ```bash
   npm install
4. Running Locally:

   ```bash
   npm run dev



## Features

- **Secure Authentication:**
  - Users can register and log in securely using JWT token authentication.

- **Product Management:**
  - View a list of computer products.
  - Add new products with details.
  - Update existing products with new information.
  - Delete a single product securely.
  - Delete multiple products at once.

- **Sales:**
  - View a list of sales.
  - Filter sales history by daily, weekly, monthly, or yearly.

- **Search and Filters:**
  - Search for products by name.
  - Filter products by various categories.

## Folder Structure

- `src/components`: React components.
- `src/pages`: Application pages.
- `src/redux`: Redux store setup, actions, reducers.
- `src/redux/api`: API services.
- `src/redux/features`: State management

## Usage

### Secure Authentication

- Register a new user.
- Log in with valid credentials.
- Obtain a JWT token for authenticated requests.

### Product Management

- View a list of computer products.
- Add new products with details such as name, price, category, etc.
- Update existing products with new information.
- Delete a single product securely.
- Delete multiple products at once (batch deletion).

### Sales

- View a list of sales with details.
- Filter sales history by daily, weekly, monthly, or yearly periods.

### Search and Filters

- Search for specific products by name.
- Filter products by various categories for easy navigation.


**Live link (netlify):**

   Live link: https://illustrious-cascaron-28b513.netlify.app

## Contributing

   

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
