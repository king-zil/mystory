# Romantic 3D Website - Development Plan

## Design Guidelines

### Design References
- **Romantic cinematic atmosphere**: Soft lighting, floating particles, smooth animations
- **Glassmorphism UI**: Frosted glass panels with backdrop blur
- **Style**: Romantic Cinematic + Glassmorphism + Soft Glow

### Color Palette
- Primary Background: #0a0015 (Deep Purple-Black)
- Secondary: #1a0a2e (Dark Purple)
- Accent Pink: #ff6b9d (Romantic Pink)
- Accent Purple: #c084fc (Soft Purple)
- Warm Light: #fbbf24 (Golden Glow)
- Text Primary: #ffffff (White)
- Text Secondary: #e0b0ff (Light Lavender)
- Glass BG: rgba(255, 255, 255, 0.08)
- Glass Border: rgba(255, 255, 255, 0.15)

### Typography
- Heading: 'Playfair Display', serif - weight 700
- Body: 'Poppins', sans-serif - weight 300/400
- Accent: 'Dancing Script', cursive - for romantic touches

### Key Component Styles
- **Glass Cards**: backdrop-filter: blur(20px), bg rgba(255,255,255,0.08), border 1px rgba(255,255,255,0.15), rounded 20px
- **Buttons**: Glass style with pink glow on hover
- **Gallery Cards**: 3D perspective transform, glow shadow on hover, smooth rotation
- **Navigation**: Glassmorphism sidebar/dropdown with smooth slide animation

### Images to Generate
1. **hero-romantic-forest-aerial.jpg** - Aerial view of a misty forest at golden hour with warm light filtering through trees, romantic dreamy atmosphere (Style: photorealistic, warm tones)
2. **hero-city-night-lights.jpg** - Aerial view of a city at night with soft bokeh lights, romantic warm glow, cinematic feel (Style: photorealistic, warm night)
3. **hero-soft-clouds-glow.jpg** - Soft pastel clouds with warm glowing light, dreamy romantic sky, pink and purple hues (Style: photorealistic, dreamy)
4. **romantic-sunset-scenery.jpg** - Beautiful romantic sunset over a calm lake with warm reflections, soft pink and orange sky (Style: photorealistic, romantic)

---

## Development Tasks

1. **Create todo.md and generate images** - Design guidelines and hero images
2. **Build index.html** - Full page structure with hero, navigation, galleries, footer
3. **Build style.css** - Complete styling with glassmorphism, animations, responsive design
4. **Build script.js** - Three.js background, gallery functions, navigation, visual effects, 3D card interactions

## File Structure (3 files only)
- index.html - Complete HTML structure
- style.css - All styles, animations, responsive
- script.js - Three.js, galleries, effects, interactions
