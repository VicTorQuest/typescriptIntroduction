# TypeScript User and Admin Management

This TypeScript module defines user and admin types and provides a dataset of persons. It can be used in applications that require user role differentiation.

## Features
- Defines `User` and `Admin` interfaces.
- Creates a union type `Person` that includes both.
- Exports an array of sample `persons` with different roles.

## Installation
To use this module, ensure you have TypeScript and ts-node installed:
```sh
npm install -g typescript ts-node
```

## Usage
Run the TypeScript file using ts-node:
```sh
ts-node main.ts
```

## Data Structure
### User Interface
```typescript
interface User {
    type: 'user';
    name: string;
    username: string;
    id: number;
    department: string;
}
```

### Admin Interface
```typescript
interface Admin {
    type: 'admin';
    name: string;
    username: string;
    id: number;
    role: string;
}
```

### Sample Data
```typescript
const persons: Person[] = [
    { type: 'user', name: 'Victor Okolie', username: 'Quest', id: 1, department: 'Web 3' },
    { type: 'user', name: 'Kevin Durant', username: 'EasyMoneySniper', id: 2, department: 'Backend' },
    { type: 'admin', name: 'Elon Musk', username: 'TeslaBoss', id: 3, role: 'CEO' }
];
```

## Replit
https://replit.com/@Victorokolie200/typescriptIntroduction?v=1