# Instructions for Code Agents

## Package manager

Use bun as the package manager for this project. You can install dependencies and run scripts using bun commands.

## UI building guidelines

### Tone and style

- The UI should be clean, modern, and minimalistic.
- Use a consistent color scheme and typography throughout the application.
- Minimize visual clutter and focus on usability and accessibility.

### shadcn/ui components

- Prefer using shadcn/ui components when building the UI elements.
- shadcn/ui components are vendored in `src/components/ui` and are used throughout the codebase.
- If you need components that are not contained in the project, you must search for available components using shadcn skill and add them to the project.
- If no suitable components are available, you can create custom components, but you should follow the design principles and styles of shadcn/ui to maintain a consistent look and feel across the application.
- Do not directly modify `src/components/ui` components. These are managed by shadcn/ui and should be used as-is to ensure consistency and maintainability.
- Do not modify color settings in `src/index.css`. You should use the color variables defined in `src/index.css` to maintain a consistent color scheme across the application.
