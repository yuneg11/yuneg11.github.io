# EungGu Yun

A modern, responsive CV website built with **Next.js**, **TypeScript**, and **shadcn/ui**. The content is data-driven and uses static site generation for GitHub Pages deployment.

## 🔧 Development

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yuneg11/yuneg11.github.io.git
   cd yuneg11.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

### Building for Production

```bash
npm run build
```

This generates a static site in the `out/` directory ready for deployment.

## 📝 Updating CV

All CV content is stored in `data/cv.yaml`. Simply edit this file to update:

- Personal information and contact details
- Education history
- Work experience
- Publications
- Projects
- Awards and honors

The website will automatically rebuild and deploy when you push changes to the main branch.

### Adding Profile Image

1. Add profile image as `public/profile-image.jpeg`
2. The image will automatically appear in the profile header
3. If no image is provided, initials will be shown as fallback

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the main branch. Make sure to:

1. Enable GitHub Pages in repository settings
2. Set the source to "GitHub Actions"
3. The deploy workflow will handle the rest

### Manual Deployment

```bash
npm run build
# Deploy the contents of the `out/` directory to your hosting provider
```

## 🛠 Customization

### Styling
- The site uses Tailwind CSS with shadcn/ui components
- Custom styles can be added to `app/globals.css`
- Theme colors can be customized in the shadcn/ui configuration

### Adding New Sections
1. Add the new section to the YAML data structure
2. Update the TypeScript interfaces in `lib/cv-data.ts`
3. Create a new component or use the existing `Section` component
4. Add the section to `app/page.tsx`

### Adding New Components
```bash
npx shadcn@latest add [component-name]
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
