# React + TypeScript Template

---

## Stack Overview

- React 19
- TypeScript 5.8
- Vite 6
- Tailwind CSS v4
- Lucide React (icons)
- ESLint 9
- Prettier 3
- Jest + React Testing Library

---

## Quick Start

```bash
npm install
npm run dev           # Start dev server
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run build         # Build for production
npm run preview       # Preview production build
npm run test          # Run unit tests with Jest
```

---

## Project Structure

```
template-react-ts/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── __tests__/
│   │       ├── Header.test.tsx
│   │       └── ThemeToggle.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── jest.config.cjs
├── jest.setup.ts
├── tsconfig.jest.json
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── Readme.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Theme Toggle

This template includes a simple light/dark theme toggle using a CSS-first approach.

The theme is implemented with CSS variables defined in `index.css` and toggled using a `light` class on the `<html>` element.

### CSS Theme Setup (index.css):

```css
@import 'tailwindcss';

@custom-variant light (&:where(.light, .light *));

@theme {
  --color-background: #2a2a2a;
  --color-text: #f7f7f7;
  --color-border: #9e9e9e;
  --color-muted: #b1b1b1;
  --color-accent: #f58634;
}

@layer theme {
  .light {
    --color-background: #f7f7f7;
    --color-text: #2a2a2a;
    --color-border: #e1e1e1;
    --color-muted: #5e5e5e;
  }
}
```

---

### ThemeToggle Component:

The `ThemeToggle` component toggles the `light` class on the `<html>` element:

```tsx
iimport { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from '../ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('light')
  })

  it('toggles the light class on html element when clicked', async () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()

    expect(document.documentElement.classList.contains('light')).toBe(false)

    await userEvent.click(button)
    expect(document.documentElement.classList.contains('light')).toBe(true)

    await userEvent.click(button)
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })
})
```

---

## Icons with Lucide

This template includes https://lucide.dev/icons for using icons as React components.

Example usage:

```tsx
import { Sun, Moon } from 'lucide-react'
;<Sun className="w-5 h-5 text-text" />
```

---

## Testing

This template includes Jest https://jestjs.io/ with React Testing Library https://testing-library.com/ for unit testing.

Run tests:

```bash
npm run test          # Run all tests
npm run test:watch    # Watch mode for tests
npm run test:coverage # Generate coverage report
```

Example test in `src/components/__tests__/Header.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the header title', () => {
    render(<Header />)
    const title = screen.getByText(/React \+ Vite \+ Tailwind CSS/i)
    expect(title).toBeInTheDocument()
  })
})
```

---

## Recommended VS Code Extensions

To get the best developer experience:

- ESLint – by Dirk Baeumer
- Prettier – Code formatter – by Prettier
- Tailwind CSS IntelliSense – by Tailwind Labs
- PostCSS Language Support – by csstools
- Lucide Icons (optional preview) – by Lucide.dev

---
