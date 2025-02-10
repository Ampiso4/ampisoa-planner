# Ampisoa Planner 🎉

A modern event planning application built with Next.js that helps users create, manage, and coordinate events effortlessly.

## 🌟 Features

- **Modern Dashboard**
  - Visual event cards with hover effects
  - Quick stats overview
  - Recent activity tracking
  - Upcoming events display

- **Theme System**
  - Multiple color themes:
    - Default: #FFA09B, #FCC6FF, #FFE6C9, #FFC785
    - Rose: #FF8BA7, #FFC6D9, #FFE4E6, #FF9EAF
    - Lavender: #B8C0FF, #D4DAFF, #E7E9FF, #BBD0FF
  - Theme selector in navigation
  - Consistent styling across components

- **Event Management**
  - Create new events with detailed forms
  - Invite participants
  - Set alternative dates for voting
  - Track RSVPs and responses

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Touch-friendly interfaces
  - Smooth animations

## 🚀 Technologies

- **Frontend Framework**
  - Next.js 14
  - React 18
  - TypeScript

- **Styling**
  - Tailwind CSS
  - CSS Variables for theming
  - Custom animations
  - Responsive design patterns

- **UI Components**
  - Custom button components
  - Theme selector
  - Card layouts
  - Form elements

- **Development Tools**
  - ESLint
  - Prettier
  - TypeScript
  - Post CSS

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ampisoa-planner.git
   ```

2. Install dependencies:
   ```bash
   cd ampisoa-planner
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Colors
- **Primary**: #FFA09B (Coral Pink)
- **Secondary**: #FCC6FF (Light Pink)
- **Background**: #FFE6C9 (Soft Peach)
- **Accent**: #FFC785 (Warm Orange)
- **Text**: #2D1810 (Dark Brown)

### Typography
- **Headings**: Geist Sans
- **Body**: Geist Sans
- **Monospace**: Geist Mono (for code elements)

### Components
- **Cards**
  - Large radius (24px) for feature cards
  - Medium radius (20px) for stats cards
  - Hover animations and transitions
  - Gradient overlays

- **Buttons**
  - Primary: Gradient background
  - Secondary: Solid background
  - Ghost: Transparent with hover effect
  - Consistent rounded corners

- **Forms**
  - Clean, minimal design
  - Clear validation states
  - Responsive layouts
  - Accessible inputs

## 🛠 Project Structure

```
ampisoa-planner/
├── src/
│   ├── app/               # Next.js 14 app directory
│   │   ├── dashboard/     # Dashboard page
│   │   ├── events/       # Events pages
│   │   ├── profile/      # User profile
│   │   └── login/        # Authentication
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── ui/          # UI components
│   │   └── theme/       # Theme components
│   └── lib/             # Utilities and helpers
├── public/              # Static assets
└── styles/             # Global styles
```

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern web applications
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment
