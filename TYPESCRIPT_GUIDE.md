# TypeScript Setup Guide

This portfolio uses TypeScript for type safety and better development experience.

## What is TypeScript?

TypeScript adds **type checking** to JavaScript:
- Catch errors before runtime
- Better IDE suggestions
- Self-documenting code
- Safer refactoring

## Project Files

### Configuration
- **tsconfig.json** - TypeScript compiler options
- **next-env.d.ts** - Auto-generated Next.js types (don't edit)

### Typed Files
- `app/layout.tsx` - Root layout with metadata types
- `app/page.tsx` - Homepage
- `components/**/*.tsx` - React components
- `data/content.ts` - Content data with types

## Type Examples

### React Component
```typescript
interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({ 
  id, 
  title, 
  description,
  technologies 
}: ProjectCardProps) {
  // Component code
}
```

### Data Types
```typescript
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubLink?: string;  // Optional
  liveLink?: string | null;
}

interface PortfolioContent {
  hero: { /* ... */ };
  projects: Project[];
  learning: { /* ... */ };
}
```

## Common TypeScript Patterns

### Optional Properties
```typescript
interface Props {
  required: string;
  optional?: string;  // May not be provided
}
```

### Union Types
```typescript
type Status = "draft" | "published" | "archived";
```

### Arrays
```typescript
const items: string[] = ["item1", "item2"];
const numbers: Array<number> = [1, 2, 3];
```

### Functions
```typescript
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
};
```

## When to Use Types

### Components
Always type component props:
```typescript
// ✅ Good
interface MyComponentProps {
  title: string;
  onClick: () => void;
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  // ...
}

// ❌ Avoid
export default function MyComponent(props: any) {
  // ...
}
```

### Data
Type your data structures:
```typescript
// ✅ Good
const user: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// ❌ Avoid
const user: any = {
  name: "John",
  age: 30,
};
```

## TypeScript in This Project

### data/content.ts
Contains all portfolio content with proper typing:
```typescript
export const portfolioContent = {
  hero: {
    name: "Your Name",
    title: "Your Title",
    statement: "Your statement",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },
  projects: [ /* typed as Project[] */ ],
  learning: { /* typed structure */ },
  // ...
};
```

### Components
All components are fully typed:
- Props are defined with interfaces
- Return types are clear
- IDE autocomplete works

## Disabling TypeScript (Not Recommended)

If you prefer plain JavaScript, you can rename files:
- `.tsx` → `.jsx`
- `.ts` → `.js`

But TypeScript is highly recommended for maintainability!

## Learning TypeScript

### Resources
- **Official Docs**: https://www.typescriptlang.org/docs/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/handbook/
- **React TypeScript Cheatsheet**: https://react-typescript-cheatsheet.netlify.app/

### Quick Tips
1. Use `interface` for object shapes
2. Use `type` for anything else
3. Use `as const` to make objects immutable
4. Hover over code in VS Code to see inferred types
5. Use `Omit<Type, Key>` to exclude properties
6. Use `Partial<Type>` to make all properties optional
7. Use `Pick<Type, Keys>` to select properties

## Common Errors & Solutions

### "Property does not exist on type"
```typescript
// ❌ Error: 'foo' does not exist on type
const obj: { bar: string } = { bar: "value" };
console.log(obj.foo);

// ✅ Fix: Add the property to the type
const obj: { bar: string; foo: string } = { bar: "value", foo: "test" };
```

### "Type is not assignable"
```typescript
// ❌ Error: Type 'string' is not assignable to type 'number'
const num: number = "123";

// ✅ Fix: Use correct type or convert
const num: number = 123;
```

### "Cannot find name"
```typescript
// ❌ Error: Cannot find name 'myFunction'
myFunction();

// ✅ Fix: Make sure function is defined/imported
function myFunction() { }
myFunction();
```

## Best Practices

1. **Always type props** - Component interfaces first
2. **Use interfaces for objects** - Clearer intent
3. **Be specific** - Avoid `any` and `unknown`
4. **Export types** - Make them reusable
5. **Use strict mode** - Catch more errors
6. **Use enums for options** - Better than strings
7. **Leverage inference** - Don't type everything

## Type Inference

TypeScript can infer types automatically:

```typescript
// No need to specify type
const name = "John";  // Inferred as string
const age = 30;       // Inferred as number
const isActive = true; // Inferred as boolean

const greet = (person: string) => {
  return `Hello, ${person}`; // Return type inferred as string
};
```

## Next Steps

1. Explore `data/content.ts` for type examples
2. Check component prop types
3. Experiment with adding new typed data
4. Use VS Code's IntelliSense (Ctrl+Space)
5. Hover over variables to see inferred types

---

**TypeScript makes your code safer and more maintainable. Embrace it! 💪**
