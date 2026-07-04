# Notely — Product & Development Plan

## Overview

Build a modern, local-first, Obsidian-inspired note-taking web application focused on **temporary notes**, **beautiful writing**, and **portable exports**.

The application should be lightweight, fast, and require **no authentication or backend**.

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite

## Styling

* Tailwind CSS
* shadcn/ui
* Radix UI
* Lucide React

## Editor

* Tiptap
* Markdown support

## State Management

* Zustand

## Local Storage

* Dexie (IndexedDB)

## Export

* JSZip
* html2pdf.js
* remark
* rehype
* docx

---

# Design Philosophy

The application should feel like a simplified version of Obsidian.

Focus on:

* Clean
* Minimal
* Fast
* Local-first
* Keyboard friendly
* Responsive
* Beautiful typography

No unnecessary UI clutter.

---

# UI Component Rules

This project uses **shadcn/ui** as the primary component library.

Rules:

* Always use shadcn components before creating custom components.
* Build custom components by composing shadcn components.
* Use Radix primitives when a shadcn component is unavailable.
* Use Lucide icons throughout the application.
* Use Tailwind utilities only.
* Avoid custom CSS except for theme variables.

---

# Core Features

## Rich Markdown Editor

Supports:

* Headings
* Paragraphs
* Bold
* Italic
* Underline
* Strike
* Lists
* Ordered Lists
* Task Lists
* Tables
* Code Blocks
* Blockquotes
* Horizontal Rules
* Links
* Images
* GIFs
* Undo / Redo
* Keyboard Shortcuts

---

## Theme System

Default themes

* Light
* Dark

Architecture should support adding themes later.

Theme implementation should use CSS variables.

---

## Autosave

* Automatic saving
* No Save button
* Instant persistence
* Restore previous session automatically

---

## Local First

Everything stays inside the browser.

No account.

No server.

No internet required.

---

# Storage

Use IndexedDB through Dexie.

## Notes Table

```ts
{
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
}
```

---

## Images Table

```ts
{
    id: string
    blob: Blob
    mime: string
    width: number
    height: number
}
```

Images are stored independently.

---

# Image Handling

## While Editing

When the user

* Pastes an image
* Drops an image
* Uploads an image

the application should:

1. Generate an image ID.
2. Store the image Blob inside IndexedDB.
3. Insert a virtual reference into markdown.

Example

```md
![](asset://image-001)
```

During rendering

```
asset://image-001

↓

Lookup IndexedDB

↓

Create Blob URL

↓

Display image
```

The editor never stores Base64 while editing.

---

# Export System

The application supports five export formats.

## 1. Markdown + Assets (ZIP)

Structure

```
note.zip

├── note.md
└── assets
      image-001.png
      image-002.gif
```

Markdown

```md
# My Note

![](assets/image-001.png)
```

This is the recommended export.

---

## 2. Single Markdown File (Custom Format)

This is a custom format designed specifically for this application.

Markdown body remains clean.

Example

```md
# Temporary Notes

This is my note.

![](asset://image-001)

More text here.

---

<!-- TEMP NOTES ASSETS -->

<!-- asset:image-001 mime=image/png -->

iVBORw0KGgoAAA...

<!-- asset:image-002 mime=image/gif -->

R0lGODlh...
```

### Import

When importing:

* Parse asset section
* Decode Base64
* Store blobs
* Replace references
* Hide asset section while editing

This format keeps the document readable while remaining a single portable file.

---

## 3. HTML

Export complete HTML with embedded assets.

---

## 4. PDF

Generate printable PDF preserving formatting and images.

---

## 5. Rich Text

Export DOCX document.

---

# Application Layout

```
+------------------------------------------------------+
| Header                                               |
|------------------------------------------------------|
| Toolbar                                              |
|------------------------------------------------------|
|                                                      |
|                  Editor                              |
|                                                      |
|                                                      |
|------------------------------------------------------|
| Status Bar                                           |
+------------------------------------------------------+
```

---

# Header

Contains

* Logo
* Export Menu
* Theme Toggle
* Clear Note
* Settings

---

# Toolbar

Formatting actions

* Bold
* Italic
* Underline
* Heading
* Lists
* Checklist
* Quote
* Table
* Code
* Link
* Image
* Undo
* Redo

---

# Status Bar

Displays

* Word Count
* Character Count
* Reading Time
* Autosave Status

---

# Folder Structure

```
src
│
├── app
│
├── components
│   ├── ui                 // shadcn components
│   ├── editor
│   ├── layout
│   ├── toolbar
│   ├── dialogs
│   └── common
│
├── hooks
│
├── lib
│   ├── editor
│   ├── markdown
│   ├── export
│   ├── images
│   ├── theme
│   └── utils
│
├── store
│
├── db
│
├── styles
│
├── types
│
└── assets
```

---

# State Management

Use Zustand.

Stores

```
Theme Store

Editor Store

Export Store

Settings Store
```

Persistent data belongs in IndexedDB.

Temporary UI state belongs in Zustand.

---

# Development Phases

## Phase 1 — Project Setup

* Create React project
* Configure TypeScript
* Configure Tailwind CSS
* Install shadcn/ui
* Install required dependencies
* Configure ESLint and Prettier
* Configure path aliases
* Set up theme provider

---

## Phase 2 — Application Shell

Build:

* Header
* Toolbar
* Editor layout
* Status bar
* Responsive layout
* Theme switching

---

## Phase 3 — Editor

Implement:

* Tiptap
* Markdown support
* Toolbar actions
* Keyboard shortcuts
* Placeholder
* Word count
* Reading time

---

## Phase 4 — Storage

Implement:

* Dexie
* Notes database
* Image database
* Autosave
* Session restore

---

## Phase 5 — Images

Support:

* Paste
* Drag & Drop
* File upload
* GIFs
* Blob storage
* Asset references
* Image rendering

---

## Phase 6 — Export

Implement:

* Markdown
* ZIP
* HTML
* PDF
* DOCX

Implement custom Markdown asset format.

---

## Phase 7 — Polish

Add:

* Loading states
* Skeletons
* Toast notifications
* Empty states
* Keyboard improvements
* Accessibility improvements
* Performance optimization

---

# Future Roadmap

* Additional themes
* Multiple notes
* Note history
* Folder organization
* Search
* Command palette
* Mermaid diagrams
* KaTeX support
* Slash commands
* Drag-and-drop block reordering
* Import Obsidian vaults
* Cloud sync
* Plugin system
* PWA support
* Offline installation

---

# Cursor Coding Guidelines

* Use React + TypeScript only.
* Use functional components and hooks.
* Use shadcn/ui components whenever possible.
* Use Radix UI primitives if a shadcn component does not exist.
* Use Tailwind CSS for all styling.
* Use Lucide React for icons.
* Keep components focused on a single responsibility.
* Prefer composition over inheritance.
* Store persistent data in IndexedDB (Dexie).
* Store UI state in Zustand.
* Keep editor, storage, and export logic decoupled.
* Use CSS variables for theming.
* Avoid unnecessary re-renders and prop drilling.
* Ensure accessibility by default.
* Write clean, maintainable, and modular code.
* Follow consistent naming conventions and folder organization.
* Design the codebase to be extensible, making it easy to add new themes, export formats, and editor features in the future without major refactoring.
